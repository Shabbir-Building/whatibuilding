import type { StaticImageData } from "next/image";
import { EARNINGS_STATUS, WORK_TYPE } from "./constants";

export type EarningsDatum = {
  month: string;
  income: number;
};

export type Product = {
  name: string;
  productLink: string;
  githubLink?: string;
  techStack?: string[];
  description?: string;
  contributionText: string;
  activeUsers: number | string;
  earningsData?: EarningsDatum[];
  imageSrc: string | StaticImageData;
  workType: (typeof WORK_TYPE)[keyof typeof WORK_TYPE];
  earningsStatus:
    | (typeof EARNINGS_STATUS)[keyof typeof EARNINGS_STATUS]
    | string;
};

export type ProductCardProps = {
  product: Product;
};

export type IncomeChartProps = {
  earningsData: EarningsDatum[];
};
