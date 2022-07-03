import type { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";
import Other from "@/pages/Other";
import Waifu from "@/pages/Waifu";
import NotFound from "@/pages/NotFound";

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
