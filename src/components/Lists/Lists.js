import React, { useContext, useState } from "react";

import "./Lists.css";
import GlobalContext from "../../Datas/GlobalVariables";
import { ProductForm, AddContainer } from "./components/AddProduct";
import { removeObjectById } from "../../utils/removeById";

import proToCat from "../../utils/ProToCat";
import catToLis from "../../utils/CatToLis";

const Lists = () => {
  const { products, setProducts } = useContext(GlobalContext);

  const [isInput, setIsInput] = useState(() => {
    return proToCat(products).reduce((acc, category) => {
      return { ...acc, [category]: false };
    }, {});
  });

  const toggleValue = (key) => {
    setIsInput((prevState) => {
      return {
        ...prevState,
        [key]: !prevState[key],
      };
    });
  };

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

  const processProduct = (product) => {
    return product.id ? (
      <div key={product.id} className="product">
        <img alt="product" className="product-image" src={product.image} />
        <p className="product-text">{product.title}</p>
        <div className="rates">
          {stars(product.rating.rate)}
          <p> {product.rating.count} </p>
        </div>
        <div className="product-bottom-div">
          <p className="product-price"> {product.price}$</p>
          <p
            onClick={() => setProducts(removeObjectById(products, product.id))}
            className="product-remove-button"
          >
            KALDIR
          </p>
        </div>
      </div>
    ) : isInput[product] ? (
      <ProductForm category={product} toggleValue={toggleValue} />
    ) : (
      <AddContainer toggleValue={toggleValue} category={product} />
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
          {processedProducts} {processProduct(list[0].category)}
        </div>
      </div>
    );
  };

  const processedLists = Object.values(catToLis(products)).map(processList);

  return <div className="lists">{processedLists}</div>;
};

export default Lists;
