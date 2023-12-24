import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default MainLayout;
