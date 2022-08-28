import { AppBar, Button, List, ListItem } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Context";

const Navbar = () => {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    user.login = false;
    navigate("/login");
  };
  const route = [
    {
      id: 1,
      path: "users",
    },
    { id: 2, path: "posts" },
  ];

  return (
    <AppBar sx={{ backgroundColor: "cornflowerblue" }}>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: "20px",
          "& a": {
            color: "#fff",
          },
          "& .MuiListItem-root": { textTransform: "capitalize" },
        }}
      >
        {route.map((item) => (
          <Link key={item.id} to={item.path}>
            <ListItem>{item.path}</ListItem>
          </Link>
        ))}
        {user.login === true ? (
          <>
            <Link to="login">
              <ListItem>login</ListItem>
            </Link>
          </>
        ) : (
          <span>
            <ListItem>
              <Button variant="primary" onClick={handleClick}>
                Logout
              </Button>
            </ListItem>
          </span>
        )}
      </List>
    </AppBar>
  );
};

export default Navbar;
