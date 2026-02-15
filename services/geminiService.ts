import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAiClient = async (requiresPaidKey: boolean = false) => {
  // Access aistudio via type assertion to avoid interface merging conflicts
  const win = window as any;
  if (requiresPaidKey && win.aistudio) {
    const hasKey = await win.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await win.aistudio.openSelectKey();
    }
  }
  // We assume process.env.API_KEY is available or injected via the aistudio selection
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Image Editing using gemini-2.5-flash-image
 * "Nano banana powered app"
 */
export const editImage = async (
  base64Image: string,
  prompt: string,
  mimeType: string = 'image/png'
): Promise<string> => {
  const ai = await getAiClient();
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image,
            mimeType: mimeType,
          },
        },
        {
          text: prompt,
        },
      ],
    },
  });

  // Extract image from response
  if (response.candidates && response.candidates[0].content.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData && part.inlineData.data) {
        return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
      }
    }
  }
  
  throw new Error("No image generated.");
};

/**
 * Generate Artistic Hobby Images using Gemini 3 Pro Image
 * "Banana Pro powered"
 */
export const generateHobbyImage = async (sport: 'Basketball' | 'Badminton'): Promise<string> => {
  // High quality image generation requires paid key selection flow usually
  const ai = await getAiClient(true);
  
  const prompt = `A cinematic, high-fashion monochrome photography shot of ${sport}, dramatic lighting, motion blur, swiss minimalist aesthetic, leica style, high contrast, 8k resolution, artistic composition.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [{ text: prompt }],
    },
    config: {
      imageConfig: {
        aspectRatio: "4:3",
        imageSize: "1K"
      }
    }
  });

  // Extract image from response
  if (response.candidates && response.candidates[0].content.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData && part.inlineData.data) {
        return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
      }
    }
  }
  
  throw new Error("No image generated.");
};

/**
 * Video Generation using Veo
 * "Animate images with Veo"
 */
export const generateVideo = async (
  base64Image: string,
  prompt: string = "Animate this image",
  mimeType: string = 'image/png'
): Promise<string> => {
  // Veo requires a paid key selection
  const ai = await getAiClient(true);

  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    image: {
      imageBytes: base64Image,
      mimeType: mimeType,
    },
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '16:9'
    }
  });

  // Poll for completion
  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

  if (!downloadLink) {
    throw new Error("Video generation failed to return a URI.");
  }

  // Fetch the actual video bytes using the API key
  const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  if (!videoResponse.ok) {
    throw new Error("Failed to download generated video.");
  }

  const videoBlob = await videoResponse.blob();
  return URL.createObjectURL(videoBlob);
};

// Helper to convert File to Base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix (e.g. "data:image/png;base64,")
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = error => reject(error);
  });
};