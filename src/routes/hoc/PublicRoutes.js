import React from "react";
import { Outlet } from "react-router-dom";
const PublicRoutes = (props) => {
  const { Component } = props;
  return (
    <>
      {Component}
      <Outlet />
    </>
  );
};

export default PublicRoutes;
