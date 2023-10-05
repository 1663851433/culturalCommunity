import { createBrowserRouter } from "react-router-dom";
import Home from "@/views/Home/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
