import { Square } from '../Square'
import React, { useState } from 'react'

const arr = ["1", "2", "3", "null", "5", "6","7", "8", "9"]


export function Board() {
    const [square, setSquare] = useState(arr);
    const [playerMove, setPlayerMove] = useState("");

    function chooseSquare(index) {
        if (square[index] === null) {
            square[index] = "X";
          }
          setPlayerMove(square[index])
        console.log(playerMove)
        setSquare([
            ...square.slice(0, index),
            playerMove,
            ...square.slice(index + 1),
        ]);

    }

    return (
        <div>
            <ul className="board">
                {square.map((item, index) => {
                    return (
                        <Square
                            key={index}
                            value={item}
                            onClick={()=>{chooseSquare(index)}}
                        />
                    );
                })}
            </ul>
        </div>
    );
}


/*
- Board
    - State
        - values => [null, null, null, ...]
    - Behaviour
        - function chooseSquare(index:for getting what square you choose)
    - Render
        - Squares in a 3x3 grid 
*/