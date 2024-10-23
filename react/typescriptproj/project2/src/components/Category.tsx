import ProductCard from "./ProductCard";
import { ProductType } from "./types";

interface Categoryprops {
  category: string;
  products: ProductType[];
}

const Category: React.FC<Categoryprops> = ({ category, products }) => {
  // console.log("category:", category);
  // console.log("products in category:", products);
  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
