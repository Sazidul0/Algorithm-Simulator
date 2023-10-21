import React, { useState } from 'react';
import './DFS.css';

const numRows = 20;
const numCols = 20;
const delay = 100; // Adjust this value to control the visualization speed (in milliseconds)

const createEmptyGrid = () => {
    return Array.from({ length: numRows }, () => Array(numCols).fill(false));
};
//hello world
const DFS = () => {
    const [grid, setGrid] = useState(() => createEmptyGrid());

    const dfs = async (row, col) => {
        // Base case: Check if the cell is outside the grid or has already been visited.
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col]) {
            return;
        }

        // Mark the current cell as visited.
        const newGrid = [...grid];
        newGrid[row][col] = true;
        setGrid(newGrid);

        // Define the four possible movement directions: up, down, left, right.
        const directions = [
            [-1, 0], // Up
            [1, 0],  // Down
            [0, -1], // Left
            [0, 1],  // Right
        ];

        // Recursively visit adjacent cells with a delay
        for (const [dx, dy] of directions) {
            await new Promise(resolve => setTimeout(resolve, delay));
            dfs(row + dx, col + dy);
        }
    };

    const runDFS = async () => {
        // Start DFS from a specific cell (e.g., top-left corner).
        await dfs(10, 10);
    };

    const resetGrid = () => {
        setGrid(createEmptyGrid());
    };

    return (
        <div className='py-8 px-5'>
            <div className="grid">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`cell ${cell ? 'visited' : ''}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <button className='btn btn-neutral' onClick={runDFS}>Run DFS</button>
            <button className='btn ms-10 btn-neutral' onClick={resetGrid}>Reset</button>
        </div>
    );
};

export default DFS;