export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
  proficiency: number;
}

export const skills: SkillCategory[] = [
  {
    name: "Video Editing",
    icon: "Clapperboard",
    items: ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "Storytelling", "Pacing & Rhythm"],
    proficiency: 95,
  },
  {
    name: "Color Grading",
    icon: "Palette",
    items: ["DaVinci Resolve", "Color Wheels", "LUTs", "HDR Grading", "Color Theory"],
    proficiency: 90,
  },
  {
    name: "Motion Graphics",
    icon: "Sparkles",
    items: ["After Effects", "2D Animation", "Typography", "Kinetic Type", "Shape Layers"],
    proficiency: 85,
  },
  {
    name: "VFX / SFX",
    icon: "Zap",
    items: ["After Effects", "Compositing", "Rotoscoping", "Keying", "Tracking"],
    proficiency: 75,
  },
  {
    name: "3D",
    icon: "Box",
    items: ["Blender", "Basic Modeling", "Texturing", "Lighting", "Basic Animation"],
    proficiency: 65,
  },
  {
    name: "Web / App",
    icon: "Code",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI-Assisted Development"],
    proficiency: 70,
  },
];
