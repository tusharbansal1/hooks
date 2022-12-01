import React, { useState,useMemo } from 'react'

export default function Memo() {
    const[countone,setCountone] = useState(0)
    const[counttwo,setCounttwo] = useState(0)
   function increment(){
        setCountone(countone + 1)
    }
    function decrement(){
        setCounttwo(counttwo - 1)
    }
   const isEven =  useMemo(() =>{
    for(let i=0;i<1000000000;i++){}
    return countone%2===0
   },
     [countone])
   
  return (
    <div>
        <button onClick={increment}>Count one {countone}</button> <br />
         {isEven?'Even':'Odd'}
        <br />
        <button onClick={decrement}>Count two {counttwo}</button>
    </div>
  )
}
