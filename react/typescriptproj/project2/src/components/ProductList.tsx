import Category from "./Category";
import { useProducts } from "./useProducts";

const ProductList: React.FC = () => {
  const { products, isLoading, isError } = useProducts();
  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;

  const categories = Array.from(
    new Set(products?.map((product) => product.category))
  );
  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          products={products?.filter(
            (product) => product.category === category
          )}
        />
      ))}
    </div>
  );
};

export default ProductList;
