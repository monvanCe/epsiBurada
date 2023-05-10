import React, { useEffect, useState } from "react";

import "./Categories.css";
import { fetchCategories } from "../../Datas/Network";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  });

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
