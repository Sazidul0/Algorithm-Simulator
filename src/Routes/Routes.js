import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProgressBar from "../Pages/ProgressBar/ProgressBar";
import Sorting from "../Pages/Sorting/Sorting";
import Searching from "../Pages/Searching/Searching";
import Pathfinder from "../Pages/Pathfinder/Pathfinder";

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
      {
        path: "/sorting",
        element: <Sorting></Sorting>,
      },
      {
        path: "/searching",
        element: <Searching></Searching>,
      },
      {
        path: "/pathfinder",
        element: <Pathfinder></Pathfinder>,
      },
    ],
  },
]);
