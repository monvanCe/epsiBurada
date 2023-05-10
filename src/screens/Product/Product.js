import React from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const productName = searchParams.get("productName");
  const productCategory = searchParams.get("productCategory");

  return (
    <div>
      <h1> {productCategory} </h1>
      <h1> {productName} </h1>
    </div>
  );
};

export default Product;
