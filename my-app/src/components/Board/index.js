import { Square } from '../Square'
import React from 'react'

export function Board({squares, onSelectSquare}) {
  return (
    <div className="board">
      {squares.map((value, index) => {
        return (
          <Square
            key={index}
            value={value}
            onClick={()=>{onSelectSquare(index)}}
          />
        );
      })}
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