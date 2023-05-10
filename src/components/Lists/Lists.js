import { useState, useEffect } from "react";

import "./Lists.css";
import { fetchCategories } from "../../Datas/Network";
import { fetchingLists } from "../../Datas/Network";

const Lists = () => {
  const [lists, setLists] = useState();
  useEffect(() => {
    fetchCategories().then((data) => {
      fetchingLists({ data }).then((data) => {
        setLists(data);
      });
    });
  }, []);

  useEffect(() => {
    lists && console.log(lists);
  }, [lists]);

  const stars = (rate) => {
    let filled = Math.floor(rate);

    let stars = [];

    for (let i = 0; i < 5; i++) {
      if (filled > 0) {
        stars.push(
          <li className="star">
            <img src={require("./assets/filled-star.png")} />
          </li>
        );
        filled--;
      } else {
        stars.push(
          <li className="star">
            <img src={require("./assets/empty-star.png")} />
          </li>
        );
      }
    }

    return <ul className="stars"> {stars ? stars : ""} </ul>;
  };

  return (
    <div className="lists-container">
      <div className="lists">
        {lists ? (
          Object.keys(lists).map((el) => (
            <div key={el} className="list">
              <p className="lists-header">{el}</p>
              <div className="products">
                {lists[el].map((element) => {
                  return (
                    <div className="product">
                      <img className="product-image" src={element.image} />
                      <p className="product-text">{element.title}</p>
                      <div className="rates">
                        {stars(element.rating.rate)}
                        <p> {element.rating.count} </p>
                      </div>
                      <p> {element.price} </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
