export const docsNav = [
  { slug: "getting-started", label: "Getting started" },
  { slug: "prayer-times", label: "Prayer Times" },
  { slug: "announcements", label: "Announcements" },
  { slug: "settings", label: "Masjid Settings" },
  { slug: "deployments", label: "Deployments & Players" },
  { slug: "roles", label: "Roles & Workflow" },
  { slug: "troubleshooting", label: "Troubleshooting" },
];

export const docsGettingStarted = {
  title: "Getting started with Masjidly CMS",
  sections: [
    {
      heading: "What Masjidly is",
      body: [
        "Masjidly is a prayer‑times and announcements display built specifically for masajid, not generic digital signage.",
        "On screen it shows your daily salaah timetable, Jummah times, and a rotating set of announcement posters that the whole congregation can see from the back of the hall.",
        "Behind the scenes it uses a Strapi admin panel so non‑technical committee members can upload timetables, add posters, and change branding from any browser.",
      ],
    },
    {
      heading: "How Masjidly fits into your masjid",
      body: [
        "The display runs on a TV, monitor, or Masjidly Player device connected to your network.",
        "Your committee manages data in the CMS: Salaah Times for timetables, Announcement for posters, and Masjid Setting for logo and colours.",
        "Masjidly is designed for real masjid constraints: content that changes weekly, limited IT support, and the need to keep working even when broadband is unreliable.",
      ],
    },
    {
      heading: "First 15 minutes checklist",
      body: [
        "Step 1 – Log into the CMS and confirm you can see the dashboard.",
        "Step 2 – Open Masjid Setting and set your masjid name, logo, and theme colour.",
        "Step 3 – Import your first Salaah Times CSV (either a full‑year file or a monthly file) and confirm today’s row looks correct.",
        "Step 4 – Create at least one Announcement with an image and a reasonable end date, then publish it.",
        "Step 5 – Walk to the TV/display and confirm that today’s times and your new announcement are visible and readable from the back of the hall.",
      ],
    },
    {
      heading: "Accessing the CMS",
      body: [
        "URL: https://your-backend-url/admin (for example: https://masjid-name-admin.masjidly.co.uk/admin).",
        "Use the admin email and password you were given to log in.",
        "Use a modern browser such as Chrome, Edge, or Safari on desktop/laptop.",
      ],
    },
    {
      heading: "Who should have access",
      body: [
        "Imam / khatib: reviews announcements and checks that what is on screen matches reality.",
        "Secretary / committee member: main person updating timetables and announcements.",
        "Media / IT volunteer: handles CSV imports, poster templates, and checks the display in the prayer hall.",
      ],
    },
    {
      heading: "How content flows to the display",
      body: [
        "You manage data in the CMS (Strapi): Salaah Times, Announcements, and Masjid Settings.",
        "The TV / display loads the Masjidly app in a browser or via a player device.",
        "The app fetches the latest data and highlights “today” and “tomorrow” based on the current date and salaah times.",
      ],
    },
  ],
};

