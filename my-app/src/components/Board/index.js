import { Square } from '../Square'
import React, { useState } from 'react'

let arr = [["null","null","null"],["null","null","null"],["null","null","null"]]


export function Board(props) {
    
    const [square, setSquare] = useState(arr)
  console.log(square)
    return (

     <p>{square}</p>, 

    <Square />
    )
}
