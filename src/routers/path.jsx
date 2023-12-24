import { createBrowserRouter } from "react-router-dom";
import Landing from "../page/Landing";
import About from "../page/About";
import Post from "../page/Post";
import PostDetail from "../page/Post/PostDetail";
import MainLayout from "../layout/MainLayout";

let route = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },
];

export const router = createBrowserRouter(route);
