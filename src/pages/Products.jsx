import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div id="product-page" className="page-layout">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
