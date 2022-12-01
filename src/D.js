import React, { useContext } from 'react'
import { firstName } from './A'

export default function D() {
  const name=  useContext(firstName)
  return ( 
    <div>
        {name}
    </div>
  )
}
