import axios from "axios";

let products;
let isFetchingProducts = false;
let productsCallbacks = [];
export const fetchProducts = async () => {
  if (products) {
    return products;
  }

  if (isFetchingProducts) {
    return new Promise((resolve) => {
      productsCallbacks.push(resolve);
    });
  }

  isFetchingProducts = true;

  const response = await axios.get("https://fakestoreapi.com/products/");

  products = response.data;

  isFetchingProducts = false;

  productsCallbacks.forEach((callback) => callback(products));
  productsCallbacks = [];

  return products;
};

let categories;
let isFetchingCategories = false;
let categoriesCallbacks = [];
export const fetchCategories = async () => {
  if (categories) {
    return categories;
  }

  if (isFetchingCategories) {
    return new Promise((resolve) => {
      categoriesCallbacks.push(resolve);
    });
  }

  isFetchingCategories = true;

  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  categories = response.data;

  isFetchingCategories = false;

  categoriesCallbacks.forEach((callback) => callback(categories));
  categoriesCallbacks = [];

  return categories;
};

let lists = {};
let isFetchingLists = false;
let listsCallbacks = [];
export const fetchingLists = async ({ data }) => {
  if (lists[data[0]]) {
    return lists;
  }

  if (isFetchingLists) {
    return new Promise((resolve) => {
      listsCallbacks.push(resolve);
    });
  }

  isFetchingLists = true;

  let i = 0;
  while (i < data.length) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${data[i]}`
    );
    lists[data[i]] = response.data;

    i++;
  }

  isFetchingLists = false;

  listsCallbacks.forEach((callback) => callback(lists));
  listsCallbacks = [];

  return lists;
};
