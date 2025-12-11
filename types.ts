export interface CaseStudySection {
  type: 'text' | 'image' | 'list' | 'heading' | 'grid';
  title?: string;
  content?: string;
  items?: { title: string; desc: string }[];
  imageUrl?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  gradient: string;
  role: string;
  outcome: string;
  description: string;
  features: string[];
  // Extended fields for Case Study
  date?: string;
  service?: string;
  liveUrl?: string;
  caseStudy?: CaseStudySection[];
  tags?: string[]; // New field for card pills
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}