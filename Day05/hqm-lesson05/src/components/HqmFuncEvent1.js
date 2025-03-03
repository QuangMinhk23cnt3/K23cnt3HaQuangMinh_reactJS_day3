import React from 'react'

export default function HqmFuncEvent1() {

    // Ham xu ly su kien
    const hqmEventButton1Click = ()=>{
        alert('Button 1 - Clicked');
    };

    const hqmEventButton2Click = ()=>{
        alert('Button 2 - Clicked');
    };

    const hqmEventButton3Click = (name)=>{
        alert("Name:" + name)
    }
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={hqmEventButton1Click()}>
            Button 1
            </button> */}
        <button className='btn btn-primary mx-1' onClick={hqmEventButton2Click}>
            Button 2
            </button>
        {/* <button className='btn btn-success' onClick={hqmEventButton3Click("Quang Minh")}>
            Button 3
            </button> */}
        <button className='btn btn-success mx-1' onClick={()=>hqmEventButton3Click("Ha Quang Minh")}>
            Button 4
            </button>
    </div>
  );
}

