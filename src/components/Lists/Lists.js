import { useContext } from "react";

import "./Lists.css";
import GlobalContext from "../../Datas/GlobalVariables";

const Lists = () => {
  const { lists } = useContext(GlobalContext);

  const stars = (rate) => {
    let filled = Math.floor(rate);

    let stars = [];

    for (let i = 0; i < 5; i++) {
      if (filled > 0) {
        stars.push(
          <li key={i} className="star">
            <img alt="filled" src={require("./assets/filled-star.png")} />
          </li>
        );
        filled--;
      } else {
        stars.push(
          <li key={i} className="star">
            <img alt="empty" src={require("./assets/empty-star.png")} />
          </li>
        );
      }
    }

    return <ul className="stars"> {stars ? stars : ""} </ul>;
  };

  return (
    <div className="lists-container">
      <div className="lists">
        {lists
          ? Object.keys(lists).map((el, c) => (
              <div key={c} className="list">
                <p className="lists-header">
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </p>
                <div className="products">
                  {lists[el].map((element, index) => {
                    return (
                      <div key={index} className="product">
                        <img
                          alt="product"
                          className="product-image"
                          src={element.image}
                        />
                        <p className="product-text">{element.title}</p>
                        <div className="rates">
                          {stars(element.rating.rate)}
                          <p> {element.rating.count} </p>
                        </div>
                        <p className="product-price"> {element.price}$</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Lists;
