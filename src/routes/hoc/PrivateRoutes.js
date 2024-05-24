import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_PATHS } from "../routesPath";
import { Outlet } from "react-router-dom";
const PrivateRoutes = (props) => {
  const { Component, isAuthenticated } = props;
  return isAuthenticated ? (
    <>
      {Component}
      <Outlet />
    </>
  ) : (
    <Navigate to={ROUTE_PATHS.home} />
  );
};

export default PrivateRoutes;
