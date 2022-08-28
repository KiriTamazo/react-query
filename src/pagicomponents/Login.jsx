import { Visibility } from "@mui/icons-material";
import {
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { api } from "../api/axios";
import { UserContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });
  console.log("login");
  const { userName, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await api.get("user");
    const data = res.data;

    const filterData = data.filter(
      (i) => i.userName === userName && i.password === password
    );

    if (
      userName &&
      password &&
      userName === filterData[0].userName &&
      password === filterData[0].password
    ) {
      console.log("submit");
      user.login = true;
      localStorage.setItem("login", JSON.stringify(user.login));
      navigate("/users");
    } else {
      console.log("error");
    }
    setInputs({
      userName: "",
      password: "",
    });
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cornflowerblue",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "20px 30px",
          width: "450px",
          height: "350px",
          m: "0 auto",
        }}
      >
        <Typography variant="h4" textAlign="center" margin="10px 0 20px 0">
          Login
        </Typography>

        <Grid container gap={3} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <TextField
              type="text"
              id="outline-name"
              fullWidth
              name="userName"
              label="User Name"
              value={userName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              value={password}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0 ",
                },
              }}
              type="password"
              id="outline-password"
              fullWidth
              label="Password"
              InputProps={{
                endAdornment: (
                  <Button
                    disableRipple
                    variant="text"
                    sx={{
                      p: "0",

                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <Visibility />
                  </Button>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={onSubmit}
              sx={{ minHeight: "50px" }}
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
