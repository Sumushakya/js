import React from "react";
import { ProductType } from "../types";
import "./index.css";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="container">
      <div className="card" onClick={handleCardClick}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100px", height: "100px", marginBottom: "20px" }}
        />

        <div>
          <strong>Title:</strong>
        </div>
        <p>{product.title}</p>
        <div>
          <strong>Description:</strong>
        </div>
        <p>{product.description}</p>
        <strong>Price:</strong>
        <p>{product.price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;
