import React, { createContext } from 'react'
import B from './B'
const firstName=createContext()

export default function A() {
  return (
    <div>
        <firstName.Provider value="tushar">
        <B />
        </firstName.Provider>
        </div>
  )
}
export {firstName}
