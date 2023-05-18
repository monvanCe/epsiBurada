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

import {
  fetchCategories,
  fetchProducts,
  fetchingLists,
} from "../../api/Network";

import GlobalContext from "../../Datas/GlobalVariables";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const { lists, setProducts, setCategories, setLists } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
      fetchingLists({ data }).then((data) => {
        setLists(data);
      });
    });
    fetchProducts().then((data) => {
      setProducts(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, [width]);

  return Object.keys(lists).length > 0 ? (
    <div>
      <Header />

      <Colorbar />

      <MobileSearch />

      <Categories />

      <Carousel topColor={width < 767 ? "white" : "#804040"} />

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
