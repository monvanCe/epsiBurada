import { createContext, useState, useEffect } from "react";

import { fetchProducts } from "../services/Network";

const GlobalContext = createContext({
  products: [],
  setProducts: () => {},
  favorites: [],
  setFavorites: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return JSON.parse(storedProducts).length > 0
      ? JSON.parse(storedProducts)
      : fetchProducts().then((data) => {
          setProducts(data);
        });
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
  }, [products]);

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return JSON.parse(storedFavorites) ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    products,
    setProducts,
    favorites,
    setFavorites,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
