import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProgressBar from "../Pages/ProgressBar/ProgressBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/progress-bar",
        element: <ProgressBar></ProgressBar>,
      },
    ],
  },
]);
