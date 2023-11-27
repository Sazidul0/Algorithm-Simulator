import React from "react";
import sort from "../../asset/sort.png";
import DFS from "../../asset/DFS.png";
import search from "../../asset/search.png";

const ProgressBar = () => {
  return (
    <div className="hero min-h-screen bg-base-143048">
      <div class="grid grid-cols-3 gap-10">
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
          <figure className="w-96 h-120">
            <img src={`${sort}`} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="text-2xl p-5">Sorting algorithms</h3>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">
                <a href="/sorting">See More</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
          <figure className="w-96 h-96">
            <img src={`${DFS}`} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="text-2xl">Path Finding Algorithms</h3>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">
                <a href="/pathfinder">See More</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
          <figure className="w-96 h-96">
            <img src={`${search}`} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="text-2xl">Searching Algorithms</h3>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">
                <a href="/searching">See More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
