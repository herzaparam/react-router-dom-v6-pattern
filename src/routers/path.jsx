import { createBrowserRouter } from "react-router-dom";
import Landing from "../page/Landing";
import About from "../page/About";

let route = [
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/about",
    Component: About,
  },
];

export const router = createBrowserRouter(route);
