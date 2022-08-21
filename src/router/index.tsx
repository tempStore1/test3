import * as React from "react";
import type { RouteObject } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

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
    path: "/*",
    element: (
      <PrivateRoute path="main">
        <Main />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default BaseRouter;
