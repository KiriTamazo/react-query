import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "../api/axios";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const res = await api.get("superheros");
  return res.data;
};
const postData = async (hero) => {
  await api.post("superheros", hero);
};

const RQSuperHero = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchData
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postData, {
    // onSuccess: (data) => {
    //   console.log(data)
    //   // Refetch after update Functions
    //   // queryClient.invalidateQueries("super-heros");
    //   // Function to use Cache data
    //   queryClient.setQueryData("super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  const handleClick = () => {
    const data = { name, alterEgo };
    mutate(data);
    setName("");
    setAlterEgo("");
  };

  console.log(`isError:${isError}`, `isFetching:${isFetching}`);

  return (
    <>
      RQSuperHero
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      {(isLoading || isFetching) && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      <br />
      <button onClick={refetch}>Refetch</button>
      {data?.map((hero) => (
        <div key={hero.name}>
          <Link to={`/rq-super-heros/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHero;
