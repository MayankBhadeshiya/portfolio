// Every piece of UI copy on the site, grouped by feature.
// Résumé content (experience, skills, links…) lives in data/profile.ts.
export const strings = {
  meta: {
    titleSeparator: " — ",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    toolkit: "Toolkit",
    contact: "Contact",
  },
  hero: {
    getInTouch: "Get in touch",
    viewGithub: "View GitHub",
    roleAt: "at",
  },
  showcase: {
    title: "What I build",
    progressLabel: "Section progress",
  },
  experience: {
    title: "Where I've worked",
    education: "Education",
  },
  toolkit: {
    title: "What I work with",
    countSuffix: "tools",
  },
  credentials: {
    title: "Certifications",
  },
  contact: {
    title: "Let's build something people use every day.",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Résumé",
    copyright: "©",
  },
  phone: {
    time: "9:41",
    payments: {
      heading: "Checkout",
      item: "Annual plan",
      itemPrice: "₹1,299",
      tax: "Taxes",
      taxPrice: "₹200",
      total: "Total",
      totalPrice: "₹1,499",
      cardNumber: "•••• 4242",
      pay: "Pay now",
    },
    voice: {
      status: "Live",
      caller: "Support call",
      timer: "02:14",
      mute: "Mute",
      end: "End",
    },
    health: {
      steps: "8,204",
      stepsLabel: "steps today",
      heartRate: "72",
      heartRateLabel: "bpm resting",
      week: "This week",
    },
    ship: {
      heading: "Releases",
      updateTitle: "Update ready",
      updateBody: "v2.4.1 downloaded over the air",
      builds: [
        { name: "iOS build 214", status: "Ready" },
        { name: "Android build 214", status: "Ready" },
        { name: "OTA update 2.4.1", status: "Live" },
      ],
    },
  },
} as const;
