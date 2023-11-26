import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PathfindingVisualizer from './src/PathfindingVisualizer/PathfindingVisualizer';


const Pathfinder = () => {
  return <div>
    <Tabs className="px-5 py-3">
      <TabList>
        <Tab><h2 className="text-lg font-bold">DFS</h2></Tab>
        <Tab><h2 className="text-lg font-bold">BFS</h2></Tab>
        <Tab><h2 className="text-lg font-bold">Dijkstra</h2></Tab>
        {/* <Tab>Bellman-Ford algorithm</Tab> */}
      </TabList>

      <TabPanel className={'dfs'}>
      <h1 className="text-5xl text-center font-bold pt-8">Depth First Search</h1>
      <PathfindingVisualizer></PathfindingVisualizer>
        <div>
          <h2 className="text-4xl font-bold py-5">DFS Algorithm</h2>
          <p>Depth-First Search (DFS) is a graph traversal algorithm that explores a graph or tree by starting at a given source node and visiting its adjacent nodes, proceeding deeper into the structure before backtracking. It's a fundamental algorithm used in various applications, such as finding connected components, topological sorting, and solving puzzles like mazes.</p>
          <h4 className="text-xl pt-4 font-semibold">Time Complexity: <span className="font-bold">O(V+E)</span> </h4>
          <p className="ps-5">V is the number of vertices in the graph. <br />
            E is the number of edges in the graph.</p>
          <h3 className="mt-8 text-2xl font-bold">Uses of DFS</h3>
          <ul className="list-disc pl-8">
            <li>Graph Traversal</li>
            <li>Pathfinding</li>
            <li>Topological Sorting</li>
            <li>Connected Components</li>
            <li>Cycle Detection</li>
            <li>Strongly Connected Components</li>
            <li>Solving Puzzles and Games</li>
            <li>Decision Trees</li>
          </ul>
        </div>

      </TabPanel>
      <TabPanel className={'bfs'}>
        <h1 className="text-5xl text-center font-bold pt-8">Breadth First Search</h1>
      <PathfindingVisualizer></PathfindingVisualizer>
        <div>
          <h2 className="text-4xl font-bold py-5">BFS Algorithm</h2>
          <p>Breadth-First Search (BFS) is a graph traversal algorithm that explores a graph by visiting all the nodes at the current depth before moving on to nodes at the next depth. It systematically explores a graph, starting from a given source node, and visits nodes layer by layer. BFS is widely used in various applications, including shortest path finding, network analysis, and more. </p>
          <h4 className="text-xl pt-4 font-semibold">Time Complexity: <span className="font-bold">O(V+E)</span> </h4>
          <p className="ps-5">V is the number of vertices in the graph. <br />
            E is the number of edges in the graph.</p>
          <h3 className="mt-8 text-2xl font-bold">Uses of BFS</h3>
          <ul className="list-disc pl-8">
            <li>Shortest Path Finding</li>
            <li>Pathfinding</li>
            <li>Network Analysis</li>
            <li>Maze Solving</li>
            <li>Connected Components</li>
            <li>Web Crawling</li>
            <li>Memory Allocation and Management</li>
            <li>Puzzle Solving</li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel className={'dijkstras'}>
      <h1 className="text-5xl text-center font-bold pt-8">Dijkstra's</h1>
      <PathfindingVisualizer></PathfindingVisualizer>
        <div>
          <h2 className="text-4xl font-bold py-5">Dijkstra Algorithm</h2>
          <p>Dijkstra's algorithm is a widely used algorithm for finding the shortest path from a single source vertex to all other vertices in a weighted, directed or undirected graph. It was developed by Dutch computer scientist Edsger W. Dijkstra in 1956 and is commonly used in network routing protocols, transportation networks, and various applications where finding the shortest path is essential.</p>
          <h4 className="text-xl pt-4 font-semibold">Time Complexity: </h4>When implemented with a binary heap or Fibonacci heap, the time complexity is typically <span className="font-bold">O(V^2)</span> for dense graphs and <span className="font-bold"> O((V + E) * log(V)) </span> for sparse graphs.
          <p className="ps-5">V is the number of vertices in the graph. <br />
            E is the number of edges in the graph.</p>
          <h3 className="mt-8 text-2xl font-bold">Uses of Dijkstra</h3>
          <ul className="list-disc pl-8">
            <li>Network Routing</li>
            <li>GPS and Navigation</li>
            <li>Transportation Planning</li>
            <li>Robotics and Autonomous Vehicles</li>
            <li>Flight Path Planning</li>
            <li>Natural Language Processing</li>
            <li>Supply Chain and Logistics</li>
            <li>Emergency Response and Disaster Management</li>
          </ul>
        </div>
      </TabPanel>
      
      {/* <TabPanel>
        <h2>Bellman-Ford algorithm</h2>
      </TabPanel> */}
    </Tabs>
  </div>;
};

export default Pathfinder;
