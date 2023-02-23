import React from "react";
import "./Home.css";

import Colorbar from "../components/Colorbar";
import MobileSearch from "../components/MobileSearch";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo"></div>
        <div className="desktopsearch"></div>
        <div className="location"></div>
        <div className="favorites"></div>
      </div>

      <Colorbar paddingtop="1.5%" />

      <MobileSearch />

      <div className="categories"></div>

      <div className="carousel"></div>

      <div className="lists"></div>

      <div className="eop"></div>

      <div className="tabbar">
        <img
          className="homebar"
          src={require("../assets/home.png")}
          alt="homebar"
        />
        <img
          className="categoriesbar"
          src={require("../assets/categories.png")}
          alt="homebar"
        />
        <img
          className="favoritesbar"
          src={require("../assets/favorites.png")}
          alt="homebar"
        />
      </div>
    </div>
  );
}

export default App;