export const docsPrayerTimes = {
  title: "Uploading and managing Prayer Times",
  sections: [
    {
      heading: "Supported timetable formats",
      body: [
        "Prayer times are stored as one record per date in the Salaah Times collection.",
        "You normally import data from CSV. JSON support exists but is not used for day‑to‑day admin.",
      ],
    },
    {
      heading: "CSV templates: full‑year and monthly",
      body: [
        "You will receive CSV templates for full‑year and monthly timetables.",
        "Both formats use the same columns – the difference is how many rows you include.",
        "Full‑year CSV: one row per date for the whole year (for example: Masjid-Name_2026.csv.csv).",
        "Monthly CSV: one row per date for just that month (for example: Masjid-Name_March_2026.csv).",
      ],
    },
    {
      heading: "Columns and example row",
      body: [
        "The CSV header row must match the template exactly. Each column has a specific purpose and format.",
        "Use 24‑hour time for all salaah and jumu’ah fields (for example: 05:42, 13:15, 21:45). Leave a cell empty if a particular time does not apply on that day.",
        "You can build your timetable in Google Sheets, Excel, or a tool like Tablify – just make sure the exported CSV uses these exact column names.",
      ],
      table: {
        headers: ["Column", "Meaning", "Example"],
        rows: [
          ["date", "Gregorian date in YYYY-MM-DD format", "2026-03-01"],
          ["islamic_month", "Name of the Islamic month", "Sha'ban"],
          ["islamic_date", "Islamic day of month", "20"],
          ["islamic_year", "Islamic year", "1447"],
          ["sehri_end", "End of sehri / suhoor", "05:15"],
          ["fajr_start", "Fajr start time", "05:20"],
          ["fajr_jamat", "Fajr jamaat time", "05:45"],
          ["sunrise", "Sunrise time", "07:00"],
          ["zohar_start", "Zuhr start time", "12:30"],
          ["zohar_jamat", "Zuhr jamaat time", "13:30"],
          ["asr_start", "Asr start time", "16:00"],
          ["asr_jamat", "Asr jamaat time", "16:45"],
          ["maghrib_start", "Maghrib start time", "18:15"],
          ["maghrib_jamat", "Maghrib jamaat time", "18:18"],
          ["isha_start", "Isha start time", "20:00"],
          ["isha_jamat", "Isha jamaat time", "20:15"],
          ["jummah_1", "First Jummah khutbah/iqamah time", "13:15"],
          ["jummah_2", "Second Jummah khutbah/iqamah time", "14:15"],
        ],
      },
    },
    {
      heading: "Importing a timetable CSV",
      body: [
        "In the CMS, go to Salaah Times in the Content Manager.",
        "Use the Tablify button inside Salaah Times to import directly from your timetable view – this is the recommended path for Masjidly deployments.",
        "Screenshot – Salaah Times list view with the Tablify import button highlighted.",
        "When logging in, always tick the “Remember me” checkbox so Tablify and the import flow can complete without logging you out mid‑way.",
        "If you ever need to fall back to manual import, use the Import action provided by the CSV import plugin instead.",
        "Select your CSV file (either a full‑year or a monthly file that uses the standard headers).",
        "Confirm the field mapping if asked; it should match automatically when using the template.",
        "Screenshot – CSV import plugin mapping screen, showing the timetable headers aligned with the correct fields.",
        "Run the import and then open a few sample days (today, tomorrow, first day of Ramadan) to check the values.",
        "Finally, look at the Masjidly display and confirm today’s row and times look correct.",
      ],
    },
    {
      heading: "Using full‑year and monthly files together",
      body: [
        "A good pattern is to import a full‑year timetable at the start of the year and then override specific periods with monthly CSVs.",
        "When you import a monthly CSV that includes dates already in the system, the new rows for those dates override the previous values.",
        "This is ideal for Ramadan or other schedule changes; you only need to upload the dates that change.",
        "Keep filenames clear so admins can tell them apart, for example: 2026-masjid-name.csv and 2026-03-masjid-name.csv.",
      ],
    },
    {
      heading: "Jummah times on the display",
      body: [
        "Jummah times come from the jummah_1 and jummah_2 columns – they appear as one or two rows at the bottom of the timetable on the display.",
        "If your masjid has only one Jummah, always fill jummah_1 and leave jummah_2 empty for that date.",
        "If you run two Jummah prayers, fill both columns; the display will show both times in order so worshippers can see which one applies to them.",
      ],
    },
    {
      heading: "Handling Ramadan and special timetables",
      body: [
        "Ramadan times are usually included in the same Salaah Times CSV as all other days; you do not need a separate data source.",
        "For most masajid the easiest approach is to import a full‑year CSV which already contains the Ramadan rows, or to import a dedicated Ramadan monthly CSV that overrides just those dates.",
        "Plan ahead: import the Ramadan rows at least a day before the first of Ramadan, then walk to the display after Maghrib and confirm next day’s Fajr and Jummah times are correct.",
      ],
    },
    {
      heading: "How Salaah Times work on the display",
      body: [
        "Each Salaah Times record represents one Gregorian date; the frontend builds a week view (Sunday–Saturday) plus a separate “tomorrow” record for cross‑day labels.",
        "Rows are shown in the following order: Fajr → Sunrise → Sehri End → Zuhr → Asr → Maghrib → Isha → Jummah.",
        "Sehri End comes from sehri_end and is shown on the timetable but is ignored when deciding the “next prayer”.",
        "Sunrise has only a start time; the jamaat column is left blank on the display.",
        "Jummah uses jummah_1 and jummah_2 from the Friday record and can be shown even when viewing other days.",
      ],
      table: {
        headers: ["Strapi field", "Display name", "Notes"],
        rows: [
          [
            "sehri_end",
            "Sehri End",
            "Last time for sehri (start of fasting). Shown during Ramadan; not used for next‑prayer logic.",
          ],
          [
            "fajr_start / fajr_jamat",
            "Fajr",
            "Start and jamaat times for Fajr.",
          ],
          ["sunrise", "Sunrise", "Start time only; no jamaat."],
          [
            "zohar_start / zohar_jamat",
            "Zuhr",
            "Start and jamaat times for Zuhr (hidden on Friday when Jummah is active).",
          ],
          ["asr_start / asr_jamat", "Asr", "Start and jamaat times for Asr."],
          [
            "maghrib_start / maghrib_jamat",
            "Maghrib",
            "Start and jamaat; Maghrib jamaat is used for iftar during Ramadan.",
          ],
          [
            "isha_start / isha_jamat",
            "Isha",
            "Start and jamaat times for Isha.",
          ],
          [
            "jummah_1 / jummah_2",
            "Jummah",
            "First value is the start/khutbah time; second is jamaat. Both read from Friday’s record.",
          ],
        ],
      },
    },
    {
      heading: "Special logic: Friday, next prayer, and Ramadan",
      body: [
        "On Fridays, Zuhr is hidden and only the Jummah row is shown; Jummah is visually highlighted while its active window is in effect.",
        "Jummah is considered active in an approximate window from one hour before Zuhr start until Asr begins.",
        "The “next prayer” is the first prayer whose start time has not yet passed; once a prayer’s jamaat time plus a small buffer has passed, that prayer is treated as “seen”.",
        "Once all prayers for today are seen, labels switch to “Prayer Tomorrow” and tomorrow’s times are surfaced where applicable.",
        "During Ramadan, Sehri End and Iftar use sehri_end and Maghrib jamaat for today/tomorrow and automatically move over once those times have passed.",
      ],
    },
    {
      heading: "Islamic date fields",
      body: [
        "Each Salaah Times row also stores islamic_month, islamic_date, and islamic_year.",
        "These fields can be used in the header or other parts of the UI to show today’s Islamic date alongside the Gregorian date.",
      ],
    },
    {
      heading: "Screenshots and examples (to be added)",
      body: [
        "Screenshot – Completed week view on the Masjidly display with “Prayer Today” and “Prayer Tomorrow” labels visible.",
      ],
    },
    {
      heading: "Common CSV pitfalls",
      body: [
        "Using 12‑hour times (1:30 pm) instead of 24‑hour (13:30); always use 24‑hour format in the CSV.",
        "Typos in the header row – the names must match the template exactly and are case‑sensitive.",
        "Dates not zero‑padded (use 2026-03-01, not 2026-3-1) or using locale formats like 01/03/2026.",
        "Including stray spaces before or after values (for example, ` 05:42 `) which can break parsing.",
        "Saving the file as Excel (.xlsx) instead of CSV – always export or save as plain CSV before importing.",
      ],
    },
  ],
};

