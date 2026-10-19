// All of the site's content lives here. Edit this file to update the portfolio.

export type Job = {
  role: string;
  company: string;
  period: string;
  // Optional one or two sentences about what you did there.
  summary?: string;
};

export type ProjectAccent = "periwinkle" | "apricot" | "mint" | "rose";

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  github?: string;
  live?: string;
};

export type Project = {
  // URL segment: /projects/<slug>
  slug: string;
  name: string;
  // One line shown on the home page card.
  tagline: string;
  // Overview paragraph on the project's own page.
  summary: string;
  role: string;
  platforms: string[];
  stack: string[];
  // What you built or solved, one point per entry.
  highlights: string[];
  // Cover color; one of the accent tokens in constants/colors.ts.
  accent: ProjectAccent;
  links?: ProjectLinks;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

// One chapter in the "What I build" showcase. `screen` picks the phone mockup.
export type Capability = {
  screen: "payments" | "voice" | "health" | "ship";
  label: string;
  title: string;
  body: string;
};

export const profile = {
  name: "Mayank Bhadeshiya",
  firstName: "Mayank",
  lastName: "Bhadeshiya",
  title: "Software Engineer",
  intro:
    "I build mobile apps with React Native — from the first screen to the release on the App Store and Google Play.",
  now: "I'm a Software Engineer at Simform. Most of my work is cross-platform mobile: Expo and bare React Native apps, the Node.js and Firebase services behind them, and the payments, push notifications and over-the-air updates that keep them running in production.",

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
      skills: ["Stripe", "Razorpay", "PayPal", "Payflow Pro"],
    },
    {
      name: "How I work",
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

  // Chapters for the pinned phone showcase, in scroll order.
  capabilities: [
    {
      screen: "payments",
      label: "Payments",
      title: "Checkout that just works",
      body: "Stripe, Razorpay, PayPal and Payflow Pro on the web, plus Apple and Google in-app purchases on mobile.",
    },
    {
      screen: "voice",
      label: "Real-time voice",
      title: "Talk to people, live",
      body: "Real-time voice features built on LiveKit, with push notifications that bring people back into the conversation.",
    },
    {
      screen: "health",
      label: "Health & wearables",
      title: "Data from the wrist",
      body: "Steps, heart rate and activity pulled from wearables through the Terra API and shown in a way people actually read.",
    },
    {
      screen: "ship",
      label: "Shipping",
      title: "From commit to the store",
      body: "EAS Build and Workflows for CI/CD, EAS Update for over-the-air fixes, and releases to the App Store and Google Play.",
    },
  ] as Capability[],

  // Projects for the "Selected work" section and the /projects/<slug> pages.
  // The section stays hidden while this list is empty.
  projects: [
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "wearables-app",
      name: "Health & wearables app",
      tagline: "Activity and heart-rate data from wearables, in one mobile app.",
      summary:
        "A cross-platform app that connects to people's wearables, pulls in their steps, heart rate and activity, and turns it into daily and weekly views they check every morning.",
      role: "Mobile developer",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "Expo", "Terra API", "Firebase", "Push notifications"],
      highlights: [
        "Connected wearable providers through the Terra API.",
        "Built daily and weekly activity views from raw health data.",
        "Sent reminders and summaries with push notifications.",
      ],
      accent: "mint",
    },
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "voice-app",
      name: "Real-time voice app",
      tagline: "Live voice calls inside a React Native app.",
      summary:
        "A mobile app with real-time voice at its core: people join calls in a tap, see who's speaking, and get notified when a conversation they care about starts.",
      role: "Mobile developer",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "LiveKit", "Node.js", "Push notifications"],
      highlights: [
        "Built live voice rooms on LiveKit.",
        "Added call controls, speaking indicators and reconnect handling.",
        "Used push notifications to bring people back into live calls.",
      ],
      accent: "rose",
    },
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "commerce-app",
      name: "Commerce & payments app",
      tagline: "Shopping, scanning and checkout with several payment providers.",
      summary:
        "A shopping app where people find stores on a map, scan products to look them up, and pay with the method they prefer, from cards and UPI to in-app purchases.",
      role: "Mobile developer",
      platforms: ["iOS", "Android"],
      stack: [
        "React Native",
        "Stripe",
        "Razorpay",
        "PayPal",
        "In-app purchases",
        "Barcode scanning",
        "Google Maps",
      ],
      highlights: [
        "Integrated Stripe, Razorpay and PayPal checkout.",
        "Added Apple and Google in-app purchases for subscriptions.",
        "Built barcode scanning and a map of nearby stores.",
      ],
      accent: "apricot",
    },
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "tv-app",
      name: "React Native TV app",
      tagline: "One React Native codebase, running on the big screen.",
      summary:
        "A TV app built with React Native TV, designed for remote-control navigation and shipped with the same build and over-the-air update pipeline as the mobile apps.",
      role: "Mobile developer",
      platforms: ["Android TV", "Apple TV"],
      stack: ["React Native TV", "TypeScript", "EAS Build", "EAS Update"],
      highlights: [
        "Built focus-based navigation for remote controls.",
        "Shared code and components with the mobile apps.",
        "Shipped fixes over the air with EAS Update.",
      ],
      accent: "periwinkle",
    },
  ] as Project[],
};
