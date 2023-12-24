import { createBrowserRouter } from "react-router-dom";
import Landing from "../page/Landing";
import About from "../page/About";
import Post from "../page/Post";
import PostDetail from "../page/Post/PostDetail";

let route = [
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/post",
    Component: Post,
  },
  {
    path: "/post/:id",
    Component: PostDetail,
  },
];

export const router = createBrowserRouter(route);
