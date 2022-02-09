import { Board } from '../Board'
import React, {useState} from 'react'
// import { calcaulateWinner } from '../App';
const arr = [null, null, null, null, null, null, null, null, null];

export function Game({calculateWinner}) {
    const [board, setBoard] = useState(arr);
    const [isXTurn, setIsXTurn] = useState(true);
    // const winner = calculateWinner(board);
    const currentPlayer = isXTurn ? "X" : "O";

    function handleClickSquare(index) {
        // if (winner || board[index]) {
        //     return;
        // }

        setBoard([
            ...board.slice(0, index),
            currentPlayer,
            ...board.slice(index + 1),
        ]);
        setIsXTurn(!isXTurn);
    }

    return (
        <Board squares={board} onSelectSquare={handleClickSquare}
        />
    
    )
}
