import * as React from "react";
import type { RouteObject } from "react-router-dom";
const Home = React.lazy(() => import("@/pages/Home"));
const Other = React.lazy(() => import("@/pages/Other"));
const Waifu = React.lazy(() => import("@/pages/Waifu"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const BaseRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "other",
    element: <Other />,
    children: [],
  },
  {
    path: "waifu",
    element: <Waifu />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default BaseRouter;
