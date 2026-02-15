export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  tech: string;
  description: string[];
  link?: string;
}

export enum AiMode {
  IMAGE_EDIT = 'IMAGE_EDIT',
  VIDEO_GEN = 'VIDEO_GEN'
}