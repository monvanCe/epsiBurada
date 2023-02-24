import React from "react";
import "./Home.css";

import Colorbar from "../components/Colorbar/Colorbar";
import MobileSearch from "../components/MobileSearch/MobileSearch";
import Carousel from "../components/Carousel/Carousel";
import Bottombar from "../components/Bottombar/Bottombar";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo"></div>
        <div className="desktopsearch"></div>
        <div className="location"></div>
        <div className="favorites"></div>
      </div>

      <Colorbar paddingTop="1.5%" />

      <MobileSearch />

      <div className="categories"></div>

      <Carousel />

      <div className="lists"></div>

      <Bottombar />

      <div className="eop"></div>
    </div>
  );
}

export default App;
