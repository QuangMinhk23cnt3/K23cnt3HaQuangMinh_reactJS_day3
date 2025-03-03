import React, { Component } from 'react'

class HqmClassCompEventProps extends Component {
  // Ham xu ly su kien
  hqmEventHandleClick1 = ()=>{
    alert("Heloo...." + this.props.hqmRenderTitle);
  }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.hqmEventHandleClick1}>Button 1</button>
      </div>
    );
  }
}

export default HqmClassCompEventProps;