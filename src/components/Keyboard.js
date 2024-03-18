import React from 'react'
import Key from './Key';

const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div>
        <div className="line1">
            {keys1.map((key)=>{
                return <Key keyVal={key}></Key>
            })}
        </div>
        <div className="line2">
            {keys2.map((key)=>{
                return <Key keyVal={key}></Key>
            })}
        </div>
        <div className="line3">
            <Key keyVal={"ENTER"} bigKey></Key>
            {keys3.map((key)=>{
                return <Key keyVal={key}></Key>
            })}
            <Key keyVal={"DELETE"} bigKey></Key>
        </div>
    </div>
  )
}

export default Keyboard