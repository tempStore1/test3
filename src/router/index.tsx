import * as React from "react";
import type { RouteObject } from "react-router-dom";
const Home = React.lazy(() => import("@/pages/Home"));
const Main = React.lazy(() => import("@/pages/Main"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const BaseRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/main",
    element: <Main />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default BaseRouter;
