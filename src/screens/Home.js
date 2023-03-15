import React, { useEffect, useState } from "react";
import "./Home.css";

import Colorbar from "../components/Colorbar/Colorbar";
import MobileSearch from "../components/MobileSearch/MobileSearch";
import Carousel from "../components/Carousel/Carousel";
import Bottombar from "../components/Bottombar/Bottombar";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [width]);

  return (
    <div className="container">
      <Header />

      <Colorbar />

      <MobileSearch />

      <Categories />

      <Carousel topColor={width < 767 ? "white" : "#804040"} />

      <div className="lists"></div>

      <Bottombar />

      <div className="eop"></div>
    </div>
  );
}

export default App;