export const docsAnnouncements = {
  title: "Adding and managing announcements",
  sections: [
    {
      heading: "What announcements are",
      body: [
        "Announcements are posters that rotate in the announcements area on the Masjidly display.",
        "Each announcement has an image, an optional short description, and an optional end date.",
        "Only announcements with an image and Published status appear on the screen.",
      ],
    },
    {
      heading: "Poster design and templates",
      body: [
        "Use the announcement design template provided with your setup so posters are the correct size and have clear safe zones.",
        "Design for readability from the back of the prayer hall: big headline, clear times and location, minimal small text.",
        "Aim for a landscape poster (for example: 1536 × 1024 px) and keep important text away from the outer 10% of the image.",
        "Export as a compressed JPEG (around 80–85% quality) and try to keep files under 500 kB where possible.",
      ],
    },
    {
      heading: "Creating a new announcement",
      body: [
        "In the CMS, go to Announcement in the Content Manager.",
        "Click Create new entry.",
        "Screenshot – Announcement list view in the CMS with the New entry button highlighted.",
        "Fill in a short Title (used for internal reference and alt text).",
        "Upload the Image (poster). This is required for the announcement to show.",
        "Set an End date if the announcement should stop after a certain day.",
        "Screenshot – Announcement edit form showing Title, Copy, Image, and End date fields.",
        "Save and then Publish the entry so it appears on the display.",
      ],
    },
    {
      heading: "Expiry and re‑using announcements",
      body: [
        "If you set an End date, the announcement will automatically stop showing after that date.",
        "If you leave End date empty, it stays on the display until you unpublish or delete it.",
        "To re‑use an old announcement, you can either duplicate the existing entry or create a new one and select the same image.",
      ],
    },
    {
      heading: "Best practices",
      body: [
        "Ensure strong contrast between text and background; avoid pale text on pale images.",
        "If you need both Arabic and English, make sure key details (date, time, contact) are obvious in at least one language at a glance.",
      ],
    },
    {
      heading: "Screenshots to be added",
      body: [
        "Screenshot – Example announcement poster on the Masjidly display, illustrating safe text areas.",
      ],
    },
  ],
};

