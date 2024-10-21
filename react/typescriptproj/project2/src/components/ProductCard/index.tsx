import React from "react";
import { Product } from "../types";
import "./index.css";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="container">
      <div className="card">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100px", height: "100px" }}
        />
        <p>
          <strong>Title:</strong>
          {product.title}
        </p>
        <p>
          <strong>Description:</strong>
          {product.description}
        </p>
        <p>
          <strong>Price:</strong>
          {product.price} USD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
