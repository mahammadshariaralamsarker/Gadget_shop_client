import ProductCard from "./ProductCard";

export const FeatureProduct = () => {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-semibold text-center">Featured Product </h1>
      <div className="flex items-center gap-8">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>     
      </div>
    </div>
  );
};
