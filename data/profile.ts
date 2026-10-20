// All of the site's content lives here. Edit this file to update the portfolio.

export type Job = {
  role: string;
  company: string;
  period: string;
  // Optional one or two sentences about what you did there.
  summary?: string;
  // Optional key achievements, one per line.
  highlights?: string[];
};

// The three areas of work. Each has its own accent color across the site:
// mobile = indigo, frontend = blue, backend = green.
export type DisciplineKey = "mobile" | "frontend" | "backend";

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  // Public verification link.
  url: string;
};

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  github?: string;
  live?: string;
};

// Which kind of mock UI the project's (blurred) preview shows.
export type PreviewKind = "web" | "mobile" | "tv";

export type Project = {
  // URL segment: /projects/<slug>
  slug: string;
  name: string;
  // Short kind-of-project label, e.g. "Healthcare · Full stack".
  category: string;
  // Main area of work; picks the card's accent color.
  discipline: DisciplineKey;
  // Client work under NDA: the preview stays blurred and locked.
  client: boolean;
  preview: PreviewKind;
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
  location: "Ahmedabad, India",
  intro:
    "I build mobile apps, web frontends and the APIs behind them, with React Native, React and Next.js, and Node.js.",
  now: "I'm a Software Engineer at Simform. Before that I spent 2.5 years at Radixweb shipping full-stack web, mobile and smart-TV products for clients — from React Native apps on the App Store and Google Play to Next.js platforms and the Node.js, Firebase and AWS services behind them.",
  quote: "Good software feels obvious to the person using it. Getting it there is the work.",
  // First year of professional work, used for the "since" stat.
  startedYear: 2022,
  // Industries the client work has covered.
  domains: [
    "Maritime & vessel reporting",
    "Healthcare & wellness",
    "Digital art & entertainment",
    "Pet travel & veterinary",
    "Insurance",
  ],

  links: {
    github: "https://github.com/MayankBhadeshiya",
    email: "mayankbhadeshiya2@gmail.com",
    linkedin: "https://www.linkedin.com/in/mayank-bhadeshiya/",
    // Add a résumé URL to show a download link.
    resume: "",
  },

  experience: [
    {
      role: "Software Engineer",
      company: "Simform",
      period: "Sep 2025 – now",
      summary:
        "Building cross-platform mobile apps and the web and backend pieces around them with React Native, Expo, Next.js and Node.js.",
    },
    {
      role: "Associate Software Engineer",
      company: "Radixweb",
      period: "Feb 2023 – 2025",
      summary:
        "Full-stack web and mobile developer on client products across maritime, healthcare, digital art and insurance — with a 100% on-time delivery record.",
      highlights: [
        "Built responsive web and mobile apps with React, React Native, Next.js and Node.js.",
        "Created scalable APIs with Express, Firebase Functions and AWS Lambda.",
        "Designed SQL and NoSQL data models with PostgreSQL, MySQL, MongoDB, Prisma, Sequelize and Mongoose.",
        "Shipped React Native apps to the App Store and Google Play.",
        "Integrated Stripe, PayPal, Payflow Pro and Razorpay payments, plus Google Maps, reCAPTCHA, Analytics and OTP verification.",
        "Deployed to production on AWS (EC2, S3, CloudFront) with Docker; owned test cases, CI/CD planning and post-release monitoring.",
      ],
    },
    {
      role: "Android Developer Intern",
      company: "BrainyBeam Technologies",
      period: "Jun – Jul 2022",
      summary:
        "Built an e-commerce app in Android Studio and learned HTTP networking and JSON parsing.",
    },
  ] as Job[],

  education: {
    degree: "B.E. Information Technology",
    school: "Ahmedabad Institute of Technology",
    period: "2019 – 2023",
    grade: "CGPA 8",
  },

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issued: "Jun 2025",
      url: "https://www.credly.com/badges/e706e31c-9306-461a-a893-566d6bd40d8d/public_url",
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta · Coursera",
      issued: "May 2024",
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
      name: "Smart TV apps",
      discipline: "mobile",
      skills: [
        "React Native TV",
        "LG webOS",
        "VIZIO Companion Library",
        "Apple TV",
        "Google TV",
        "Amazon Fire TV SDK",
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
        "Preact",
        "Astro",
        "Redux Toolkit",
        "Zustand",
        "React Query",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS",
      ],
    },
    {
      name: "Backend & cloud",
      discipline: "backend",
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "Firebase & Cloud Functions",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Prisma",
        "Sequelize",
        "Mongoose",
        "AWS (EC2, S3, Lambda, CloudFront)",
        "Docker",
        "Wasp",
        "OpenSaaS",
      ],
    },
    {
      name: "Payments & integrations",
      skills: [
        "Stripe",
        "Razorpay",
        "PayPal",
        "Payflow Pro",
        "Google Analytics",
        "reCAPTCHA",
        "Email & OTP verification",
      ],
    },
    {
      name: "How I work",
      skills: [
        "Jest",
        "CI/CD",
        "Monorepos",
        "Microservices",
        "Git",
        "Code review",
        "Mentoring",
        "Agile / Scrum",
        "Claude Code",
        "Cursor",
        "GitHub Copilot",
        "ChatGPT",
      ],
    },
  ] as SkillGroup[],

  // Areas of work shown in the About section.
  disciplines: [
    {
      key: "mobile",
      name: "Mobile & TV apps",
      body: "Cross-platform iOS, Android and smart-TV apps, from first screen to store release and over-the-air updates.",
      tools: ["React Native", "Expo", "EAS", "React Native TV", "In-app purchases"],
    },
    {
      key: "frontend",
      name: "Web frontends",
      body: "Fast, accessible interfaces, dashboards and marketing sites with clean state management.",
      tools: ["React", "Next.js", "TypeScript", "Astro", "Tailwind"],
    },
    {
      key: "backend",
      name: "Backend & APIs",
      body: "The services behind the apps: REST APIs, databases, payments and cloud functions.",
      tools: ["Node.js", "Express", "PostgreSQL", "Firebase", "AWS"],
    },
  ] as Discipline[],

  // Projects for the "Selected work" section and the /projects/<slug> pages.
  // Client projects show a blurred, locked preview instead of real screens.
  projects: [
    {
      slug: "wellnest",
      name: "WellNest",
      category: "Healthcare & wellness · Full stack",
      discipline: "frontend",
      client: true,
      preview: "web",
      tagline: "A wellness platform for booking sessions with expert consultants.",
      summary:
        "WellNest connects people with consultants in traditional medicine, nutrition, therapy, NLP, Ayurveda, life coaching and more. The live web platform lets users browse consultants, view detailed profiles and book sessions; an admin panel handles consultant onboarding, services, categories and content. A React Native app for mobile-first booking and wellness-goal tracking is in development.",
      role: "Full Stack Developer",
      platforms: ["Web", "iOS", "Android"],
      stack: ["React", "React Native", "Node.js", "MongoDB", "Mongoose", "Stripe", "PayPal"],
      highlights: [
        "Owned full-stack development, debugging and deployment across web and mobile.",
        "Started the React Native app from scratch, laying the foundation for its release.",
        "Fixed critical authentication and onboarding bugs, improving user retention.",
        "Built a coupon-code system and first-free-session logic to boost acquisition.",
        "Reworked key booking journeys for clearer navigation.",
        "Integrated Stripe and PayPal for secure payments.",
      ],
      links: { live: "https://wellnest.fr/" },
    },
    {
      slug: "petpass",
      name: "PetPass",
      category: "Pet travel · SaaS",
      discipline: "backend",
      client: true,
      preview: "web",
      tagline: "Animal Health and Rabies certificates for pets travelling from the UK to the EU.",
      summary:
        "PetPass is a UK platform that generates Animal Health Certificates and Rabies Certificates for pets travelling to the EU. It has two major modules — a Vet Practice Portal and an Admin Panel — covering appointments, pet records, certificates, invoicing and team collaboration, with online payments through Stripe.",
      role: "Full Stack Developer",
      platforms: ["Web"],
      stack: ["Wasp", "OpenSaaS", "React", "PostgreSQL", "Prisma", "Stripe"],
      highlights: [
        "Architected and built the Vet Practice Portal and Admin Panel on Wasp and OpenSaaS.",
        "Built AHC and Rabies certificate generation, invoicing and vet-practice onboarding.",
        "Added branch management, multi-user access control and reporting dashboards.",
        "Created an admin-configurable form builder: forms defined in the backend, shared by link and rendered on a public portal.",
        "Integrated Stripe for certificate bookings and vet services.",
        "Set up CI/CD and production deployment with proper environment configuration.",
      ],
      links: { live: "https://petpass.com/" },
    },
    {
      slug: "canvascast",
      name: "CanvasCast",
      category: "Digital art · Mobile & smart TV",
      discipline: "mobile",
      client: true,
      preview: "tv",
      tagline: "Curated art carousels streamed to phones and smart TVs.",
      summary:
        "CanvasCast is a cross-platform art carousel for mobile and smart TVs. People customise and stream curated art displays with configurable transitions, styles and subscription tiers. It spans a React Native mobile app, one TV app architecture for VIZIO, LG, Apple TV and Google TV, and an Astro marketing site.",
      role: "Frontend Developer",
      platforms: ["iOS", "Android", "LG webOS", "VIZIO", "Apple TV", "Google TV"],
      stack: [
        "React Native",
        "React",
        "Tailwind CSS",
        "Astro",
        "LG webOS",
        "VIZIO Companion Library",
      ],
      highlights: [
        "Set up and maintained a monorepo so every TV build shares one codebase.",
        "Shipped the mobile app to the App Store and Google Play with profiles, carousel customisation and Apple/Google in-app purchases.",
        "Built platform-specific features for VIZIO, LG webOS, Apple TV and Google TV.",
        "Planned compatibility for Sony TV, Xbox and Amazon Fire TV.",
        "Built a responsive Tailwind UI and tuned cross-platform performance.",
        "Supported the Astro marketing and help-desk site.",
      ],
      links: { live: "https://canvascast.com/" },
    },
    {
      slug: "voyagelog",
      name: "VoyageLog",
      category: "Maritime tech · Full stack",
      discipline: "backend",
      client: true,
      preview: "web",
      tagline: "Offline-ready noon reporting for vessel crews and onshore teams.",
      summary:
        "VoyageLog is a maritime-tech platform that helps ship owners, operators and charterers cut emissions with vessel and voyage data. I worked on the cloud platform where crews and onshore teams create and sync noon reports online and offline, with validation across 200+ data points, multi-user collaboration and APIs for analytics.",
      role: "Full Stack Developer",
      platforms: ["Web"],
      stack: ["Node.js", "Next.js", "React", "Preact", "PostgreSQL", "Prisma", "AWS"],
      highlights: [
        "Built local backup and restore so crews keep working fully offline.",
        "Added offline-aware sync between vessel-side storage and cloud APIs.",
        "Extended validation rules across reporting fields for data quality and compliance.",
        "Created data catalogs covering 800+ fields for validation, calculations and configuration.",
        "Developed the Noon Report APIs for real-time retrieval and management.",
        "Deployed a scalable serverless backend on AWS.",
      ],
      links: { live: "https://voyagelog.com/" },
    },
  ] as Project[],
};
