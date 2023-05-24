import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Carousel.css";
import GlobalContext from "../../state/GlobalVariables";
import { handleStart, handleEnd } from "../../utils/handleMouseEvents";

const Carousel = ({ topColor }) => {
  const navigate = useNavigate();
  const { products } = useContext(GlobalContext);

  const [list, setList] = useState([]);
  const [banner, setBanner] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 50);
  }, [banner]);

  const updateList = () => {
    setList(
      products.slice(0, 10).map((el, c) => {
        return (
          <li key={c} onClick={() => setBanner(c)}>
            <img
              alt="carousel-footer"
              className={`${
                banner === c
                  ? "footer-image carousel-footer-image-bordered"
                  : "footer-image"
              }`}
              src={`${el.image}`}
            />
          </li>
        );
      })
    );
  };

  useEffect(() => {
    updateList();
  }, [banner, products]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={"carousel-container"}
      style={{ backgroundColor: topColor }}
      onTouchStart={handleStart}
      onTouchEnd={(event) => {
        let diff = handleEnd(event);
        diff > 50 && banner < 9 && setBanner(banner + 1);
        diff < -50 && banner > 0 && setBanner(banner - 1);
      }}
      onMouseDown={handleStart}
      onMouseUp={(event) => {
        let diff = handleEnd(event);
        diff > 50 && setBanner(banner + 1);
        diff < -50 && banner > 0 && setBanner(banner - 1);
      }}
    >
      <div className="carousel-body">
        <div className="carousel-content-text">
          <p
            className={`carousel-content-text-light ${
              visible ? "visible" : ""
            }`}
          >
            {products[banner] ? products[banner].category : "loading..."}
          </p>
          <p
            className={`carousel-content-text-bold ${visible ? "visible" : ""}`}
          >
            {products[banner] ? products[banner].title : "loading..."}
          </p>
          <button
            className="carousel-content-button"
            onClick={() => {
              navigate(
                `Product?productName=${products[banner].title}&productCategory=${products[banner].category}`
              );
            }}
          >
            <p className="carousel-content-button-text">Sipariş Et</p>
          </button>
        </div>
        <div className="carousel-content-images">
          <img
            alt="carousel"
            className={`carousel-content-text-image ${
              visible ? "visible" : ""
            }`}
            src={products[banner] ? products[banner].image : "loading..."}
          />
        </div>
      </div>

      <div className="carousel-footer">
        <button
          className="carousel-left-button-desktop"
          onClick={() => banner > 0 && setBanner(banner - 1)}
        />
        <ul className="carousel-footer-images">{list}</ul>
        <button
          className="carousel-right-button-desktop"
          onClick={() => banner < 9 && setBanner(banner + 1)}
        />
      </div>
    </div>
  );
};

export default Carousel;
