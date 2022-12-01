import React, { createContext } from 'react'
import B from './B'
const firstName=createContext()
const lname=createContext()

export default function A() {
  return (
    <div>
        <firstName.Provider value="tushar">
          <lname.Provider value="bansal">
        <B />
        </lname.Provider>
        </firstName.Provider>
        </div>
  )
}
export {firstName, lname}
