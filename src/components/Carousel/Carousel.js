import React, { useEffect, useState } from "react";

import "./Carousel.css";

const Carousel = ({ topColor }) => {
  const [datas] = useState([]);
  const [list, setlist] = useState([]);
  const [banner, setBanner] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 50);
  }, [banner]);

  let startX = 0;

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    const diff = startX - event.changedTouches[0].clientX;

    if (diff > 50) {
      banner < 9 && setBanner(banner + 1);
    }

    if (diff < -50) {
      banner > 0 && setBanner(banner - 1);
    }
  }

  const updateList = () => {
    setlist(
      datas.slice(0, 10).map((el, c) => {
        return (
          <li key={c}>
            <img
              alt="carousel-footer"
              className={`${
                banner === c ? "carousel-footer-image-bordered" : ""
              }`}
              src={`${el.image}`}
              onClick={() => setBanner(c)}
            />
          </li>
        );
      })
    );
  };

  useEffect(() => {
    const fetchimages = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();

      datas.push(...data);

      updateList();
    };

    fetchimages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateList();
  }, [banner]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={"carousel-container"}
      style={{ backgroundColor: topColor }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-body">
        <div className="carousel-content-text">
          <p
            className={`carousel-content-text-light ${
              visible ? "visible" : ""
            }`}
          >
            {datas[banner] ? datas[banner].category : "loading..."}
          </p>
          <p
            className={`carousel-content-text-bold ${visible ? "visible" : ""}`}
          >
            {datas[banner] ? datas[banner].title : "loading..."}
          </p>
          <button className="carousel-content-button">
            <p className="carousel-content-button-text">Sipariş Et</p>
          </button>
        </div>
        <div className="carousel-content-images">
          <img
            alt="carousel"
            className={`carousel-content-text-image ${
              visible ? "visible" : ""
            }`}
            src={datas[banner] ? datas[banner].image : "loading..."}
          />
        </div>
        <p className="carousel-counter">{banner + 1} / 10 </p>
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
