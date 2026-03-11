/**
 * Central content store for the Masjidly site.
 * Edit content here. Components stay presentational.
 */

export const hero = {
  eyebrow: "Prayer Time Display for Masajid",
  title: "Replace your slideshow with a",
  titleEmphasis: "proper prayer display.",
  body: "Masjidly shows accurate prayer times and event announcements on your masjid's TV screens. Anyone on your committee can manage it from a simple browser dashboard. No PowerPoint, no USB drives, no IT support.",
  primaryCta: "View Pricing",
  primaryCtaHref: "#pricing",
  secondaryCta: "See Features",
  secondaryCtaHref: "#features",
  /** Screen mockup: add /hero-screen.png to public/ or use /showcase/display.png */
  heroScreen: "/showcase/hero.png",
};

export const marqueeItems = [
  "Prayer Time Display",
  "Event Announcements",
  "Cloud & Self-Hosted",
  "Strapi CMS",
  "Vue.js Frontend",
  "Full Offline Mode",
  "Docker Ready",
  "Custom Branding",
  "Raspberry Pi Compatible",
];

export const features = {
  label: "What Masjidly Does",
  title: "Built for masajid. Not adapted from generic signage.",
  description:
    "Every feature exists because a real masjid needs it. No bloat, no irrelevant settings. Just a clean, reliable display your congregation can read from across the prayer hall.",
  items: [
    {
      title: "Always-Current Prayer Times",
      body: "Upload your yearly timetable once as a CSV or JSON file. Masjidly highlights the next salah throughout the day, including Jumu'ah, without any manual updates.",
      icon: "clock",
    },
    {
      title: "Announcements That Expire Themselves",
      body: "Upload event posters and set an end date. When the event passes, Masjidly removes the poster automatically. No more outdated notices sitting on the screen for weeks.",
      icon: "calendar",
    },
    {
      title: "Your Masjid's Identity on Screen",
      body: "Upload your logo, enter your masjid name and pick a theme colour. The display updates straight away and every masjid gets its own professional look. No code needed.",
      icon: "users",
    },
    {
      title: "Designed for Wall-Mounted TVs",
      body: "The layout uses a fixed 40/60 split: prayer times on the left, announcements on the right. Easy to read from across a large prayer hall, whatever the screen size.",
      icon: "tv",
    },
    {
      title: "Runs Without Internet",
      body: "Self-hosted and Player deployments work entirely on your local network. If your broadband goes down before Jumu'ah, the display keeps running. No cloud dependency.",
      icon: "offline",
    },
    {
      title: "Managed by Non-Technical Staff",
      body: "The Strapi CMS dashboard is straightforward. Any committee member can use it on day one. No training sessions, no IT support. Just log in and update.",
      icon: "layers",
    },
  ],
};

export const showcase = {
  label: "See It In Action",
  title: "What your congregation actually sees.",
  description:
    "Three views of Masjidly: the full-screen TV display, the CMS dashboard your committee uses to manage content, and how it looks wall-mounted in a real prayer hall.",
  tabs: ["TV Display", "CMS Dashboard", "Wall Mockup"],
  items: [
    {
      id: "display",
      label: "TV Display",
      caption:
        "The full-screen prayer display your congregation sees — prayer times, announcements, and scrolling notices.",
      placeholder:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%231a2830' width='900' height='506'/%3E%3Ctext x='50%25' y='50%25' fill='%23c9a84c' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em' opacity='0.8'%3ETV Display Screenshot%3C/text%3E%3C/svg%3E",
      image: "/showcase/display.png",
    },
    {
      id: "cms",
      label: "CMS Dashboard",
      caption:
        "The browser dashboard your committee uses to manage prayer times, announcements, and branding.",
      placeholder:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%231e2a30' width='900' height='506'/%3E%3Ctext x='50%25' y='50%25' fill='%23c9a84c' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em' opacity='0.8'%3ECMS Dashboard Screenshot%3C/text%3E%3C/svg%3E",
      image: "/showcase/cms.png",
    },
    {
      id: "wall",
      label: "Wall Mockup",
      caption:
        "How Masjidly looks installed in a real prayer hall — wall-mounted display, Raspberry Pi behind the screen.",
      placeholder:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='506' viewBox='0 0 900 506'%3E%3Crect fill='%23162e35' width='900' height='506'/%3E%3Ctext x='50%25' y='50%25' fill='%23c9a84c' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em' opacity='0.8'%3EWall Installation Photo%3C/text%3E%3C/svg%3E",
      image: "/showcase/wall.png",
    },
  ],
};

