import React, { Component } from 'react'
import HqmEventForm1 from './components/HqmEventForm1';
import HqmEventForm2 from './components/HqmEventForm2';
import HqmEventForm3 from './components/HqmEventForm3';
import HqmEventForm4 from './components/HqmEventForm4';
import HqmEventForm5 from './components/HqmEventForm5';
import HqmRenderCondition from './components/HqmRenderCondition';
import HqmRenderArray from './components/HqmRenderArray';
import HqmRenderListObject from './components/HqmRenderListObject';

class HqmApp extends Component {
  // Hàm xử lý nhận dữ liệu từ form student
  hqmHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <HqmEventForm1 />
        <HqmEventForm2 />
        <HqmEventForm3 />
        <HqmEventForm4 />
        <HqmEventForm5 onHqmHandleSubmit={this.hqmHandleSubmitForm}/>

        <HqmRenderCondition />
        <HqmRenderArray />

        <HqmRenderListObject />
      </div>
    )
  }
}

export default HqmApp;
