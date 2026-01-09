"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig } from "./constants";
import type { EarningsDatum } from "./types";

export const IncomeChart = ({
  earningsData,
}: {
  earningsData: EarningsDatum[];
}) => {
  return (
    <ChartContainer config={chartConfig} className="w-full px-3 h-24">
      <AreaChart
        data={earningsData}
        margin={{
          left: 12,
          right: 12,
          top: 10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-income)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-income)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          interval={0}
          style={{ fontSize: "11px" }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              className="bg-black text-white p-3 border-0"
              hideLabel={false}
              hideIndicator={true}
              labelFormatter={(label) => {
                const monthMap: Record<string, string> = {
                  Jan: "January",
                  Feb: "February",
                  Mar: "March",
                  Apr: "April",
                  May: "May",
                  Jun: "June",
                  Jul: "July",
                  Aug: "August",
                  Sep: "September",
                  Oct: "October",
                  Nov: "November",
                  Dec: "December",
                };
                const fullMonth = monthMap[label as string] || label;
                const currentYear = new Date().getFullYear();
                return `${fullMonth} ${currentYear}`;
              }}
              formatter={(value) => {
                if (value === undefined) return "";
                const num = Number(value);
                if (num >= 1_000_000_000) {
                  return `$${(num / 1_000_000_000).toFixed(1)}B`;
                }
                if (num >= 1_000_000) {
                  return `$${(num / 1_000_000).toFixed(1)}M`;
                }
                if (num >= 1_000) {
                  return `$${(num / 1_000).toFixed(1)}k`;
                }
                return `$${num}`;
              }}
            />
          }
        />
        <Area
          dataKey="income"
          type="natural"
          fill="url(#fillIncome)"
          fillOpacity={0.4}
          stroke="var(--color-income)"
          strokeWidth={1}
        />
      </AreaChart>
    </ChartContainer>
  );
};
