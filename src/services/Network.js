import axios from "axios";
import { productsApi } from "../const/api";

export const fetchProducts = async () => {
  const response = await axios.get(productsApi);
  return response.data;
};
