import React ,{useState,useReducer} from 'react'
const initialstate={count:0}
const reducer =(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'DECREMENT':
            return {count:state.count - 1}
            case 'Increment':
                return {count:state.count + 1}
                default:
                    return state
    }
    

}
export default function Counter() {
    // const [counts,setCounts]=useState(0)
    const [state, dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
        {state.count}
        <button onClick={()=>dispatch({type:'Increment'})}>+</button>
    </div>
  )
}
