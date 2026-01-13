import { productList } from "./constants";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="w-full md:py-16 md:w-[67%] max-w-240 grid grid-cols-1 md:grid-cols-2 gap-7 content-start md:h-screen md:overflow-y-auto md:pb-32 scrollbar-hide md:p-3 items-start">
      {productList.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
