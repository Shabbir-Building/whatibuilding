import { productList } from "./constants";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="flex w-full max-w-240 flex-col gap-6 md:h-full md:min-h-0 md:w-[58%] md:gap-8 md:overflow-y-auto md:p-3 md:py-16 md:pb-32 scrollbar-hide">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-700 md:text-3xl">
        Works
      </h2>
      <div className="columns-1 [column-gap:1.75rem] md:columns-2">
        {productList.map((product) => (
          <div key={product.name} className="mb-7 break-inside-avoid">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
