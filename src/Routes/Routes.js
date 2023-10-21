import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProgressBar from "../Pages/ProgressBar/ProgressBar";
import Searching from "../Pages/Searching/Searching";
import Pathfinder from "../Pages/Pathfinder/Pathfinder";
import Sorting from "../Pages/Sorting/Sorting/Sorting";
import BubbleSorting from "../Pages/Sorting/BubbleSorting/BubbleSorting";

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
        path: "/bubble-sorting",
        element: <BubbleSorting></BubbleSorting>,
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
