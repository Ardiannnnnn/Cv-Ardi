export interface PersonalData {
  name: string;
  displayName: string;
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  cv: {
    path: string;
    filename: string;
  };
  skills: string[];
}
