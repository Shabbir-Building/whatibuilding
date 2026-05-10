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

const SHOW_CARD_ANALYTICS_AND_HOVER = false;

function siteHostnameFromProductLink(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./i, "");
  } catch {
    return "";
  }
}

function CardBody({ product }: ProductCardProps) {
  return (
    <div className="w-full border-t border-neutral-200/80 px-3 pb-2 pt-3">
      <ul
        className="space-y-2.5"
        aria-label="My responsibilities on this project"
      >
        {product.responsibilityBullets.map((line, i) => (
          <li
            key={i}
            className="flex gap-3 text-[13px] leading-snug text-neutral-700 md:text-sm md:leading-relaxed"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
              aria-hidden
            />
            <span className="min-w-0">{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ProductCard = ({ product }: ProductCardProps) => {
  const siteLabel = siteHostnameFromProductLink(product.productLink);

  const cardHeaderLink = (
    <Link
      href={product.productLink}
      target="_blank"
      className="group block w-full rounded-2xl p-5 transition hover:scale-103 hover:bg-neutral-300 hover:decoration-neutral-800"
    >
      <div className="flex min-w-0 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Image
            alt="product-image"
            src={product.imageSrc}
            width={24}
            height={24}
            className="shrink-0 rounded-md transition-transform group-hover:-rotate-12 group-hover:scale-110"
          />
          <h2 className="text-md font-semibold truncate">{product.name}</h2>
        </div>

        {siteLabel ? (
          <span className="shrink-0 text-xs text-neutral-600">
            <span className="font-semibold underline decoration-neutral-500/70 underline-offset-2">
              {siteLabel}
            </span>
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-neutral-600">{product.description}</p>
    </Link>
  );

  const analyticsSlot = SHOW_CARD_ANALYTICS_AND_HOVER ? (
    <>
      {(product.earningsStatus === EARNINGS_STATUS.EARNINGS ||
        product.earningsStatus === EARNINGS_STATUS.NO_EARNINGS) && (
        <IncomeChart earningsData={product.earningsData ?? []} />
      )}
      {product.earningsStatus === EARNINGS_STATUS.CONFIDNETIALS && (
        <div className="px-3">
          <div className="flex h-24 w-full items-center justify-center rounded-xl bg-gray-100 p-4 text-xs text-yellow-500">
            <LockKeyhole size={14} className="mr-1" /> Earnings Confidential
          </div>
        </div>
      )}
    </>
  ) : (
    <CardBody product={product} />
  );

  const cardInner = (
    <div className="flex h-fit w-full max-w-120 flex-col overflow-visible rounded-2xl bg-white pb-3">
      {cardHeaderLink}
      {analyticsSlot}
    </div>
  );

  if (SHOW_CARD_ANALYTICS_AND_HOVER) {
    return (
      <HoverCard openDelay={100} closeDelay={50}>
        <HoverCardTrigger asChild>{cardInner}</HoverCardTrigger>
        <HoverCardContent className="h-fit w-full max-w-87 min-w-87 overflow-y-auto border-none shadow-lg md:max-w-114 md:min-w-114">
          <HoverCardArrow className="fill-white" />
          <ProductHoverCard product={product} />
        </HoverCardContent>
      </HoverCard>
    );
  }

  return cardInner;
};

export default ProductCard;
