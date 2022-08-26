import Navbar from "./pagicomponents/Navbar";
import { Routes, Route } from "react-router-dom";
import Users from "./pagicomponents/Users";
import Posts from "./pagicomponents/Posts";
import ProtectedRoutes from "./pagicomponents/ProductedRoutes";
import Login from "./pagicomponents/Login";
import Home from "./pagicomponents/Home";
import { loginUser, UserContext } from "./pagicomponents/Context";

const PaginationApp = () => {
  return (
    <UserContext.Provider value={loginUser}>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default PaginationApp;