export const demoPrayerTimes = [
  { name: "Fajr", time: "05:42", isNext: false },
  { name: "Sunrise", time: "07:14", isNext: false },
  { name: "Dhuhr", time: "12:30", isNext: false },
  { name: "Jumu'ah", time: "13:15", isNext: false },
  { name: "Asr", time: "15:48", isNext: true },
  { name: "Maghrib", time: "18:22", isNext: false },
  { name: "Isha", time: "19:45", isNext: false },
];

export const howItWorks = {
  label: "How It Works",
  title: "Live on your screens in under a week.",
  description:
    "Setup is straightforward. Once you are live, managing the display takes a few minutes a week. Anyone you trust can do it from any device.",
  steps: [
    {
      step: 1,
      num: "01",
      title: "Pick your deployment",
      body: "Choose Cloud Hosted for remote management with no hardware, Self-Hosted to run it on your own machine, or Masjidly Player for a plug-in device that works out of the box.",
    },
    {
      step: 2,
      num: "02",
      title: "We configure everything",
      body: "We handle the initial installation and setup. You get working CMS login details. No technical knowledge needed from you.",
    },
    {
      step: 3,
      num: "03",
      title: "Add your content",
      body: "Log into the CMS, upload your prayer timetable, add your logo and colour, then publish your first announcement. The whole thing takes under 20 minutes.",
    },
    {
      step: 4,
      num: "04",
      title: "Your display goes live",
      body: "Open the Masjidly URL on any TV connected to your network and you are done. Update content from the CMS whenever you like: announcements, timetables, branding.",
    },
  ],
};

export const deployment = {
  label: "Deployment Options",
  title: "Three ways to run Masjidly.",
  description:
    "Whether your masjid wants a fully managed service, on-site control, or a device that ships ready to use, there is an option that fits your situation.",
  options: [
    {
      badge: "Cloud Managed",
      badgeVariant: "teal",
      name: "Masjidly Hosted",
      description:
        "Best for masajid that want nothing to do with infrastructure. We run everything. Your committee manages content from any device, anywhere, through a browser.",
      features: [
        "Hosted on Railway + Netlify CDN",
        "Software updates handled automatically",
        "Regular automated backups included",
        "Manage remotely from any device",
        "Standard and Priority support tiers",
      ],
      icon: "cloud",
    },
    {
      badge: "On-Premise",
      badgeVariant: "teal",
      name: "Masjidly Self-Hosted",
      description:
        "Ideal for masajid with a volunteer who can look after a local machine, or those who need full offline operation. Runs on any Windows PC, laptop, or Raspberry Pi.",
      features: [
        "Runs on Windows, Linux, Raspberry Pi",
        "Deployed via Docker, clean and isolated",
        "Fully offline capable, no internet needed",
        "Display served over your local network",
        "Optional monthly support plan available",
      ],
      icon: "monitor",
    },
    {
      badge: "Plug & Play",
      badgeVariant: "gold",
      name: "Masjidly Player",
      description:
        "The simplest option. We ship a preconfigured device with Masjidly already installed. Your committee plugs it into the TV and the network. It is live in minutes. That is it.",
      features: [
        "Preconfigured device shipped to you",
        "Masjidly pre-installed and fully tested",
        "Plug into TV and network, done",
        "No technical knowledge required",
        "Optional monthly support available",
      ],
      icon: "smartphone",
    },
  ],
};

export const pricing = {
  label: "Pricing",
  title: "Less than the cost of printing posters.",
  subtitle:
    "A one-time setup fee covers installation and full configuration. Monthly fees apply to hosted plans only. Self-hosted and Player support is entirely optional. You are never locked in.",
  plans: [
    {
      tier: "Hosted",
      name: "Masjidly Hosted",
      setupFee: "£89",
      monthly: "£9",
      monthlyLabel: "Monthly",
      featured: false,
      highlights: [
        "Hosted on Railway + Netlify",
        "Automatic updates & backups",
        "Full prayer time & poster CMS",
      ],
      features: ["Manage from any device", "Standard email support"],
    },
    {
      tier: "Hosted",
      name: "Masjidly Hosted Plus",
      setupFee: "£89",
      monthly: "£15",
      monthlyLabel: "Monthly",
      featured: true,
      highlights: [
        "Everything in Hosted",
        "Priority support response",
        "Enhanced backup frequency",
        "Faster issue resolution",
      ],
      features: ["Proactive uptime monitoring"],
    },
    {
      tier: "Self-Hosted",
      name: "Masjidly Self-Hosted",
      setupFee: "£79",
      monthly: "£9",
      monthlyLabel: "Support (optional)",
      featured: false,
      highlights: [
        "Installed on your existing PC",
        "Runs fully offline",
        "Docker-based deployment",
      ],
      features: ["Software update assistance", "Remote troubleshooting help"],
    },
    {
      tier: "Self-Hosted",
      name: "Self-Hosted Plus",
      setupFee: "£79",
      monthly: "£15",
      monthlyLabel: "Support (optional)",
      featured: false,
      highlights: [
        "Everything in Self-Hosted",
        "Priority support queue",
        "Remote access troubleshooting",
        "Version upgrade assistance",
      ],
      features: ["Faster guaranteed response"],
    },
  ],
  player: {
    tag: "Masjidly Player, Device Included",
    title: "Everything Preconfigured. Just Plug It In.",
    description:
      "We ship a device with Masjidly fully installed and tested. Connect it to your TV and network and you are live in minutes. The right choice for committees who want zero technical involvement.",
    price: "£189",
    priceLabel: "DEVICE + SETUP, ONE TIME",
    priceNote: "+ £9/month support (optional)",
    cta: "Enquire Now",
  },
};

