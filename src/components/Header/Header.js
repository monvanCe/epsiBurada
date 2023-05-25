import { useEffect, useState, useContext } from "react";

import "./Header.css";
import locationSvg from "../../assets/header/location.svg";
import citiesdata from "../../assets/header/Cities";

import GlobalContext from "../../state/GlobalVariables";

const Header = () => {
  const [cities, setCities] = useState();
  const { products } = useContext(GlobalContext);

  useEffect(() => {
    setCities(
      citiesdata.map((el, c) => {
        return (
          <option key={c} value={el}>
            {el}
          </option>
        );
      })
    );
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src={require("../../assets/header/logo.png")} />
      </div>

      <div className="desktopsearch">
        <input placeholder="Ürün veya kategori ara" />
        <button>ARA</button>
      </div>

      <div className="location">
        <img alt="location" src={locationSvg} />
        <p>Konum</p>
        <select id="province" name="province">
          {cities}
        </select>
      </div>

      <div className="favorites-container">
        <img alt="favorites" src={require("../../assets/header/heart.png")} />
        <p>{products.filter((obj) => obj.favorite).length}</p>
      </div>
    </div>
  );
};

export default Header;
