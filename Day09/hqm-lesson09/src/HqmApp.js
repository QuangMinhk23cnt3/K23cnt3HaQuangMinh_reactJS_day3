import React from 'react'
import HqmUseState from './components/HqmUseState'
import HqmUseStateListObject from './components/HqmUseStateListObject'
import HqmUseEffect1 from './components/HqmUseEffect1'

export default function HqmApp() {
  return (
    <div className='container border mt-3'>
      <h1> React Hook </h1>
      <hr />
      <HqmUseState />
      <hr />
      <HqmUseStateListObject />
      <hr />
      <HqmUseEffect1 />
    </div>
  )
}
