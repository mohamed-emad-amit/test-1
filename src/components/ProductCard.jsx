import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="text-container">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>
          price: <span>${product.price}</span>
        </h3>
      </div>
      <Link to={`/product-details/${product.id}`}>
        <button className="show-more">Show More</button>
      </Link>
    </div>
  );
};

export default ProductCard;
