import { useState, useCallback } from "react";
import "./App.css";
import Block from "./components/Block/Block";
import Row from "./components/Row/Row";

function App() {
    const [gen, setGen] = useState<number>(0);
    const [grid, setGrid] = useState<boolean[][]>(
        Array(8)
            .fill(false)
            .map(() => Array(8).fill(false))
    );

    const handleClick = useCallback((row: number, col: number): void => {
        grid[row][col] = !grid[row][col];
        setGrid([...grid]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGenerationChange = (change: any): void => {
        switch (change) {
            case "increase":
                setGen((prev) => prev + 1);
                break;
            case "decrease":
                setGen((prev) => prev - 1);
                break;
        }
    };

    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 h-screen w-screen flex flex-col justify-center items-center">
            <div className="mb-10 text-green-500 flex gap-4 items-center">
                <button
                    className="bg-opacity-30 bg-white"
                    onClick={() => handleGenerationChange("decrease")}
                >
                    -
                </button>
                {gen}
                <button
                    className="bg-opacity-30 bg-white"
                    onClick={() => handleGenerationChange("increase")}
                >
                    +
                </button>
            </div>
            <div>
                {grid.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <Block
                                key={`${rowIndex}-${colIndex}`}
                                clicked={cell}
                                handleClick={handleClick}
                                row={rowIndex}
                                col={colIndex}
                            />
                        ))}
                    </Row>
                ))}
            </div>
        </div>
    );
}

export default App;