export const docsSettings = {
  title: "Masjid settings",
  sections: [
    {
      heading: "Branding your display",
      body: [
        "Open the Masjid Setting single type in the Content Manager.",
        "Set the Masjid name to the name you want to show on the display (for example: Masjid-e-Madni, Blackburn).",
        "Upload Logo and Dark mode logo images – transparent PNGs work best, with a comfortable size for the header.",
        "Choose a theme preset or, if enabled, set a custom primary colour that matches your masjid branding.",
        "Screenshot – Masjid Setting screen in the CMS showing logo, masjid name, and theme preset.",
      ],
    },
    {
      heading: "Today / Tomorrow label behaviour",
      body: [
        "Masjidly highlights “today” and “tomorrow” in the timetable so worshippers can see at a glance which row is current.",
        "As salaah times pass, this label automatically advances so the correct row stays marked as today.",
        "In Masjid Setting you may see a toggle controlling whether this label appears; for most masajid it should remain enabled for clarity.",
        "Screenshot – Header area on the Masjidly display showing logo, masjid name, and today/tomorrow label.",
      ],
    },
    {
      heading: "When to change these settings",
      body: [
        "Branding settings normally change only when your logo or colour scheme changes.",
        "The today/tomorrow label and base behaviour of the display should not need frequent adjustment once set correctly during onboarding.",
      ],
    },
    {
      heading: "Ramadan UI settings",
      body: [
        "In addition to timetable data, Ramadan‑specific settings are limited to the Ramadan banner and Taraweeh dua configuration.",
        "You can configure a Taraweeh dua duration (in minutes), toggle the Ramadan banner, and upload a Taraweeh dua image which can be shown full‑screen on the display.",
        "Prayer times themselves during Ramadan still come from the usual Salaah Time records and CSV imports.",
        "Screenshot – Ramadan Setting screen highlighting Taraweeh dua duration, Ramadan banner toggle, and dua image upload.",
      ],
    },
  ],
};

export const docsDeployments = {
  title: "Managing deployments and players",
  sections: [
    {
      heading: "Cloud‑hosted deployments",
      body: [
        "For cloud‑hosted setups, the display runs in a browser at a specific URL (for example: https://your-display-url).",
        "If the screen does not reflect recent CMS changes, refresh the browser tab or app on the display device.",
        "Check that the device has a working internet connection and can reach the backend URL and display URL.",
      ],
    },
    {
      heading: "Self‑Hosted and Player devices",
      body: [
        "Self‑Hosted deployments and Masjidly Player devices run on a PC, laptop, or dedicated device connected to your local network.",
        "If the TV is blank or frozen, first confirm the TV is on the correct HDMI input and the device has power.",
        "You can usually restart the device safely by unplugging it, waiting a few seconds, and plugging it back in, then allowing it a minute to boot.",
        "Make sure the device is on the same network as your backend so it can fetch the latest content.",
      ],
    },
    {
      heading: "What to check first if the display is blank",
      body: [
        "Check the TV input/source is correct.",
        "Check that the player/device has power and network connectivity.",
        "Open the display URL on a laptop on the same network – if that also fails, the backend or network may be down.",
      ],
    },
  ],
};

export const docsRoles = {
  title: "Roles and recommended workflow",
  sections: [
    {
      heading: "Suggested responsibilities",
      body: [
        "Timetable admin: updates CSV timetables two or three times a year (new year, Ramadan, seasonal changes).",
        "Announcements admin: uploads and manages posters weekly, ensuring content is current.",
        "Media / IT volunteer: keeps an eye on the physical display, resolves simple issues, and escalates when needed.",
      ],
    },
    {
      heading: "Weekly checklist",
      body: [
        "Check that this week’s prayer times match any printed timetable in the masjid.",
        "Review announcements: add new events, set end dates for anything that has finished.",
        "Look at the Masjidly display from the back of the hall to confirm everything is readable and accurate.",
      ],
    },
    {
      heading: "Access and security",
      body: [
        "Avoid sharing a single admin login between multiple people; instead, invite individual users so you can revoke access when committee members change.",
        "When a committee member who had admin access steps down, remove or disable their user account in the Administration Panel.",
        "Keep CMS logins private and do not reuse passwords from personal accounts.",
      ],
    },
  ],
};

export const docsTroubleshooting = {
  title: "Troubleshooting and FAQ",
  sections: [
    {
      heading: "Common CMS issues",
      body: [
        "CSV import fails: headers do not match the template, date format is not YYYY-MM-DD, or some times are invalid.",
        "Announcement not showing: the entry is still in Draft, has no image, or its end date has passed.",
        "Display shows old data: today’s Salaah Times row may be missing, or the display has not been refreshed.",
      ],
    },
    {
      heading: "Quick fixes for non‑technical admins",
      body: [
        "Refresh the browser or app on the display device.",
        "Verify that today’s date exists in Salaah Times and that at least one announcement is published with a valid image.",
        "Try importing a small CSV sample (for example, one week) to confirm formatting before importing a full file.",
      ],
    },
    {
      heading: "When to contact support",
      body: [
        "If the display is still wrong after basic checks, prepare the following information:",
        "Masjid name and which deployment option you are using (Hosted, Self‑Hosted, Player).",
        "Approximate time the issue started.",
        "Screenshots of the relevant CMS entries and the TV display.",
        "Send this information to salaam@masjidly.co.uk or via the site contact form.",
      ],
    },
  ],
};
