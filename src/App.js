import React , {useEffect, useState} from 'react'
import A from './A'
import Counter from './Counter'

function App() { 

  const [content,setContent]=useState('posts')
  const[count,setCount]=useState(0)
  const[items,setItems]=useState([])

  useEffect(() => {
    console.log("ComponentDidMount")
  }, [])
  
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/'+content)
  .then(response => response.json())
  .then(json => setItems(json))

    console.log("ComponentDidUpdate")
    return()=>{
      console.log("Unmount")
    }
  },[content])  

  return (
    <div className="App">
      <A />
      <Counter />
      <button onClick={()=>setCount(count + 1)}>Count {count}</button>
      <button onClick={()=>setContent('posts')}>Posts</button>
      <button onClick={()=>setContent('users')}>Users</button>
      <button onClick={()=>setContent('comments')}>Comments</button>
      <h1>{content}</h1>
      <ul>
        {items && items.map(item=>{
         return <li key={item.id}>{item.id}</li>
        })}
        
      </ul>
    </div>
   
  );
}

export default App;
