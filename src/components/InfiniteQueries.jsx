import { Fragment } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { api } from "../api/axios";

const fetchColor = async ({ pageParam = 1 }) => {
  const result = await api.get(`colors?_limit=2&_page=${pageParam}`);
  return result.data;
};
const InfiniteQuries = () => {
  const {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColor, {
    getNextPageParam: (_lastPages, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log(data);
  return (
    <>
      {data?.pages.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.map((item) => (
              <h2 key={item.id}>
                {item.id}. {item.label}
              </h2>
            ))}
          </Fragment>
        );
      })}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Next
        </button>
      </div>
      <div>{isFetching && <h2>Loading...</h2>}</div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching" : null}</div>
    </>
  );
};

export default InfiniteQuries;
