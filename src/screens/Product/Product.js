import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./Product.css";

import Header from "../../components/Header/Header";
import Colorbar from "../../components/Colorbar/Colorbar";
import Categories from "../../components/Categories/Categories";

import GlobalContext from "../../state/GlobalVariables";
import { stars } from "../../utils/ratingStarts";

const Product = () => {
  const { products } = useContext(GlobalContext);

  const searchParams = new URLSearchParams(useLocation().search);
  const productId = searchParams.get("productId");

  const product = products.find((obj) => obj.id === parseInt(productId));

  return (
    <div>
      <Header />
      <Colorbar />
      <Categories />

      <div className="products-product-container">
        <div className="products-product-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="products-product-content">
          <p className="products-product-title">{product.title}</p>
          <div className="products-product-price-rating">
            <div className="products-product-price">
              <p> {product.price}$ </p>
            </div>
            <div className="products-product-rate">
              {stars(product.rating.rate)}
            </div>
          </div>
          <div className="products-product-rating-count">
            <p> {product.rating.count} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
