import { createContext, useState, useEffect } from "react";

import { fetchCategories, fetchProducts, fetchLists } from "../api/Network";

const GlobalContext = createContext({
  products: [],
  setProducts: () => {},
  categories: [],
  setCategories: () => {},
  lists: {},
  setLists: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts
      ? JSON.parse(storedProducts)
      : fetchProducts().then((data) => setProducts(data));
  });

  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories
      ? JSON.parse(storedCategories)
      : fetchCategories().then((data) => setCategories(data));
  });

  const [lists, setLists] = useState(() => {
    const storedLists = localStorage.getItem("lists");
    return storedLists
      ? JSON.parse(storedLists)
      : fetchCategories().then((data) => {
          fetchLists({ data }).then((lists) => setLists(lists));
        });
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
    lists,
    setLists,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
