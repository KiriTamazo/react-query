import { useQueries } from "react-query";
import { api } from "../api/axios";

const fetchFetchSuperHero = async (heroId) => {
  const result = await api.get(`superheros/${heroId}`);
  return result.data;
};

const DynamicParallelQuery = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchFetchSuperHero(id),
      };
    })
  );
  console.log({ queryResult });

  return (
    <>
      {queryResult.map((item) => {
        const { name, id, alterEgo } = item.data;
        return (
          <div key={id}>
            <span>{name}</span> - <span>{alterEgo}</span>
          </div>
        );
      })}
    </>
  );
};

export default DynamicParallelQuery;
