import React from "react";

const Card = () => {
  return (
    <div className="hero my-10 bg-base-143048">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif/240px-Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif"
          className="rounded-lg shadow-2xl"
        />
        <div className="mt-20">
          <h1 className="text-5xl font-bold">
            Visualizing the Magic of Algorithms
          </h1>
          <p className="py-6">
            Algorithm Visualization: Unveil the intricate world of code through
            captivating visualizations. Delve into the elegance of algorithms,
            gaining insights into their inner workings. An immersive journey for
            all, it uncovers the beauty hidden within lines of code, making
            computational logic accessible and captivating.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
