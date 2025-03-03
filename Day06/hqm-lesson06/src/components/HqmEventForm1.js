import React, { Component } from 'react'

class HqmEventForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hqmStudentName: 'Quang Minh'
        }
    }
    //ham xu ly su kien tren textbox thay doi
    hqmHandleChange = (event) => {
        //cap nhat lai state
        this.setState({
            hqmStudentName: event.target.value,
        })
    }
    // khi submit form, lay du lieu va hien thi
    hqmHandleSubmit = (ev) => {
        alert('Xin Chao:' + this.state.hqmStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form onSubmit={this.hqmHandleSubmit}>
                    <label htmlFor='hqmStudentName'>
                        <input type='text' name='hqmStudentName' id='hqmStudentName'
                            value={this.state.hqmStudentName}
                            onChange={this.hqmHandleChange}/>
                    </label>
                    <button className='btn btn-primary'>Click Here</button>
                </form>
            </div>
        )
    }
}

export default HqmEventForm1;