export const why = {
  label: "Why Masjidly",
  title: "Purpose-built for how masajid actually operate.",
  description:
    "Most masajid run on volunteer committees without IT support. Content changes once a week, not once a day. The display needs to just work: through power cuts, Ramadan schedule changes, everything. Masjidly was built with that in mind.",
  stats: [
    {
      value: "< 30s",
      label:
        "From changing an iqamah time in the CMS to it appearing on the TV display",
    },
    {
      value: "99.9%",
      label:
        "Target uptime across live masajid, including Jumu’ah and Ramadan schedules",
    },
    {
      value: "0",
      label:
        "Lines of code your committee ever needs to write, read, or understand",
    },
    {
      value: "∞",
      label:
        "Announcements, each with an expiry date so nothing stays on screen past its time",
    },
  ],
  faq: [
    {
      q: "Can it run without internet?",
      a: "Yes. Self-Hosted and Player deployments run entirely on your local network with no internet needed. Once configured, prayer times and announcements display normally even if your broadband is down.",
    },
    {
      q: "Can we use our own timetable?",
      a: "Yes. Upload your timetable as a CSV or JSON file in the CMS. The display updates instantly. No manual updates needed.",
    },
    {
      q: "Who updates the prayer timetable?",
      a: "Any committee member you make an admin can log into the CMS and upload a new timetable as a CSV or JSON file. Handy for Ramadan, seasonal changes, or when you switch to a new local timetable.",
    },
    {
      q: "What hardware do we need?",
      a: "Any TV or monitor with a browser connected to your network will display Masjidly. For self-hosted, any PC, laptop, or Raspberry Pi running Docker works. Or order a Masjidly Player and skip the setup entirely.",
    },
    {
      q: "Can we use our own logo and colours?",
      a: "Yes. Upload your logo and enter a hex colour code in the CMS settings. The display updates immediately. No design files or code changes needed.",
    },
    {
      q: "How do I add a new announcement?",
      a: "In the CMS, go to the Announcements section, click Add Announcement, upload your poster image, set an end date, and publish. The display updates instantly.",
    },
    {
      q: "What happens to old announcements?",
      a: "When you upload a poster you set an end date. A scheduled job removes it automatically when that date passes. No manual cleanup. Old notices never linger on screen.",
    },
    {
      q: "Is the monthly fee mandatory?",
      a: "For Hosted plans, yes. It covers infrastructure running costs. For Self-Hosted and Player plans, the monthly fee is entirely optional support. You keep the software either way.",
    },
    {
      q: "What if I need help?",
      a: "We offer monthly support plans for Hosted and Self-Hosted deployments (optional). Our support team is available to help with any issues, updates, or customizations. You can also reach out to us directly for ad-hoc assistance.",
    },
    {
      q: "What is the difference between Hosted and Self-Hosted?",
      a: "Hosted is a fully managed service that we run for you. Self-Hosted is a self-managed service that you run on your own infrastructure. Player is a pre-configured device that we ship to you.",
    },
  ],
};

export const cta = {
  label: "Request Setup",
  title: "Get Masjidly running in your masjid.",
  body: "Send us your email and we will follow up with the right deployment option for your masjid. No commitment, no sales pressure. Most setups are live within a week.",
  emailPlaceholder: "masjid@example.com",
  namePlaceholder: "Muhammad Ali",
  masjidNamePlaceholder: "Masjid Ar-Rahman",
  rolePlaceholder: "Imam, Secretary, Committee Member, etc.",
  buttonText: "Request Setup",
  note: "Or email us directly at",
  email: "salaam@masjidly.co.uk",
};

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#deployment", label: "Options" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why", label: "FAQ" },
];

export const footerLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#cta", label: "Contact" },
  { href: "#why", label: "FAQ" },
];
