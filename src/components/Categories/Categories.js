import React, { useEffect, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const data = await response.json();

      setCategories(
        data.map((el) => {
          return el.charAt(0).toUpperCase() + el.slice(1);
        })
      );
    };

    getCategories();
  }, []);

  return (
    <div className="categories-conteiner">
      <div className="categories">
        {categories.map((el, c) => {
          return [
            <p key={c} className="category">
              {el ? el : "loading.."}
            </p>,
            c + 1 === categories.length ? null : (
              <div key={c + 1000} className="hr"></div>
            ),
          ];
        })}
      </div>
    </div>
  );
};

export default Categories;
