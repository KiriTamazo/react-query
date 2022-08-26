import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getPostPage = async (pageParam = 1) => {
  const result = await api.get(`posts?_page=${pageParam}`);
  return result.data;
};
