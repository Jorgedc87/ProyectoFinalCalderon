import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { BannerSection, ProductsSection, SubscriptionSection } from "../../components/HomePage";

export const HomePage = () => {
  const { products, loading } = useContext(ProductsContext);

  return (
    <div className="mx-auto pb-8">
      <BannerSection />
      <ProductsSection products={products} loading={loading} />
      <SubscriptionSection />
    </div>
  );
};
