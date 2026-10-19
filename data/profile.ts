// All of the site's content lives here. Edit this file to update the portfolio.

export type Job = {
  role: string;
  company: string;
  period: string;
  // Optional one or two sentences about what you did there.
  summary?: string;
};

// The three areas of work. Each has its own accent color across the site:
// mobile = orange, frontend = blue, backend = mint.
export type DisciplineKey = "mobile" | "frontend" | "backend";

export type Certification = {
  name: string;
  issuer: string;
  // Public verification link.
  url: string;
};

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
  // Short kind-of-project label, e.g. "Mobile / Health tech".
  category: string;
  // Main area of work; picks the card's accent color.
  discipline: DisciplineKey;
  // One line shown on the home page card.
  tagline: string;
  // Overview paragraph on the project's own page.
  summary: string;
  role: string;
  platforms: string[];
  stack: string[];
  // What you built or solved, one point per entry.
  highlights: string[];
  links?: ProjectLinks;
};

export type SkillGroup = {
  name: string;
  // Groups without a discipline use the ink accent.
  discipline?: DisciplineKey;
  skills: string[];
};

// One of the areas of work listed in the About section.
export type Discipline = {
  key: DisciplineKey;
  name: string;
  body: string;
  tools: string[];
};

export const profile = {
  name: "Mayank Bhadeshiya",
  firstName: "Mayank",
  lastName: "Bhadeshiya",
  title: "Software Engineer",
  intro:
    "I build mobile apps, web frontends and the APIs behind them, with React Native, React and Next.js, and Node.js.",
  now: "I'm a Software Engineer at Simform. I work across the stack a product needs: cross-platform mobile apps in React Native and Expo, web frontends in React and Next.js, and the Node.js, Firebase and AWS services behind them — through to payments, push notifications and store releases.",
  quote: "Good software feels obvious to the person using it. Getting it there is the work.",
  // First year of professional work, used for the "since" stat.
  startedYear: 2022,

  links: {
    github: "https://github.com/MayankBhadeshiya",
    // Add these to show them in the contact section.
    email: "mayankbhadeshiya2@gmail.com",
    linkedin: "https://www.linkedin.com/in/mayank-bhadeshiya/",
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
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      url: "https://www.credly.com/badges/e706e31c-9306-461a-a893-566d6bd40d8d/public_url",
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta · Coursera",
      url: "https://www.coursera.org/account/accomplishments/specialization/MJRAQARZHDGB",
    },
  ] as Certification[],

  skills: [
    {
      name: "Mobile",
      discipline: "mobile",
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
      discipline: "frontend",
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
      discipline: "backend",
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

  // Areas of work shown in the About section.
  disciplines: [
    {
      key: "mobile",
      name: "Mobile apps",
      body: "Cross-platform iOS and Android apps, from first screen to store release and over-the-air updates.",
      tools: ["React Native", "Expo", "EAS", "Push", "In-app purchases"],
    },
    {
      key: "frontend",
      name: "Web frontends",
      body: "Fast, accessible interfaces and dashboards with clean state management.",
      tools: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind"],
    },
    {
      key: "backend",
      name: "Backend & APIs",
      body: "The services behind the apps: REST APIs, databases, payments and cloud functions.",
      tools: ["Node.js", "Express", "PostgreSQL", "Firebase", "AWS"],
    },
  ] as Discipline[],

  // Projects for the "Selected work" section and the /projects/<slug> pages.
  // The section stays hidden while this list is empty.
  projects: [
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "wearables-app",
      name: "Health & wearables app",
      category: "Mobile / Health tech",
      discipline: "mobile",
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
    },
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "voice-app",
      name: "Real-time voice app",
      category: "Mobile / Real-time",
      discipline: "mobile",
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
    },
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "commerce-app",
      name: "Commerce & payments app",
      category: "Mobile / Fintech",
      discipline: "backend",
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
    },
    // TODO: replace with real project details (drafted from résumé skills).
    {
      slug: "tv-app",
      name: "React Native TV app",
      category: "TV / Cross-platform",
      discipline: "frontend",
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
    },
  ] as Project[],
};
