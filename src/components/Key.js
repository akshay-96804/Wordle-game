import { useContext } from "react";
import React from 'react'
import { AppContext } from "../App";
import { generateWordSet } from "./Words";

const Key = ({keyVal,bigKey}) => {

    const {onSelect,onEnter,onDelete} = useContext(AppContext);


    const selectLetter = ()=>{
        if(keyVal === "ENTER"){            
            onEnter();
        }
        else if(keyVal === "DELETE"){
            onDelete();
        }
        else{
            onSelect(keyVal);
        }
    }
  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key