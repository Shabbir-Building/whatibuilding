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
    description: "Let the AI agent handle your customer",
    activeUsers: 7,
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
    description: "AI assistant for tracking your daily expenses",
    activeUsers: 1,
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
    description: "An LMS platform for learning to code.",
    activeUsers: 142,
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
