export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    role: "Freelance Video Editor & Motion Designer",
    organization: "Self-Employed",
    startDate: "2026",
    endDate: "Present",
    description:
      "Delivering video editing, color grading, and motion graphics projects for brands, agencies, and content creators. Managed end-to-end post-production workflows.",
    type: "work",
  },
  {
    role: "Senior Video Editor",
    organization: "Ascribe Media",
    startDate: "2024",
    endDate: "2026",
    description:
      "Lead editor for high-budget commercial and multi-platform social campaigns, driving the visual narrative from assembly to final delivery. Collaborated with senior creative directors to pioneer sophisticated color grading workflows and immersive soundscapes, elevating production value across global client portfolios",
    type: "work",
  },
  {
    role: "Junior Video Editor",
    organization: "Ascribe Media",
    startDate: "2023",
    endDate: "2024",
    description:
      "Edited commercial and social media content. Assisted senior editors with color grading and sound design on client projects.",
    type: "work",
  },
  {
    role: "Bachelor in Computer Applications (BCA)",
    organization: "Tribhuvan University",
    startDate: "2022",
    endDate: "Present",
    description:
      "Pursuing a Bachelor's degree in Computer Applications, focusing on software development, web technologies, and database management. Expected graduation in 2026.",
    type: "education",
  },
];
