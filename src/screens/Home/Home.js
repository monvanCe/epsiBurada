import React, { useEffect, useState, useContext } from "react";
import "./Home.css";

import Colorbar from "../../components/Colorbar/Colorbar";
import MobileSearch from "../../components/MobileSearch/MobileSearch";
import Carousel from "../../components/Carousel/Carousel";
import Bottombar from "../../components/Bottombar/Bottombar";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import Lists from "../../components/Lists/Lists";
import Eop from "../../components/Eop/Eop";

import GlobalContext from "../../state/GlobalVariables";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const { products } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, [width]);

  return products.length > 0 ? (
    <div>
      <Header />

      <Colorbar />

      <MobileSearch />

      <Categories />

      <Carousel topColor={width < 767 ? "rgba(0, 0, 0, 0.0)" : "#804040"} />

      <Lists />

      <Eop />

      <Bottombar />
    </div>
  ) : (
    <div className="container">
      <img
        src={require("../../assets/Home/logo.png")}
        alt="resim açıklaması"
        className="blinking-image"
      />
    </div>
  );
}

export default App;
