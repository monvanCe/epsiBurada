import React, { useState, useContext } from "react";

import "./AddProduct.css";
import GlobalContext from "../../../state/GlobalVariables";

export const ProductForm = (props) => {
  const { products, setProducts } = useContext(GlobalContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [ratingCount, setRatingCount] = useState("");
  const [price, setPrice] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.toggleValue(props.category);

    const newProduct = {
      category: props.category,
      id: products.length + 1,
      image,
      price,
      rating: { rate: rating, count: ratingCount },
      title,
    };

    setProducts([...products, newProduct]);

    setImage("");
    setTitle("");
    setRating("");
    setRatingCount("");
    setPrice("");
  };

  return (
    <div className="product">
      <form onSubmit={handleSubmit}>
        <div className="add-product-image-container">
          {image ? (
            <img src={image} alt="Selected" className="add-product-preview" />
          ) : (
            <input
              type="file"
              onChange={handleImageChange}
              className="add-product-image"
            />
          )}
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="product-text add-product-title"
        />
        <div className="add-product-rating">
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="add-product-rating-rate"
          />
          <input
            type="number"
            value={ratingCount}
            onChange={(e) => setRatingCount(e.target.value)}
            className="add-product-rating-count"
          />
        </div>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="add-product-price"
        />
        <div className="add-product-button-container">
          <button
            onClick={() => props.toggleValue(props.category)}
            className="add-product-button"
          >
            İptal
          </button>
          <button type="submit" className="add-product-button">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export const AddContainer = (props) => {
  return (
    <div
      onClick={() => props.toggleValue(props.category)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      className="product"
    >
      <p
        style={{
          fontSize: 72,
          color: "#d8d8d8",
          fontWeight: "bold",
        }}
      >
        +
      </p>
    </div>
  );
};
