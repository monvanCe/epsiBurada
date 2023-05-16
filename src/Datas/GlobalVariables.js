import { createContext, useState } from "react";

const GlobalContext = createContext({
  products: [],
  setProducts: () => {},

  categories: [],
  setCategories: () => {},

  lists: {},
  setLists: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [lists, setLists] = useState({});

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
