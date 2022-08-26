import { useQuery } from "react-query";
import { api } from "../api/axios";

const fetchData = async () => {
  const res = await api.get("superheros");
  return res.data;
};

const useSuperHero = (config) => {
  return useQuery("super-heros", fetchData, config);
};

export default useSuperHero;
