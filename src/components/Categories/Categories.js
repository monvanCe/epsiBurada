import React, { useContext } from "react";

import "./Categories.css";
import GlobalContext from "../../Datas/GlobalVariables";

const Categories = () => {
  const { categories } = useContext(GlobalContext);

  return (
    <div className="categories-conteiner">
      <div className="categories">
        {categories.map((el, c) => {
          return [
            <p key={c} className="category">
              {el ? el.charAt(0).toUpperCase() + el.slice(1) : "loading.."}
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
