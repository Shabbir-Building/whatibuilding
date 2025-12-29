import DeveloperInfo from "./components/DeveloperInfo";
import ProductList from "./components/ProductList";

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <DeveloperInfo />
      <ProductList />
    </div>
  );
}
