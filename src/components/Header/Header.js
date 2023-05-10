import { useEffect, useState } from "react";

import "./Header.css";
import locationSvg from "./assets/location.svg";
import citiesdata from "./assets/Cities";

const Header = () => {
  const [cities, setCities] = useState();

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
        <img alt="logo" src={require("./assets/logo.png")} />
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
        <img alt="favorites" src={require("./assets/heart.png")} />
        <p>1</p>
      </div>
    </div>
  );
};

export default Header;
