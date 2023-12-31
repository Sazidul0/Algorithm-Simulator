import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-xl pl-5">
                <a href="/progress-bar">ProgressBar</a>
              </li>
              <li className="text-xl pl-5">
                <a href="/">Home</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li className="text-xl pl-5">
                    <a href="/progress-bar">ProgressBar</a>
                  </li>
                  <li className="text-xl pl-5">
                    <a href="/">Home</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Algorithm Visualizer
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal">
            <li tabIndex={0}></li>
            <li className="text-xl">
              <a href="/sorting">Sorting</a>
            </li>
            <li className="text-xl">
              <a href="/searching">Searching</a>
            </li>
            <li className="text-xl">
              <a href="/pathfinder">Pathfinder</a>
            </li>
            <li className="text-xl">
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
