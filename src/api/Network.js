import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products/");
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
};

export const fetchingLists = async ({ data }) => {
  let lists = {};

  let i = 0;
  while (i < data.length) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${data[i]}`
    );
    lists[data[i]] = response.data;

    i++;
  }

  return lists;
};
