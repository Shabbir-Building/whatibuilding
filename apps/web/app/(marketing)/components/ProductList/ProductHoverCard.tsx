import { Github } from "lucide-react";
import Link from "next/link";
import type { Product } from "./types";
import { WORK_TYPE_NAME } from "./constants";

export const ProductHoverCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col h-full gap-1">
      {/* Header */}
      <div className="flex justify-between items-center pb-2">
        <h3 className="text-xs font-semibold text-neutral-700">
          {WORK_TYPE_NAME[product.workType]}
        </h3>
        {product.githubLink && (
          <Link
            href={product.githubLink}
            target="_blank"
            className="text-neutral-500 hover:text-black hover:scale-110 transition"
          >
            <Github size={18} />
          </Link>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium text-neutral-500 tracking-wider">
          {product.contributionText}:
        </p>

        {product.techStack?.map((tech) => (
          <span
            key={tech}
            className="px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded-lg text-[10px] font-medium border border-neutral-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
