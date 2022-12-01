import React ,{useState,useEffect} from 'react'

export default function Child({getItems}) {
    const [items,setItems]=useState([])
    useEffect(() => {
      setItems(getItems())
    },[getItems])
  return (
    <div>
        <ul>
        {items && items.map(item=>{
         return <li key={item}>{item}</li>
        })}
        
      </ul>
    </div>
  )
}
