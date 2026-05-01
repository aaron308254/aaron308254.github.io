export type Project = {
  id: string;
  name: string;
  repo: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  updated: string;
  visibility: "public" | "private";
  pattern: "grid" | "scoreboard" | "console" | "fairway";
  previewImage?: {
    src: string;
    alt: string;
  };
  readmeSummary: string[];
  theme: {
    accent: string;
    secondary: string;
    wash: string;
  };
};

export const projects: Project[] = [
  {
    id: "portfolio-platform",
    name: "Personal Portfolio Platform",
    repo: "aaron308254 / aaron308254.github.io",
    stack: ["React", "TypeScript", "Vite", "GitHub Pages"],
    repoUrl: "https://github.com/aaron308254/aaron308254.github.io",
    demoUrl: "https://aaron308254.github.io",
    updated: "2026",
    visibility: "public",
    pattern: "grid",
    readmeSummary: [
      "Static React portfolio for GitHub Pages.",
      "Project entries are stored as typed data, so updates stay small and predictable.",
      "The interface is intentionally minimal: project tiles, source links, and contact links.",
    ],
    theme: {
      accent: "#69f5ff",
      secondary: "#6b7cff",
      wash: "rgba(105, 245, 255, 0.16)",
    },
  },
  {
    id: "golf-scoring-mobile-app",
    name: "Golf Scoring Mobile App",
    repo: "aaron308254 / Golf-Scoring-Mobile-App",
    stack: ["Expo", "React Native", "TypeScript", "AsyncStorage"],
    repoUrl: "https://github.com/aaron308254/Golf-Scoring-Mobile-App",
    updated: "2026",
    visibility: "public",
    pattern: "fairway",
    previewImage: {
      src: "https://raw.githubusercontent.com/aaron308254/Golf-Scoring-Mobile-App/main/docs/images/ProfileStats.png",
      alt: "Golf Scoring Mobile App profile stats screen",
    },
    readmeSummary: [
      "Expo React Native app for tracking golf rounds, player profiles, scorecards, and course history.",
      "Built for quick iPhone round entry, including landscape scorecard entry for wider score views.",
      "Stores profiles and scorecards locally with AsyncStorage so data remains after closing the app.",
    ],
    theme: {
      accent: "#36f59b",
      secondary: "#69f5ff",
      wash: "rgba(54, 245, 155, 0.16)",
    },
  },
  {
    id: "fantrax-wallpaper",
    name: "Fantrax Wallpaper Project",
    repo: "aaron308254 / FantraxWallpaperProject",
    stack: ["Python", "fantraxapi", "Pillow", "schedule"],
    repoUrl: "https://github.com/aaron308254/FantraxWallpaperProject",
    updated: "2026",
    visibility: "public",
    pattern: "scoreboard",
    previewImage: {
      src: "https://github.com/user-attachments/assets/6429fed3-3c8d-4885-be9a-22f47a755b6f",
      alt: "Fantrax fantasy basketball wallpaper preview",
    },
    readmeSummary: [
      "Python wallpaper builder for a Fantrax NBA weekly points league.",
      "Retrieves league data and renders real-time weekly period scores into a desktop wallpaper.",
      "Includes runtime patches for fantraxapi Roster and League behavior, plus Windows startup scheduling notes.",
    ],
    theme: {
      accent: "#ff4fd8",
      secondary: "#f7ff5c",
      wash: "rgba(255, 79, 216, 0.18)",
    },
  },
  {
    id: "affordable-automated-chess",
    name: "Affordable Automated Chess",
    repo: "AndrewGillisSoftware / Affordable-Automated-Chess",
    stack: ["Python", "Raspberry Pi", "Lichess API", "WiFi"],
    repoUrl: "https://github.com/AndrewGillisSoftware/Affordable-Automated-Chess",
    demoUrl: "https://www.youtube.com/watch?v=ZgxK-cfJCh0",
    demoLabel: "Video",
    updated: "2025",
    visibility: "public",
    pattern: "console",
    readmeSummary: [
      "Senior capstone project for an open-source automated chess board under $150.",
      "Contributor on the Raspberry Pi side, connecting the board over WiFi to the Lichess API with Python.",
      "Built around a customizable physical chess board that can bridge online play and real pieces.",
    ],
    theme: {
      accent: "#c6ff4d",
      secondary: "#69f5ff",
      wash: "rgba(198, 255, 77, 0.13)",
    },
  },
];

export const professionalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/aaron308254",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aaron-jones-moriarity/",
  },
  {
    label: "Email",
    href: "mailto:aaron308254@gmail.com",
  },
];
