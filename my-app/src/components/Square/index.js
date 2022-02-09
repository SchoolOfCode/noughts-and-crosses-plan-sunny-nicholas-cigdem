import React from 'react'

export function Square({value, onClick}) {
    
    return (
        <button onClick={onClick} className="square">
            {value}
        </button>
    );
}


/* 
- Square
    - Props
        - value => X, O, null
        - onClick
    - render
        - box => X, O, empty 
*/