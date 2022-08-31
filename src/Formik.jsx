import { Container } from "@mui/material";
import React from "react";
import Forms from "./Formik/components/Form";

const Formik = () => {
  return (
    <Container
      sx={{
        p: "20px",
        height: "100vh",
        backgroundColor: "cornflowerblue",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Forms />
    </Container>
  );
};

export default Formik;
