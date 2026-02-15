import React, { useState } from 'react';
import { AiMode } from '../types';
import { editImage, generateVideo, fileToBase64 } from '../services/geminiService';
import { Loader2, Upload, Play, Wand2, MonitorPlay, Zap, X } from 'lucide-react';

const AiPlayground: React.FC = () => {
  const [mode, setMode] = useState<AiMode>(AiMode.IMAGE_EDIT);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setResultUrl(null);
      setError(null);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setPreviewUrl(null);
    setResultUrl(null);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setIsLoading(true);
    setError(null);
    setResultUrl(null);

    try {
      const base64 = await fileToBase64(file);
      
      if (mode === AiMode.IMAGE_EDIT) {
        const result = await editImage(base64, prompt || "Enhance this image", file.type);
        setResultUrl(result);
      } else {
        const result = await generateVideo(base64, prompt || "Animate this scene naturally", file.type);
        setResultUrl(result);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 border-b-2 border-ink pb-2">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-swiss-red rounded-full animate-pulse"></div>
            <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Lab Apparatus V2.5</h3>
         </div>
         <span className="font-mono text-xs text-neutral-500">READY_STATE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 border-2 border-ink bg-white brutalist-shadow">
        
        {/* Controls Panel */}
        <div className="p-8 flex flex-col gap-8 relative">
           {/* Grid Background overlay for texture */}
           <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
           
           <div className="relative z-10">
              <label className="font-mono text-xs font-bold uppercase mb-4 block border-l-4 border-swiss-red pl-2">01. Select Modality</label>
              <div className="flex gap-0 border border-ink">
                <button
                  onClick={() => { setMode(AiMode.IMAGE_EDIT); setResultUrl(null); }}
                  className={`flex-1 py-4 px-4 font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 transition-all ${
                    mode === AiMode.IMAGE_EDIT 
                    ? 'bg-ink text-paper' 
                    : 'bg-white text-ink hover:bg-concrete'
                  }`}
                >
                  <Wand2 className="w-4 h-4" />
                  Gemini Edit
                </button>
                <div className="w-[1px] bg-ink"></div>
                <button
                  onClick={() => { setMode(AiMode.VIDEO_GEN); setResultUrl(null); }}
                  className={`flex-1 py-4 px-4 font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 transition-all ${
                    mode === AiMode.VIDEO_GEN 
                    ? 'bg-ink text-paper' 
                    : 'bg-white text-ink hover:bg-concrete'
                  }`}
                >
                  <MonitorPlay className="w-4 h-4" />
                  Veo Video
                </button>
              </div>
           </div>

           <div className="relative z-10">
              <label className="font-mono text-xs font-bold uppercase mb-4 block border-l-4 border-swiss-red pl-2">02. Input Data</label>
              <div 
                className={`relative h-48 border-2 border-dashed border-ink flex flex-col items-center justify-center transition-colors ${
                  !file ? 'bg-paper hover:bg-white' : 'bg-white'
                }`}
              >
                {!file ? (
                  <>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <Upload className="w-8 h-8 mb-4 text-ink" />
                    <span className="font-mono text-xs uppercase">Drop Source Image Here</span>
                  </>
                ) : (
                  <div className="w-full h-full relative group">
                    <img src={previewUrl!} alt="Preview" className="w-full h-full object-contain p-2" />
                    <button 
                      onClick={clearFile}
                      className="absolute top-2 right-2 bg-swiss-red text-white p-1 hover:bg-ink transition-colors z-30 brutalist-shadow-sm border border-ink"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
           </div>

           <div className="relative z-10">
              <label className="font-mono text-xs font-bold uppercase mb-4 block border-l-4 border-swiss-red pl-2">03. Prompt Engineering</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={mode === AiMode.IMAGE_EDIT ? "// Enter transformation parameters..." : "// Enter motion description..."}
                className="w-full bg-paper border border-ink p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-swiss-red min-h-[100px] resize-none"
              />
           </div>

           <button
              onClick={handleSubmit}
              disabled={!file || isLoading}
              className="relative z-10 w-full bg-swiss-red text-white border-2 border-ink py-4 font-mono font-bold uppercase tracking-widest hover:translate-y-1 hover:shadow-none brutalist-shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  PROCESSING...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-current" />
                  INITIALIZE SEQUENCE
                </>
              )}
            </button>
            {error && (
              <div className="font-mono text-xs text-swiss-red border border-swiss-red p-2 bg-red-50 mt-2">
                [ERR]: {error}
              </div>
            )}
        </div>

        {/* Viewport / Result */}
        <div className="border-t-2 lg:border-t-0 lg:border-l-2 border-ink bg-black min-h-[400px] flex items-center justify-center p-8 relative overflow-hidden">
          {/* Scanlines effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
          
          {isLoading ? (
             <div className="text-center z-20">
               <div className="font-mono text-swiss-red animate-pulse text-lg mb-4">COMPUTING TENSORS...</div>
               <div className="w-32 h-1 bg-neutral-800 mx-auto overflow-hidden">
                  <div className="w-full h-full bg-swiss-red animate-[progress-indeterminate_1s_infinite_linear] origin-left"></div>
               </div>
             </div>
          ) : resultUrl ? (
             mode === AiMode.IMAGE_EDIT ? (
               <img src={resultUrl} alt="Result" className="max-w-full max-h-[500px] border border-neutral-700 z-20" />
             ) : (
               <video controls src={resultUrl} className="max-w-full max-h-[500px] border border-neutral-700 z-20" autoPlay loop />
             )
          ) : (
            <div className="text-center z-20 opacity-30">
              <div className="border border-white w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-neutral-800"></div>
              </div>
              <p className="font-mono text-white text-xs tracking-widest">NO OUTPUT SIGNAL</p>
            </div>
          )}
          
          {/* HUD Overlay Elements */}
          <div className="absolute top-4 left-4 text-[10px] font-mono text-white opacity-50 z-20">
            CAM_01 // REC
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white opacity-50 z-20">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
      <p className="font-mono text-[10px] text-neutral-400 mt-4 text-right">
        * Veo 3.1 generation requires paid API key authentication via Google AI Studio.
      </p>
    </div>
  );
};

export default AiPlayground;