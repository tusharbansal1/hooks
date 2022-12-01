import React, { useRef } from 'react'

export default function Ref() {
    const inputRef=useRef()
    function handleRef(){
        console.log(inputRef,'handleref')
        inputRef.current.focus()
        inputRef.current.style.color="red"
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleRef}>Click me</button>
    </div>
  )
}
