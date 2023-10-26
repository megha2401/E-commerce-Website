import axios from "axios";

export const fetchProducts = () => {
  return axios.get("https://dummyjson.com/products");
};

export const fetchProductById = (id: number) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};
