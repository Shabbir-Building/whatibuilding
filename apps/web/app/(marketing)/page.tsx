import DeveloperInfo from "./components/DeveloperInfo";
import ProductList from "./components/ProductList";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center px-22 gap-10 md:flex-row md:h-screen md:overflow-hidden">
      <DeveloperInfo />
      <ProductList />
    </div>
  );
}
