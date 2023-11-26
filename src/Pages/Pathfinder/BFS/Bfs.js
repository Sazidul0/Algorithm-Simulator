import React, { useState, useEffect } from 'react';
import './PathfindingVisualizer.css';

const ROWS = 10;
const COLS = 10;

const Node = ({ row, col, isStart, isEnd, isWall, onMouseDown, onMouseEnter, onMouseUp }) => {
  const extraClassName = isStart ? 'node-start' : isEnd ? 'node-end' : isWall ? 'node-wall' : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
};

const PathfindingVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [startNode, setStartNode] = useState({ row: 3, col: 3 });
  const [endNode, setEndNode] = useState({ row: ROWS - 4, col: COLS - 4 });

  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    const initialGrid = [];
    for (let row = 0; row < ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < COLS; col++) {
        currentRow.push(createNode(row, col));
      }
      initialGrid.push(currentRow);
    }
    setGrid(initialGrid);
  };

  const createNode = (row, col) => {
    return {
      row,
      col,
      isStart: row === startNode.row && col === startNode.col,
      isEnd: row === endNode.row && col === endNode.col,
      isVisited: false,
      distance: Infinity,
      isWall: false,
      previousNode: null,
    };
  };

  const handleMouseDown = (row, col) => {
    if (isStartOrEndNode(row, col)) return;

    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;

    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const isStartOrEndNode = (row, col) => {
    return (
      (row === startNode.row && col === startNode.col) || (row === endNode.row && col === endNode.col)
    );
  };

  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.map((gridRow) =>
      gridRow.map((node) => ({
        ...node,
        isWall: node.isWall && node.row === row && node.col === col ? false : node.isWall,
      }))
    );
    return newGrid;
  };

  const visualizeBFS = () => {
    const visitedNodesInOrder = bfs(grid, startNode, endNode);
    animateBFS(visitedNodesInOrder);
  };

  const bfs = (grid, startNode, endNode) => {
    const visitedNodesInOrder = [];
    const queue = [grid[startNode.row][startNode.col]];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode === grid[endNode.row][endNode.col]) {
        return visitedNodesInOrder;
      }

      const neighbors = getNeighbors(currentNode, grid);
      for (const neighbor of neighbors) {
        if (!neighbor.isVisited && !neighbor.isWall) {
          neighbor.isVisited = true;
          neighbor.previousNode = currentNode;
          queue.push(neighbor);
          visitedNodesInOrder.push(neighbor);
        }
      }
    }

    return visitedNodesInOrder;
  };

  const getNeighbors = (node, grid) => {
    const neighbors = [];
    const { row, col } = node;

    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < ROWS - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < COLS - 1) neighbors.push(grid[row][col + 1]);

    return neighbors;
  };

  const animateBFS = (visitedNodesInOrder) => {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).classList.add('node-visited');
      }, 10 * i);
    }
  };

  return (
    <div className="pathfinding-visualizer">
      <button onClick={visualizeBFS}>Visualize BFS</button>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="grid-row">
            {row.map((node, colIdx) => (
              <Node
                key={colIdx}
                row={node.row}
                col={node.col}
                isStart={node.isStart}
                isEnd={node.isEnd}
                isWall={node.isWall}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseUp={handleMouseUp}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathfindingVisualizer;
