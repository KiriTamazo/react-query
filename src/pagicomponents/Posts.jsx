import {
  Card,
  CardContent,
  Container,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../api/axios";

const fetchData = async (x, y = 5) => {
  const res = await api.get(`posts?_page=${x}&_limit=${y}`);
  return res.data;
};

const Posts = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [total, setTotal] = useState(1);

  const { data, isLoading, error, isError, refetch } = useQuery(
    ["posts", page],
    () => fetchData(page),
    { keepPreviousData: true }
  );
  const { data: totalData } = useQuery(
    ["posts"],
    async () => {
      const res = await api.get(`posts`);
      return res.data;
    },
    { refetchOnWindowFocus: false }
  );
  const totalPage = totalData?.length / perPage;
  useEffect(() => {
    if (data?.length > 4 && page < totalPage) {
      return setTotal(page + 1);
    }
  }, [data]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{ paddingTop: "100px", backgroundColor: "#f3f3f3", height: "100vh" }}
    >
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          gap: "20px",
          p: "20px 0",
        }}
      >
        {data?.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>
      <Pagination
        onChange={handleChange}
        count={total}
        page={page}
        color="primary"
        boundaryCount={3}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBack, next: ArrowForward }}
            {...item}
          />
        )}
      />
    </Container>
  );
};

export default Posts;
