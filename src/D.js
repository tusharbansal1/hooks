import React, { useContext } from 'react'
import { firstName ,lname } from './A'

export default function D() {
  const name=  useContext(firstName)
  const lastname=useContext(lname)
  return ( 
    <div>
        {name} {lastname}
    </div>
  )
}
