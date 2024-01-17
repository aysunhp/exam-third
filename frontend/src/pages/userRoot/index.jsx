import React from "react";
import Navbar from "../../components/navbar/index";
import { Outlet } from "react-router-dom";

const UserRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserRoot;
