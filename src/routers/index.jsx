import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./path";

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
