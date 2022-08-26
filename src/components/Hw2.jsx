import React from "react";
import useSuperHero from "../hooks/useSuperHero";
// create new component with custom hook
// data fetch on mount & fetch on Click

const Hw2 = () => {
  const { data, isLoading, refetch } = useSuperHero({
    refetchOnMount: false,
  });

  return (
    <>
      <button onClick={refetch}>Refetch</button>
      {isLoading && <h2>Loading...</h2>}
      {data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default Hw2;
