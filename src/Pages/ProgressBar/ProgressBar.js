import React from "react";
import useTitle from "../../Hooks/UseTittle";

const ProgressBar = () => {
  useTitle("progress");
  return <progress className="progress w-56"></progress>;
};

export default ProgressBar;
