// All of the site's content lives here. Edit this file to update the portfolio.

export type Job = {
  role: string;
  company: string;
  period: string;
  // Optional one or two sentences about what you did there.
  summary?: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
};

export type SkillGroup = {
  name: string;
  color: "coral" | "sun" | "mint" | "cobalt" | "lilac";
  skills: string[];
};

export const profile = {
  name: "Mayank Bhadeshiya",
  firstName: "Mayank",
  lastName: "Bhadeshiya",
  title: "Software Engineer",
  intro:
    "I build mobile apps with React Native — from the first screen to the release on the App Store and Google Play.",
  now:
    "I'm a Software Engineer at Simform. Most of my work is cross-platform mobile: Expo and bare React Native apps, the Node.js and Firebase services behind them, and the payments, push notifications and over-the-air updates that keep them running in production.",

  links: {
    github: "https://github.com/MayankBhadeshiya",
    // Add these to show them in the contact section.
    email: "",
    linkedin: "",
    resume: "",
  },

  experience: [
    {
      role: "Software Engineer",
      company: "Simform",
      period: "Sep 2025 – now",
    },
    {
      role: "Associate Software Engineer",
      company: "Radixweb",
      period: "Feb 2023 – 2025",
    },
    {
      role: "Android Developer Intern",
      company: "BrainyBeam Technologies",
      period: "Jun 2022",
    },
  ] as Job[],

  education: {
    degree: "B.E.",
    school: "Ahmedabad Institute of Technology",
  },

  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Meta Front-End Developer Professional Certificate",
  ],

  skills: [
    {
      name: "Mobile",
      color: "coral",
      skills: [
        "React Native (CLI & Expo)",
        "Expo EAS Build",
        "EAS Update (OTA)",
        "EAS Workflows",
        "Expo config plugins",
        "React Native TV",
        "Push notifications",
        "In-app purchases",
        "App Store & Google Play releases",
        "Google Maps",
        "Barcode scanning",
        "LiveKit (real-time voice)",
        "Terra API (wearables)",
      ],
    },
    {
      name: "Web",
      color: "sun",
      skills: [
        "TypeScript",
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "Redux Toolkit",
        "Zustand",
        "React Query",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend & cloud",
      color: "mint",
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Firebase & Cloud Functions",
        "AWS (EC2, S3, Lambda, CloudFront)",
        "Docker",
      ],
    },
    {
      name: "Payments",
      color: "lilac",
      skills: ["Stripe", "Razorpay", "PayPal", "Payflow Pro"],
    },
    {
      name: "How I work",
      color: "cobalt",
      skills: [
        "Jest",
        "CI/CD",
        "Monorepos",
        "Git",
        "Code review",
        "Mentoring",
        "Agile / Scrum",
        "Claude Code",
        "Cursor",
        "GitHub Copilot",
      ],
    },
  ] as SkillGroup[],

  // Add your projects here. The section stays hidden while this list is empty.
  // Example:
  // { name: "App name", description: "What it does and who uses it.", stack: ["React Native", "Firebase"], link: "https://..." },
  projects: [] as Project[],
};
