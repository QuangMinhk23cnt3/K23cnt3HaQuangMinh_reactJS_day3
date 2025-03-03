import React, { Component } from 'react'

export default class HqmClassCompEvent1 extends Component {
    // Ham xu ly su kien
    hqmEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    hqmEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name:"+name);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.hqmEventHandleClick1}>Button 1</button>
        <button className='btn btn-success mx-1' 
            onClick={()=>this.hqmEventHandleClick2("Quang Minh")}>Button 2</button>
      </div>
    )
  }
}
