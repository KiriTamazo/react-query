import { Button } from "@mui/material";
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

  return (
    <nav>
      <ul>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/posts">
          <li>Posts</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
      <Button onClick={handleClick}>Logout</Button>
    </nav>
  );
};

export default Navbar;
