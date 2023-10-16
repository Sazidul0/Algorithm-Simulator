import React from "react";
import Card from "../Card/Card";
import Gif from "../Gif/Gif";
import useTitle from "../../../Hooks/UseTittle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Card></Card>
      <Gif></Gif>
    </div>
  );
};

export default Home;
