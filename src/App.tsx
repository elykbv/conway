import { useState } from "react";
import "./App.css";
import Block from "./components/Block/Block";

function App() {
    const [grid, setGrid] = useState<boolean[][]>(
        Array(8)
            .fill(false)
            .map(() => Array(8).fill(false))
    );

    const handleClick = (row, col) => {
        grid[row][col] = !grid[row][col];
        setGrid([...grid]);
    };

    return (
        <>
            {grid.map((row, rowIndex) => (
                <div className="flex">
                    {row.map((cell, colIndex) => (
                        <Block clicked={cell} handleClick={handleClick} row={rowIndex} col={colIndex}/>

                    ))}
                </div>
            ))}
        </>
    );
}

export default App;
