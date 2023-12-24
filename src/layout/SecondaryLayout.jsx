import React from "react";
import { Outlet } from "react-router-dom";

function SecondaryLayout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
    </>
  );
}

export default SecondaryLayout;
