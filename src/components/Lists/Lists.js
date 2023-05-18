import React, { useContext } from "react";

import "./Lists.css";
import GlobalContext from "../../Datas/GlobalVariables";

const Lists = () => {
  const { lists, setLists } = useContext(GlobalContext);

  const stars = (rate) => {
    let filled = Math.round(rate);
    let stars = [];

    for (let i = 0; i < 5; i++) {
      if (filled > 0) {
        stars.push(
          <li key={i} className="star">
            <img
              alt="filled"
              src={require("../../assets/lists/filled-star.png")}
            />
          </li>
        );
        filled--;
      } else {
        stars.push(
          <li key={i} className="star">
            <img
              alt="empty"
              src={require("../../assets/lists/empty-star.png")}
            />
          </li>
        );
      }
    }
    return <ul className="stars"> {stars ? stars : ""} </ul>;
  };

  const addproduct = () => {
    setLists((prevState) => {
      return {
        ...prevState,
        jewelery: [
          ...prevState.jewelery,
          {
            image:
              "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            id: 21,
            title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            rating: { rate: 1, count: 100 },
            price: 10.99,
          },
        ],
      };
    });
  };

  const processProduct = (product) => {
    return product ? (
      <div key={product.id} className="product">
        <img alt="product" className="product-image" src={product.image} />
        <p className="product-text">{product.title}</p>
        <div className="rates">
          {stars(product.rating.rate)}
          <p> {product.rating.count} </p>
        </div>
        <p className="product-price"> {product.price}$</p>
      </div>
    ) : (
      <div onClick={addproduct} className="product add-product-container">
        <p className="add-product-text">+</p>
      </div>
    );
  };

  const processList = (list, index) => {
    const processedProducts = list.map((product) => processProduct(product));
    return (
      <div key={index} className="list">
        <p className="lists-header">
          {list[0].category.charAt(0).toUpperCase() + list[0].category.slice(1)}
        </p>
        <div className="products">
          {processedProducts} {processProduct()}
        </div>
      </div>
    );
  };

  const processedLists = Object.values(lists).map(processList);

  return <div className="lists">{processedLists}</div>;
};

export default Lists;
