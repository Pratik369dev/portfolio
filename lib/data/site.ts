export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    youtube?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Pratik Shrestha",
  title: "Creative Multimedia Professional",
  description:
    "Portfolio of Pratik Shrestha — video editing, color grading, motion graphics, VFX, 3D, and AI-assisted development.",
  url: "https://pratikshrestha.com",
  ogImage: "/images/og-image.jpg",
  links: {
    youtube: "https://youtube.com/@pratik",
    github: "https://github.com/pratikshrestha",
    linkedin: "https://linkedin.com/in/pratikshrestha",
    twitter: "https://twitter.com/pratik",
    instagram: "https://instagram.com/pratik",
    email: "hello@pratikshrestha.com",
  },
};
