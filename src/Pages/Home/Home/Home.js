import React from "react";
import Card from "../Card/Card";
import Gif from "../Gif/Gif";
import useTitle from "../../../Hooks/UseTittle";
import ProgressBar from "../../ProgressBar/ProgressBar";

const Home = () => {
  return (
    <div>
      <Card></Card>
      <ProgressBar></ProgressBar>
      <Gif></Gif>
    </div>
  );
};

export default Home;
