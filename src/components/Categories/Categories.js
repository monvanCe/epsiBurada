import React, { useContext } from "react";

import "./Categories.css";
import GlobalContext from "../../Datas/GlobalVariables";

import proToCat from "../../utils/ProToCat";

const Categories = () => {
  const { products } = useContext(GlobalContext);

  return (
    <div className="categories-conteiner">
      <div className="categories">
        {proToCat(products).map((el, c) => {
          return [
            <p key={c} className="category">
              {el ? el.charAt(0).toUpperCase() + el.slice(1) : "loading.."}
            </p>,
            c + 1 === proToCat(products).length ? null : (
              <div key={c + 1000} className="hr"></div>
            ),
          ];
        })}
      </div>
    </div>
  );
};

export default Categories;
