import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "./Context";

const useAuth = () => {
  const auth = useContext(UserContext);
  return auth && auth.login;
};

const ProductedRoutes = () => {
  const isAuth = useAuth();
  console.log(isAuth);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProductedRoutes;
