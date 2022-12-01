import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [countone,setCountone]=useState(0)
    const [counttwo,setCounttwo]=useState(0)
     const getItems = useCallback(()=>{
        console.log(counttwo+1,counttwo-1)
        for(let i=1;i<10000000;i++){}
        console.log('getItems')
        return [counttwo+1,counttwo-1]
    },[counttwo])
    
  return (
    <div>
        <button onClick={()=>setCountone(countone +1)}>Count one : {countone}</button>
        <button onClick={()=>setCounttwo(counttwo +1)}>Count two: {counttwo}</button>
        <Child getItems={getItems} />
    </div>
  )
}
