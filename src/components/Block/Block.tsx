import React from 'react'
import { clsx } from "clsx";

interface Props {
    clicked: boolean;
    handleClick: (row: number, col: number) => void;
    row: number;
    col: number;
}

const Block: React.FC<Props> = ({ clicked, handleClick, row, col }) => {
    
    console.log('rerender')

    return (
        <div
            className={clsx(
                "border-green-800 border-2 w-8 h-8",
                clicked && "bg-gradient-to-br from-green-700 to-green-600"
            )}
            onClick={() => handleClick(row, col)}
        ></div>
    );
};

export default React.memo(Block);
