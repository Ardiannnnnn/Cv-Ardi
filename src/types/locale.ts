export type Locale = "en" | "id";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface PortfolioProject {
  title: string;
  description: LocalizedText;
  github_link: string;
  technologies: string[];
  image: string;
}

export interface ExperienceShowcase {
  id: number;
  image: string;
  title: LocalizedText;
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: LocalizedText;
  showcase: ExperienceShowcase[];
}
