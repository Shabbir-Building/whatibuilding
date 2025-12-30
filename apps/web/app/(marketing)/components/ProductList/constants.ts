import { ChartConfig } from "@/components/ui/chart";

<<<<<<< HEAD
=======
// Get current month (0-11)
const currentMonth = new Date().getMonth();

>>>>>>> draft save for product list
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

<<<<<<< HEAD
// Generate monthly income data for all 12 months
export const monthlyIncomeData = Array.from({ length: 12 }, (_, index) => ({
  month: monthNames[index],
  income: Math.floor(Math.random() * 5000) + 2000, // Random income between $2000-$7000
}));
=======
// Generate monthly income data from January to current month
export const monthlyIncomeData = Array.from(
  { length: currentMonth + 1 },
  (_, index) => ({
    month: monthNames[index],
    income: Math.floor(Math.random() * 5000) + 2000, // Random income between $2000-$7000
  })
);
>>>>>>> draft save for product list

// Chart configuration
export const chartConfig = {
  income: {
    label: "Income",
    color: "hsla(41, 82%, 52%, 1.00)",
  },
} satisfies ChartConfig;
