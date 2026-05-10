import { ChartConfig } from "@/components/ui/chart";

// Month names
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Generate monthly income data for all 12 months
export const monthlyIncomeData = Array.from({ length: 12 }, (_, index) => ({
  month: monthNames[index],
  income: Math.floor(Math.random() * 5000) + 2000, // Random income between $2000-$7000
}));

export const monthlyZeroIncomeData = Array.from({ length: 12 }, (_, index) => ({
  month: monthNames[index],
  income: 0,
}));

// Chart configuration
export const chartConfig = {
  income: {
    label: "Income",
    color: "hsla(41, 82%, 52%, 1.00)",
  },
} satisfies ChartConfig;

export const EARNINGS_STATUS = {
  EARNINGS: 1,
  NO_EARNINGS: 2,
  CONFIDNETIALS: 3,
};

export const WORK_TYPE = {
  SOLO: 1,
  TEAM: 2,
};

export const WORK_TYPE_NAME = {
  [WORK_TYPE.SOLO]: "Solo Work",
  [WORK_TYPE.TEAM]: "Team Work",
};

export const CONTRIBUTION_TEXT = {
  [WORK_TYPE.SOLO]: "Built with",
  [WORK_TYPE.TEAM]: "I contributed with",
};

export const productList = [
  {
    name: "Chattrn",
    productLink: "https://www.chattrn.com/",
    githubLink: "https://github.com/chattrn-dev",
    techStack: [
      "Typescript",
      "Reactjs",
      "Nextjs",
      "Tailwind",
      "Material UI",
      "Redux RTK",
      "Zod",
      "React Hook Form",
      "Web Socket",
      "Turborepo",
      "Dokploy",
      "Jira",
    ],
    imageSrc: "/chattrn.png",
    description: "Ai Agent for Customer Service",
    responsibilityBullets: [
      "Contributed across the Next.js frontend, backend APIs, and agent/LLM flows so support teams get dependable AI-assisted tooling in production.",
      "Worked end-to-end on typed UI, server endpoints, and AI-facing behavior—tools, validation, and realtime channels tied to the customer-service agent.",
      "Helped wire WebSocket-driven experiences, conversation state on the server, and the integration surface between models and what users see in the app.",
    ] as const,
    // activeUsers: 7,
    earningsStatus: EARNINGS_STATUS.CONFIDNETIALS,
    workType: WORK_TYPE.TEAM,
    contributionText: CONTRIBUTION_TEXT[WORK_TYPE.TEAM],
  },
  {
    name: "Talk Expense",
    productLink: "https://www.talkexpense.com/",
    githubLink: "https://github.com/Shabbir-Building/talkexpense",
    techStack: [],
    imageSrc: "/talk-expense.png",
    description: "Ai Agent for Personal Finance Management",
    responsibilityBullets: [
      "Owned client, backend, and the voice expense stack end-to-end—including ASR in, LLM/tool orchestration, and TTS for spoken agent replies.",
      "Shipped data models, auth, APIs, and LLM-backed categorization so outputs land as structured expense records.",
      "Wired capture, agent logic, and synthesized speech in the UI: utterance → reply → persisted transaction.",
    ] as const,
    // activeUsers: 1,
    earningsStatus: EARNINGS_STATUS.NO_EARNINGS,
    earningsData: monthlyZeroIncomeData,
    workType: WORK_TYPE.SOLO,
    contributionText: CONTRIBUTION_TEXT[WORK_TYPE.SOLO],
  },
  {
    name: "Pocket School",
    productLink: "https://www.pocketschool.academy",
    githubLink: "https://github.com/HabibulHH/pocketschoolfep",
    techStack: [
      "React",
      "Tailwind",
      "Redux",
      "React Hook Form",
      "Zod",
      "Figma",
    ],
    imageSrc: "/pocketschool.png",
    description: "Platform for SWE Fundamentals",
    responsibilityBullets: [
      "Contributed on the frontend only—shipping course flows, lesson UI, and state-heavy screens in React with Tailwind and Redux.",
      "Implemented React Hook Form + Zod flows, accessible layouts, and responsive views matched to Figma while coordinating with the team’s API contracts.",
      "Focused my work in the shared web client—reviews, refactors, and features stayed on the FE layer while teammates owned services and data.",
    ] as const,
    // activeUsers: 142,
    earningsStatus: EARNINGS_STATUS.CONFIDNETIALS,
    workType: WORK_TYPE.TEAM,
    contributionText: CONTRIBUTION_TEXT[WORK_TYPE.TEAM],
  },

  // {
  //   name: "SalesBot",
  //   imageSrc: "/profile-image.png",
  //   description: "Track expenses easy with AI",
  //   activeUsers: 20,
  //   earningsStatus: EARNINGS_STATUS.EARNINGS,
  //   earningsData: monthlyIncomeData,
  //   productLink: "https://www.chattrn.com/",
  // },
];
