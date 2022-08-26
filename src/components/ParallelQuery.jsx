import { useQuery } from "react-query";
import { api } from "../api/axios";

const fetchSuperHeros = async () => {
  const result = await api.get("superheros");
  return result.data;
};

const fetchFriends = async () => {
  const result = await api.get("friends");
  return result.data;
};

const ParallelQuery = () => {
  const { data: superHeros } = useQuery("superheros", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQuery</div>;
};

export default ParallelQuery;
