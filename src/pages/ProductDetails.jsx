import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  //   Before Axios
  const [imageSrc, setImageSrc] = useState("");

  console.log(product);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setImageSrc(res.data.thumbnail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="page-layout single-product">
      <div className="images-container">
        <div className="main-image">
          <img src={imageSrc} alt={product.title} />
        </div>

        <div className="images">
          {product?.images?.map((image, index) => (
            <img
              src={image}
              alt={`product #${index + 1}`}
              key={index}
              onClick={function () {
                setImageSrc(image);
              }}
            />
          ))}
        </div>
      </div>
      <div className="text-container">
        <h2 className="title">{product.title}</h2>
        <p className="description">{product.description}</p>

        <div className="shape-container">
          <p style={{ backgroundColor: "#093FB4", color: "white" }}>
            price: ${product.price}
          </p>
          <p>stock: {product.stock}</p>
          <p style={{ backgroundColor: "#FFD8D8" }}>
            rating: {product.rating}⭐
          </p>
          <p style={{ backgroundColor: "#ED3500", color: "white" }}>
            shipping: {product.shippingInformation}
          </p>
          <p style={{ backgroundColor: "#090040", color: "white" }}>
            warranty: {product.warrantyInformation}
          </p>
        </div>

        <div className="review-container">
          {product?.reviews?.map((item, index) => (
            <div key={index} className="review-card">
              <h3>name: {item.reviewerName}</h3>
              <h4>email: {item.reviewerEmail}</h4>
              <p>rating: {item.rating}</p>
              <p>comment: {item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
