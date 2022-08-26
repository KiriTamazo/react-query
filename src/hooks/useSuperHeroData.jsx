import { useQuery } from "react-query";
import { api } from "../api/axios";

const fetchSuperHero = async ({ queryKey }) => {
  const heroId = queryKey[1];
  const result = await api.get(`/superheros/${heroId}`);
  return result.data;
};

export default function useSuperHeroData(heroId) {
  return useQuery(["super-hero", heroId], fetchSuperHero);
}
