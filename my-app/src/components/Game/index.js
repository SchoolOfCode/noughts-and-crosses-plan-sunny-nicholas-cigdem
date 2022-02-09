import { Board } from '../Board'
import React, {useState} from 'react'
import { calculateWinner } from "../../helper";
const arr = [null, null, null, null, null, null, null, null, null];

export function Game() {
    const [board, setBoard] = useState(arr);
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = calculateWinner(board);
    const currentPlayer = isXTurn ? "X" : "O";

    function handleClickSquare(index) {
        if (winner || board[index]) {
            return;
        }

        setBoard([
            ...board.slice(0, index),
            currentPlayer,
            ...board.slice(index + 1),
        ]);
        setIsXTurn(!isXTurn);
    }

    return (<div>        
     <Board squares={board} onSelectSquare={handleClickSquare} />
     <h3>{winner ? "Winner: " + winner : "Next Player: " + currentPlayer}</h3>
    </div>
 
    
    )
}
