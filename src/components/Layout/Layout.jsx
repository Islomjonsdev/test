import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="px-[15px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
