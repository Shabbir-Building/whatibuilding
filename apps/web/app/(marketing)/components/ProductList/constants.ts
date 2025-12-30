import { ChartConfig } from "@/components/ui/chart";

// Get current month (0-11)
const currentMonth = new Date().getMonth();

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

// Generate monthly income data from January to current month
export const monthlyIncomeData = Array.from(
  { length: currentMonth + 1 },
  (_, index) => ({
    month: monthNames[index],
    income: Math.floor(Math.random() * 5000) + 2000, // Random income between $2000-$7000
  })
);

// Chart configuration
export const chartConfig = {
  income: {
    label: "Income",
    color: "hsla(41, 82%, 52%, 1.00)",
  },
} satisfies ChartConfig;
