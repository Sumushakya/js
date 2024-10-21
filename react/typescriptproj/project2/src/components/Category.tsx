// import React from 'react'

import ProductCard from "./ProductCard";
import { Product } from "./types";

interface Categoryprops {
  category: string;
  products: Product[];
}
const Category: React.FC<Categoryprops> = ({ category, products }) => {
  return (
    <div>
      <h2>{category}</h2>
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
