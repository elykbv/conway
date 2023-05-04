import { useState } from "react";
import "./App.css";
import Block from "./components/Block/Block";
import Row from "./components/Row/Row";

function App() {
    const [grid, setGrid] = useState<boolean[][]>(
        Array(8)
            .fill(false)
            .map(() => Array(8).fill(false))
    );

    const handleClick = (row: number, col: number): void => {
        grid[row][col] = !grid[row][col];
        setGrid([...grid]);
    };

    return (
        <>
            {grid.map((row, rowIndex) => (
                    <Row>
                    {row.map((cell, colIndex) => (
                        <Block
                            clicked={cell}
                            handleClick={handleClick}
                            row={rowIndex}
                            col={colIndex}
                        />
                    ))}
                </Row>
            ))}
        </>
    );
}

export default App;
