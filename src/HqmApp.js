import React from 'react'
import HqmReadApiLocal from './components/HqmReadApiLocal'
import HqmReadMockAPI from './components/HqmReadMockAPI'
import HqmCreateMockAPI from './components/HqmCreateMockAPI'

export default function HqmApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1>ReactJS - API - Ha Quang Minh</h1>
      <hr/>
      <HqmReadApiLocal />
      <hr />
      <h2>Doc du lieu tu MockApi (mockapi.io)</h2>
      <HqmReadMockAPI />
      <hr />
      <HqmCreateMockAPI />
      <hr />
    </div>
  )
}
