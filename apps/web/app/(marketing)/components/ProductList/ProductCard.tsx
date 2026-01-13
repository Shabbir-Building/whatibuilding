import Link from "next/link";
import Image from "next/image";
import type { ProductCardProps } from "./types";
import { LockKeyhole } from "lucide-react";
import { EARNINGS_STATUS } from "./constants";
import { IncomeChart } from "./IncomeChart";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@whatibuilding/components";
import { ProductHoverCard } from "./ProductHoverCard";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <HoverCard openDelay={100} closeDelay={50}>
      <HoverCardTrigger asChild>
        <div className="bg-white w-full max-w-120 rounded-2xl pb-3 overflow-visible h-fit flex flex-col">
          <Link
            href={product.productLink}
            target="_blank"
            className="group block p-5 w-full rounded-2xl hover:scale-103 hover:bg-neutral-300 transition"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  alt="product-image"
                  src={product.imageSrc}
                  width={24}
                  height={24}
                  className="group-hover:-rotate-12 group-hover:scale-110 transition-transform rounded-md"
                />
                <h2 className="text-md font-semibold">{product.name}</h2>
              </div>

              <span className="text-xs">
                <span className="font-semibold">{product.activeUsers}</span>{" "}
                Active Users
              </span>
            </div>
            <p className="text-sm text-neutral-600 mt-2">
              {product.description}
            </p>
          </Link>

          {(product.earningsStatus === EARNINGS_STATUS.EARNINGS ||
            product.earningsStatus === EARNINGS_STATUS.NO_EARNINGS) && (
            <IncomeChart earningsData={product.earningsData ?? []} />
          )}
          {product.earningsStatus === EARNINGS_STATUS.CONFIDNETIALS && (
            <div className="px-3">
              <div className="bg-gray-100 h-24 text-yellow-500 rounded-xl p-4 text-xs w-full flex justify-center items-center">
                <LockKeyhole size={14} className="mr-1" /> Earnings Confidential
              </div>
            </div>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-full border-none min-w-87 max-w-87 md:min-w-114 md:max-w-114 h-fit overflow-y-auto shadow-lg">
        <HoverCardArrow className="fill-white" />
        <ProductHoverCard product={product} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProductCard;
