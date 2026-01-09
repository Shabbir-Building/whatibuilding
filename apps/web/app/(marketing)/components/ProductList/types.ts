import type { StaticImageData } from "next/image";
import { EARNINGS_STATUS } from "./constants";

export type EarningsDatum = {
  month: string;
  income: number;
};

export type Product = {
  name: string;
  productLink: string;
  description?: string;
  activeUsers: number | string;
  earningsData?: EarningsDatum[];
  imageSrc: string | StaticImageData;
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
