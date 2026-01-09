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

export const productList = [
  {
    name: "Chattrn",
    productLink: "https://www.chattrn.com/",
    imageSrc: "/chattrn.png",
    description: "Let the AI agent handle your customer",
    activeUsers: 7,
    earningsStatus: EARNINGS_STATUS.CONFIDNETIALS,
  },
  {
    name: "Talk Expense",
    productLink: "https://www.talkexpense.com/",
    imageSrc: "/talk-expense.png",
    description: "Track your expenses easy with AI voice assistant",
    activeUsers: 1,
    earningsStatus: EARNINGS_STATUS.NO_EARNINGS,
    earningsData: monthlyZeroIncomeData,
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
