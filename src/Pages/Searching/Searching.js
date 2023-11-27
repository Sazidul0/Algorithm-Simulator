// Searching.jsx
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Searching.css";

const Searching = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const [target, setTarget] = useState("");
  const [linearSearchSteps, setLinearSearchSteps] = useState([]);
  const [binarySearchSteps, setBinarySearchSteps] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetSearch = () => {
    setLinearSearchSteps([]);
    setBinarySearchSteps([]);
    setSearchResult("");
    setTarget("");
  };

  const linearSearch = async () => {
    const steps = [];
    for (let i = 0; i < array.length; i++) {
      steps.push(i);
      setLinearSearchSteps([...steps]);
      await delay(1000); // Adjust the delay as needed
      if (array[i] === parseInt(target, 10)) {
        setSearchResult(`Linear Search: Found at index ${i}`);
        return;
      }
    }
    setSearchResult("Linear Search: Not found");
  };

  const binarySearch = async () => {
    const sortedArray = [...array];
    sortedArray.sort((a, b) => a - b);
    const steps = [];

    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      steps.push(mid);
      setBinarySearchSteps([...steps]);
      await delay(1000); // Adjust the delay as needed

      if (sortedArray[mid] === parseInt(target, 10)) {
        setSearchResult(`Binary Search: Found at index ${array.indexOf(sortedArray[mid])}`);
        return;
      }

      if (sortedArray[mid] < parseInt(target, 10)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setSearchResult("Binary Search: Not found");
  };

  return (
    <div className="search-container">
      <h2 className="text-3xl font-bold">Searching Algorithms</h2>
      <label>
        Target:
        <input
          type="number"
          className="bg-base-300 rounded px-4 py-2 ms-2"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
      </label>
      <button className="btn btn-primary" onClick={resetSearch}>Reset</button>
      <br /><br />

      <Tabs>
        <TabList>
          <Tab > <h2 className="text-xl text-center font-bold pt-1">Linear Search</h2></Tab>
          <Tab> <h2 className="text-xl text-center font-bold pt-1">Binary Search</h2></Tab>
        </TabList>

        <TabPanel>

          <div className="search-steps-container">
            <h3 className="text-xl font-bold ">Linear Search Steps:</h3>
            <br />
            <ul>
              {array.map((element, index) => (
                <li
                  key={index}
                  className={`step ${linearSearchSteps.includes(index) ? "linear-search-step" : ""} ${element === parseInt(target, 10) ? "searched" : ""
                    }`}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn btn-primary" onClick={linearSearch}>Start Linear Search</button>
          </div>

          <div className="search-result">{searchResult}</div>
          <div>
            <h2 className="text-4xl font-bold py-5">Linear Search</h2>
            <p>Linear search, also known as sequential search, is a straightforward searching algorithm that looks for a particular element in a list by checking each element in the list until a match is found or the entire list has been searched. It works well for small datasets but becomes inefficient for larger datasets compared to more advanced algorithms like binary search
            </p> <h4 className="text-xl pt-4 font-semibold">Time Complexity: <span className="font-bold">O(N)</span> </h4>
            <p className="ps-5">N is the number of elements.</p>
            <h3 className="mt-8 text-2xl font-bold">Uses of BFS</h3>
            <ul className="list-disc pl-8">

              <li>Sequential Data Access</li>
              <li>Unordered Lists</li>
              <li>Small Datasets</li>
            </ul>
          </div>
        </TabPanel>

        <TabPanel>

          <div className="search-steps-container">
            <h3 className="text-xl font-bold">Binary Search Steps:</h3>
            <ul>
              {array.map((element, index) => (
                <li
                  key={index}
                  className={`step ${binarySearchSteps.includes(index) ? "binary-search-step" : ""} ${element === parseInt(target, 10) ? "searched" : ""
                    }`}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn btn-primary" onClick={binarySearch}>Start Binary Search</button>
          </div>
          <div className="search-result">{searchResult}</div>
          <div>
            <h2 className="text-4xl font-bold py-5">Binary Search</h2>
            <p>Binary Search is a searching algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated, and the search continues on the remaining half until the target value is found or the entire array is searched.</p>
            <h4 className="text-xl pt-4 font-semibold">Time Complexity: <span className="font-bold">O(logN)</span> </h4>
            <p className="ps-5">N is the number of elements.</p>
            <h3 className="mt-8 text-2xl font-bold">Uses of BFS</h3>
            <ul className="list-disc pl-8">

              <li>File System Search</li>
              <li>Searching</li>
              <li>Data Retrieval</li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>

      <div className="mt-12"></div>
    </div>
  );
};

export default Searching;
