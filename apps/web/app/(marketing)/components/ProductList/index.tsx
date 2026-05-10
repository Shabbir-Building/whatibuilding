import { productList } from "./constants";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="flex w-full max-w-240 flex-col gap-6 md:h-full md:min-h-0 md:w-[58%] md:gap-8 md:overflow-y-auto md:p-3 md:py-16 md:pb-32 scrollbar-hide">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-700 md:text-3xl">
        Works
      </h2>
      <div className="grid grid-cols-1 content-start gap-7 md:grid-cols-2 md:items-stretch">
        {productList.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
