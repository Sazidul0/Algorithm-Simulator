import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Particle from "./Pages/Particle/Particle";

const App = () => {
  return (
    <>
      <Particle></Particle>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
