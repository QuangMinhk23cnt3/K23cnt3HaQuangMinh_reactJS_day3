import React from 'react'

export default function HqmRenderArray() {
    const hqmNumbers = [10,20,30,40,50];
    const hqmElement = hqmNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {hqmElement}
    </div>
  )
}
