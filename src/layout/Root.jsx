import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../componests/NavBar.jsx/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
