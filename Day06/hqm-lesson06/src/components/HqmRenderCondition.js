import React, { Component } from 'react'
import HqmLoginControl from './HqmLoginControl';

class HqmRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        hqmHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        hqmHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
        
  render() {
    let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <HqmLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button className="btn btn-primary" onClick={this.hqmHandleLogout}>Logout</button>
                        :<button className="btn btn-primary" onClick={this.hqmHandleLogin}>Login</button>
                }
            </div>
        );
  }
}

export default HqmRenderCondition;
