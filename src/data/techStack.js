export const techStackIntro = {
  heading: "A stable, well-chosen architecture.",
  description:
    "Every layer was picked for longevity and reliability. No experimental frameworks, no lock-in to single vendors. Components that do their job well and can be swapped if needed.",
};

export const techCategories = [
  {
    label: "Frontend Architecture",
    items: [
      { name: "Vue 3 + Vite", desc: "Single Page Application", icon: "zap" },
      {
        name: "Display Renderer",
        desc: "40/60 TV-optimised layout",
        icon: "tv",
      },
      { name: "Netlify CDN", desc: "Global edge delivery", icon: "cloud" },
    ],
  },
  {
    label: "Backend & CMS",
    items: [
      { name: "Strapi v5", desc: "Headless CMS & REST API", icon: "layers" },
      { name: "PostgreSQL", desc: "Relational data store", icon: "database" },
      {
        name: "Scheduled Jobs",
        desc: "Announcement auto-expiry",
        icon: "clock",
      },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Railway", desc: "Managed backend runtime", icon: "cloud" },
      { name: "Docker", desc: "Containerised self-hosting", icon: "package" },
      {
        name: "Multi-Hardware",
        desc: "x86 PC, ARM, Raspberry Pi",
        icon: "cpu",
      },
    ],
  },
  {
    label: "Content Pipeline",
    items: [
      {
        name: "Timetable Ingestion",
        desc: "JSON & CSV upload formats",
        icon: "calendar",
      },
      {
        name: "Announcement Scheduler",
        desc: "Date-bound poster lifecycle",
        icon: "clock",
      },
      {
        name: "Branding Config",
        desc: "Logo, name, theme colour",
        icon: "tag",
      },
    ],
  },
];
