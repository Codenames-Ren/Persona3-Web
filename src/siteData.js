import char1 from "./assets/char1.png";
import char2 from "./assets/char2.png";
import char3 from "./assets/char3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import mainf from "./assets/mainf.jpeg";
import mainm from "./assets/mainm.jpeg";
import mainm2 from "./assets/mainm2.jpeg";

export const PROFILE = {
  displayName: "Ren Kyrielight",
  githubUsername: "Codenames-Ren",
  githubUrl: "https://github.com/Codenames-Ren",
  nameTag: "Ren's",
  aboutHandle: "@Ren",
};

export const ABOUT_CHAR_IMAGES = [char1, char2, char3];
export const ABOUT_MAIN_IMAGES = [mainm, mainm2, mainf];

export const SIDE_PROJECT_ITEMS = [
  {
    id: "myquran",
    title: "My-Quran",
    stack: "React Native",
    summary: "An Android-based digital Qur'an and prayer collection, built for accessibility and daily spiritual practice.",
    href: "https://github.com/Codenames-Ren/My-Quran",
  },
  {
    id: "sonataviolin",
    title: "Sonata-Violin",
    stack: "Code Igniter 4 / Full Stack",
    summary: "A specialized web-based management system tailored for the unique needs of violin music education.",
    href: "https://github.com/Codenames-Ren/Sonata-Violin",
  },
  {
    id: "grpl",
    title: "G-RPL",
    stack: "Laravel / Backend Developer",
    summary: "An automated RPL management portal built to facilitate fast and accurate academic credit transfers for university students.",
    href: "https://github.com/Codenames-Ren/G-RPL",
  },
  {
    id: "credits",
    title: "SPECIAL THANKS",
    stack: "Original inspiration",
    summary: "Thanks to blairxu13 for the base repo that served as the starting point, the foundation of everything.",
    href: "https://github.com/blairxu13/persona3-website",
  },
];

const SIDE_PROJECT_LINKS = SIDE_PROJECT_ITEMS.map((item) => item.href.replace("https://", ""));
const SIDE_PROJECT_TITLES = SIDE_PROJECT_ITEMS.map((item) => item.title);

export const SOCIAL_ITEMS = [
  {
    id: "github",
    label: "GITHUB",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "💻",
    barIcon: icon1,
    bars: SIDE_PROJECT_ITEMS.length - 1,
    newBars: [0],
    counts: SIDE_PROJECT_TITLES.slice(0, 3),
    links: SIDE_PROJECT_LINKS.slice(0, 3),
    stats: [
      { tag: "USR", value: PROFILE.nameTag, color: "#9147ff" },
      { tag: "TOP", value: "PROJECTS", color: "#bf94ff" },
    ],
  },
  {
    id: "playlist",
    label: "PLAYLIST",
    handle: "youtube music",
    href: "https://music.youtube.com/playlist?list=PL68vE5LRTmofCVEH4yYw9JAeHX_wvpIQ8",
    icon: "🎵",
    barIcon: icon2,
    bars: 2,
    newBars: [1],
    counts: ["CHILL", "FOCUS"],
    links: ["music.youtube.com/playlist?list=PL68vE5LRTmofCVEH4yYw9JAeHX_wvpIQ8", "music.youtube.com"],
    stats: [
      { tag: "MOOD", value: "Instrument", color: "#19d14a" },
      { tag: "FOCUS", value: "Classic", color: "#d72d3e" },
    ],
  },
  {
    id: "hobbies",
    label: "ARCHIVE",
    handle: "leisure mode",
    href: "https://myanimelist.net/",
    icon: "📚",
    barIcon: icon3,
    bars: 3,
    newBars: [1],
    counts: ["MANGA", "NOVELS", "ANIME"],
    links: ["reading-list", "watchlist", "completed"],
    stats: [
      { tag: "GENRE", value: "Mystery", color: "#0045ce" },
      { tag: "VIBE", value: "Dark", color: "#dc1051" },
    ],
  },
];

