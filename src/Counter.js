import React, { useReducer } from 'react'
const initialstate={count:0}
const reducer = (state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'Increment':
            return {count:state.count + 1}
            case 'Decrement':
                return {count:state.count - 1}
                default:
                    return state
    }
}
export default function Counter() {
    const[state,dispatch]= useReducer(reducer,initialstate)
  return (
    <div>
        <button onClick={()=>dispatch({type:'Increment'})}>+</button>
        {state.count}
        <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
    </div>
  )
}
