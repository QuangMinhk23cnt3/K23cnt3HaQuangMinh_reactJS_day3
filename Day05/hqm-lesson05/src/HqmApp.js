import React, { Component } from 'react'
import HqmFuncEvent1 from './components/HqmFuncEvent1';
import HqmClassCompEvent1 from './components/HqmClassCompEvent1';
import HqmFuncCompEventProps from './components/HqmFuncCompEventProps';
import HqmClassCompEventProps from './components/HqmClassCompEventProps';
import HqmClassCompEventState from './components/HqmClassCompEventState';
import HqmClassCompEventPostData from './components/HqmClassCompEventPostData';

class HqmApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      hqmNoiDung:"Chua co noi dung gi...",
    }
  }
  //Ham xu ly su kin khi component con chuyen du lieu len
  hqmHandleDataToApp = (content)=>{
    alert(content);
    this.setState({
      hqmNoiDung:content,
    });
  }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'>K23CNT3 - Ha Quang Minh - Event and Form</h1>
        <hr />
        <div>
          <h2>Function Component - Event</h2>
          <HqmFuncEvent1 />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event</h2>
          <HqmClassCompEvent1 />
        </div>
        <hr />
        <div>
          <h2>Function Component - Event; props</h2>
          <HqmFuncCompEventProps hqmRenderName="Ha Quang Minh" />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event; props</h2>
          <HqmClassCompEventProps hqmRenderTitle="Welcum to SayGex999" />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event; state</h2>
          <HqmClassCompEventState />
        </div>
        <hr />
        <div>
          <h1>{this.state.hqmNoiDung}</h1>
          <h2>Class Component - Event; Post Data to App</h2>
          <HqmClassCompEventPostData onHqmDataToApp={this.hqmHandleDataToApp} />
        </div>
      </div>
    )
  }
}

export default HqmApp;