export const ABOUT_ITEMS = [
  {
    id: "about",
    label: "ABOUT ME",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "👤",
    barIcon: icon1,
    bars: 1,
    newBars: [0],
    counts: ["24"],
    links: [PROFILE.githubUrl.replace("https://", "")],
    stats: [
      { tag: "ROLE", value: "BACKEND", color: "#4a8fff" },
      { tag: "MODE", value: "LEARN", color: "#bf94ff" },
    ],
  },
  {
    id: "fun",
    label: "FUN FACT ABOUT ME",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "☕",
    barIcon: icon2,
    bars: 5,
    newBars: [0, 2],
    counts: ["3AM", "Intrument", "4S", "Go", "RN"],
    links: ["all-in/3AM", "music/Instrument", "grade/4th-semester", "main-stack/go", "learning/RN"],
    stats: [
      { tag: "FUEL", value: "COFFEE", color: "#e1306c" },
      { tag: "VIBE", value: "CHILL", color: "#f77737" },
    ],
  },
  {
    id: "weird",
    label: "WEIRD FACT ABOUT ME",
    handle: PROFILE.aboutHandle,
    href: PROFILE.githubUrl,
    icon: "⚡",
    barIcon: icon3,
    bars: 7,
    newBars: [1, 3, 6],
    counts: ["GOLANG", "RN", "LARAVEL", "API", "SQL", "DEBUG", "RUN"],
    links: ["learning/golang", "learning/rn", "future/gamedev", "backend/api", "backend/sql", "think/architecture", "hobby/reading"],
    stats: [
      { tag: "FOCUS", value: "GO+RN", color: "#00f2ea" },
      { tag: "GAMEDEV", value: "FUTURE", color: "#ff0050" },
    ],
  },
];

export const RESUME_ITEMS = [
  { id: "i", badge: "I", title: "EDUCATION", subtitle: "4 Semester Student", rank: 4 },
  { id: "ii", badge: "II", title: "SKILLS", subtitle: "Logical Thinking / Problem Solving", rank: 5 },
  { id: "iii", badge: "III", title: "PROJECTS", subtitle: "PLACEHOLDER", rank: 7 },
  { id: "iv", badge: "IV", title: "FOCUS", subtitle: "Backend Development / System Architect", rank: 5 },
];

export const EDUCATION_ROWS = [
  { index: "01", title: "Alibaba Cloud Certified", status: "Active" },
  { index: "02", title: "Backend Development", status: "Daily" },
  { index: "03", title: "Golang", status: "Main Stack" },
  { index: "04", title: "React Native", status: "Learning" },
];

export const MENU_ITEMS = [
  { id: "about", label: "ABOUT ME", page: "about", fontSize: 80, offsetX: 0, offsetY: 0, skew: -6, skewY: 10 },
  { id: "resume", label: "RESUME", page: "resume", fontSize: 66, offsetX: 20, offsetY: 8, skew: -11, skewY: -10 },
  { id: "github", label: "GITHUB LINK", page: "github", fontSize: 68, offsetX: 8, offsetY: 6, skew: 0, skewY: -4 },
  { id: "socials", label: "SOCIALS", page: "socials", fontSize: 74, offsetX: 16, offsetY: 8, skew: -3, skewY: 5 },
  { id: "sideproj", label: "SIDE PROJECTS", page: "sideproj", fontSize: 56, offsetX: 10, offsetY: 6, skew: -4, skewY: 7 },
];

export const ABOUT_REVEAL_CONTENT = [
  {
    upper: ["Name: Ren Kyrielight", "Location: Indonesia", "Focus: Backend Development"],
    lower: "Golang and React Native",
  },
  {
    upper: [
      "The Night Owl",
      "System Architect",
      "Make the reusable and proper backend",
    ],
    lower: "Coffee is needed for all projects~",
  },
  {
    upper: [
      "Main role in backend, side role in Mobile",
      "Main stack : Golang",
      "Game dev is my next target",
      "Special thanks to blairxu13 for the original repo inspiration.",
    ],
    lower: `github: github.com/${PROFILE.githubUsername}`,
  },
];
