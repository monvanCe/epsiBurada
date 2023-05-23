import { createContext, useState, useEffect } from "react";

import { fetchProducts } from "../api/Network";

const GlobalContext = createContext({
  products: [],
  setProducts: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts > 0
      ? JSON.parse(storedProducts)
      : fetchProducts().then((data) => {
          setProducts(data);
        });
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const value = {
    products,
    setProducts,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
