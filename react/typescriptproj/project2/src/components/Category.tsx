// import React from 'react'

import ProductCard from "./ProductCard";
import { ProductType } from "./types";

interface Categoryprops {
  category: string;
  products: ProductType[];
}
const Category: React.FC<Categoryprops> = ({ category, products }) => {
  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {products.map((indvproduct) => (
          <ProductCard key={indvproduct.id} product={indvproduct} />
        ))}
      </div>
    </div>
  );
};

export default Category;
