import React, { Component } from 'react'

class HqmClassComp extends Component {
  constructor(props){
    super(props);
    //khoi tao state
    this.state = {
        fullName:"Minh",
        age:19,
        phone:"096969996"
    }
  }
  //Ham xu ly su kien
  changeInfo = (ev)=>{
    // cap nhat state
    this.setState({
        fullName:"Ha Quang Minh"
    });
  }
    render() {
    return (
      <div className='alert alert-info'>
        <h2>Trình bày dữ liệu từ state</h2>
                <p>info state ( fullName ): {this.state.fullName}</p>
                <p>info state ( age ): {this.state.age}</p>
                <p>info state ( phone ): {this.state.phone}</p>

                <hr/>
                <button className='btn btn-success' onClick={this.changeInfo}>Change Info</button>
                <hr/>
                <h3>Lấy dữ liệu từ Props</h3>
                <p>Name: {this.props.renderName}</p>
               
                <p>FullName:{ this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
                <p>Age:{ this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>Phone:{ this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
      </div>
    )
  }
}

export default HqmClassComp;
