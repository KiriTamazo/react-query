import React, { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../api/axios";

const fetchColor = async (pageNumber) => {
  const result = await api.get(`colors?_limit=2&_page=${pageNumber}`);
  return result.data;
};
const PaginationQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error, isError, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColor(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      {data?.map((color) => {
        return (
          <div key={color.id}>
            <h2>
              {color.id}. {color.label}
            </h2>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
        {isFetching && <h2>Loading...</h2>}
      </div>
    </>
  );
};

export default PaginationQueries;
