import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "./Context";

const useAuth = () => {
  const auth = useContext(UserContext);
  return auth && auth.login;
};

const ProductedRoutes = () => {
  const isAuth = useAuth();
  const local = JSON.parse(localStorage?.getItem("login"));

  const logedIn = local !== undefined ? local : isAuth;
  const location = useLocation();

  return logedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProductedRoutes;
