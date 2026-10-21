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
    "Fitness & gyms",
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
        "Building Expo apps and a Next.js web app for fitness and health clients, and mentoring junior developers.",
      highlights: [
        "Built a gym member app in Expo: class calendar and slot booking, body-composition and vitals logging with history graphs, goals, staff-assigned workouts, an exercise video library and challenges.",
        "Built a connected-health platform across an Expo app and a Next.js web app: biological age, biomarkers, wearable vitals, an AI health coach with real-time voice, daily habits, and food logging with calorie tracking.",
        "Integrated wearable data with Terra API and Junction, real-time voice with LiveKit, and barcode scanning for food logging.",
        "Added membership subscriptions with RevenueCat in-app purchases.",
        "Worked in TypeScript with Redux Thunk, in a monorepo with Jest unit tests; shipped builds and over-the-air updates with EAS Build and EAS Update.",
        "Mentored a junior developer on each project through pairing and code review.",
      ],
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
        "RevenueCat",
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
        "Redux Thunk",
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
  // These are client products under NDA: names are codenames, there are no
  // links, and descriptions stay general. Never put a real product name here.
  projects: [
    {
      slug: "fitcircle",
      name: "FitCircle",
      category: "Fitness · Mobile",
      discipline: "mobile",
      client: true,
      preview: "mobile",
      tagline: "A gym member app for booking classes, tracking progress and following workouts.",
      summary:
        "A member app for a gym. Members book open slots from the class calendar, log body measurements and vitals and follow them over time in history graphs, set goals, follow workouts their trainers create, learn exercises from a video library, and join gym challenges.",
      role: "Mobile Developer",
      platforms: ["iOS", "Android"],
      stack: ["React Native", "Expo", "EAS", "TypeScript", "Redux Thunk"],
      highlights: [
        "Built the class calendar with slot availability and booking.",
        "Built logging for weight, body fat, muscle, lean and fat mass, blood pressure, vertical jump, spinal angles and body circumferences, with history graphs for each.",
        "Added goal setting and progress tracking.",
        "Showed staff-created personal workouts and an exercise library with step-by-step form, posture tips and videos.",
        "Built gym challenges members can join.",
        "Shipped with EAS and mentored a junior developer on the team.",
      ],
    },
    {
      slug: "vitalis",
      name: "Vitalis",
      category: "Connected health · Mobile & web",
      discipline: "mobile",
      client: true,
      preview: "mobile",
      tagline: "A connected-health app that brings wearables, nutrition and an AI coach together.",
      summary:
        "A personal health platform that pulls wearable data, biomarkers and daily habits into one view, with a biological-age score and an AI coach that explains what the numbers mean. I worked on both the Expo mobile app and the Next.js web app.",
      role: "Mobile & Web Developer",
      platforms: ["iOS", "Android", "Web"],
      stack: [
        "React Native",
        "Expo",
        "EAS",
        "Next.js",
        "TypeScript",
        "Redux Thunk",
        "RevenueCat",
        "Terra API",
        "LiveKit",
      ],
      highlights: [
        "Built the features across the Expo app and the Next.js web app, in a shared monorepo.",
        "Built the biological-age view, biomarkers and daily focus habits.",
        "Pulled wearable vitals (HRV, resting heart rate, steps, active energy) through Terra API and Junction.",
        "Built the AI health coach, including real-time voice conversations with LiveKit.",
        "Added food logging with a nutrition database, barcode scanning and calorie tracking.",
        "Built membership subscriptions with RevenueCat in-app purchases.",
        "Wrote Jest unit tests, shipped with EAS Build and EAS Update, and mentored a junior developer on the team.",
      ],
    },
    {
      slug: "wellnest",
      name: "WellNest",
      category: "Healthcare & wellness · Full stack",
      discipline: "frontend",
      client: true,
      preview: "web",
      tagline: "A wellness platform for booking sessions with expert consultants.",
      summary:
        "A wellness platform that connects people with consultants across traditional medicine, nutrition, therapy, life coaching and more. On the web, users browse consultants, view detailed profiles and book sessions; an admin panel handles consultant onboarding, services, categories and content. A React Native app brings booking and wellness-goal tracking to mobile.",
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
        "A platform that issues animal health and rabies certificates for pets travelling internationally. It has two major modules — a vet practice portal and an admin panel — covering appointments, pet records, certificates, invoicing and team collaboration, with online payments through Stripe.",
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
        "A cross-platform art carousel for phones and smart TVs. People customise and stream curated art displays with configurable transitions, styles and subscription tiers. It spans a React Native mobile app, one TV app architecture for several major smart-TV platforms, and an Astro marketing site.",
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
        "A maritime-tech platform that helps ship owners, operators and charterers cut emissions with vessel and voyage data. I worked on the cloud platform where crews and onshore teams create and sync noon reports online and offline, with validation across 200+ data points, multi-user collaboration and APIs for analytics.",
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
    },
  ] as Project[],
};
