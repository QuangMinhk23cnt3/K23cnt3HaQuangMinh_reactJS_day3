import React from 'react'

export default function HqmFuncCompEventProps(Hqmprops) {
    //Ham xu ly su kien
    const hqmHandleButtonClick1 = ()=>{
        alert("Du lieu tu props:" + Hqmprops.hqmRenderName);
        console.log("Xin chao:", Hqmprops.hqmRenderName);
    }

    const hqmHandleButtonClick2 = (param)=>{
        // Lay du lieu tu props
        alert("Du lieu tu props (Button 2 click):" + Hqmprops.hqmRenderName);
        // Du lieu tu tham so
        console.log('====================================');
        console.log("Hi:", param);
        console.log('====================================');
    }
  return (
    <div className='alert alert-info'>
        <button className='btn btn-primary mx-1'
            onClick={hqmHandleButtonClick1}>Button 1</button>
        
        <button className='btn btn-success mx-1' 
            onClick={()=>hqmHandleButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
