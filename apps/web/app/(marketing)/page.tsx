import DeveloperInfo from "./components/DeveloperInfo";
import DeveloperSocialLinks from "./components/DeveloperSocialLinks";
import ProductList from "./components/ProductList";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center px-5 md:px-22 gap-10 md:flex-row md:h-screen md:min-h-0 md:items-stretch md:overflow-hidden">
      <DeveloperInfo />
      <ProductList />
      <DeveloperSocialLinks className="flex md:hidden justify-center pb-12" />
    </div>
  );
}
