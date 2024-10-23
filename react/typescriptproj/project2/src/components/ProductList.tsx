import Category from "./Category";
import { useProducts } from "./useProducts";
// import { ProductType } from "./types";
// import { IntrinsicAttributes } from "react";

const ProductList: React.FC = () => {
  const { products, isLoading, isError } = useProducts();
  // console.log("productsfetched:", products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const categories = Array.from(
    new Set(products?.map((product) => product.category)) //(product.category:map the products their category values)
  );

  const filteredProducts = (category: string) => {
    return products?.filter((product) => product.category === category) || [];
  };
  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          products={filteredProducts(category)}
        />
      ))}
    </div>
  );
};

export default ProductList;
