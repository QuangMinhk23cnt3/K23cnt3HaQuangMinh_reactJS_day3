import React, { Component } from 'react'

class HqmClassCompEventState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hqmFullName: "Ha Quang Minh",
      hqmAge: 18,
    }
  }

  //Ham xu ly su kien
  hqmEventHandleClick1 = () => {
    //Lay du lieu trong state
    alert("FullName: " + this.state.hqmFullName + "\nAge: " + this.state.hqmAge);
  }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-danger' onClick={this.hqmEventHandleClick1}>
          Button 1 - Du lieu trong state</button>
      </div>
    )
  }
}

export default HqmClassCompEventState;
