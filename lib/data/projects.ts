export type ProjectCategory =
  | "video-editing"
  | "color-grading"
  | "motion-graphics"
  | "vfx"
  | "3d"
  | "web-app";

export interface Project {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  thumbnail: string;
  tags: string[];
  year: number;
  featured?: boolean;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Cinematic Travel Montage",
    slug: "cinematic-travel-montage",
    description:
      "A cinematic travel video featuring dynamic transitions, color grading, and rhythmic editing synced to music.",
    category: "video-editing",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["Premiere Pro", "Color Grading", "Sound Design"],
    year: 2025,
    featured: true,
  },
  {
    title: "Brand Commercial — Color Grade",
    slug: "brand-commercial-grade",
    description:
      "Full color grading pass for a fashion brand commercial. Created a warm, cinematic look with DaVinci Resolve.",
    category: "color-grading",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["DaVinci Resolve", "HDR", "Color Theory"],
    year: 2025,
    featured: true,
  },
  {
    title: "Animated Logo Reveal",
    slug: "animated-logo-reveal",
    description:
      "Sleek logo animation with particle effects and kinetic typography for a tech startup.",
    category: "motion-graphics",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["After Effects", "Typography", "Particles"],
    year: 2024,
    featured: true,
  },
  {
    title: "Fantasy Scene Composite",
    slug: "fantasy-scene-composite",
    description:
      "VFX-heavy fantasy scene with green screen compositing, particle simulations, and atmospheric effects.",
    category: "vfx",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["After Effects", "Keying", "Compositing"],
    year: 2024,
    featured: false,
  },
  {
    title: "3D Product Showcase",
    slug: "3d-product-showcase",
    description:
      "Sleek 3D product visualization with cinematic lighting and smooth camera animation created in Blender.",
    category: "3d",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["Blender", "Lighting", "Animation"],
    year: 2024,
    featured: false,
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "This very portfolio — a responsive, dark-mode capable site built with Next.js, Tailwind CSS, and AI assistance.",
    category: "web-app",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    year: 2026,
    featured: true,
    url: "https://pratikshrestha.com",
  },
  {
    title: "Music Video Edit",
    slug: "music-video-edit",
    description:
      "Fast-paced music video edit with beat-synced cuts, dynamic speed ramping, and stylized color grade.",
    category: "video-editing",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["Premiere Pro", "Speed Ramping", "Syncing"],
    year: 2024,
    featured: false,
  },
  {
    title: "UI Animation Prototype",
    slug: "ui-animation-prototype",
    description:
      "Interactive UI animations and micro-interactions prototype built for a mobile app onboarding flow.",
    category: "motion-graphics",
    thumbnail: "/images/projects/placeholder.svg",
    tags: ["After Effects", "Lottie", "UI/UX"],
    year: 2023,
    featured: false,
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  "video-editing": "Video Editing",
  "color-grading": "Color Grading",
  "motion-graphics": "Motion Graphics",
  vfx: "VFX",
  "3d": "3D",
  "web-app": "Web / App",
};
