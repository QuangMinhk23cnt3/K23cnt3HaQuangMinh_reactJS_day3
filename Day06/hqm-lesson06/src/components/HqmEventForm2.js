import React, { Component } from 'react'

class HqmEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hqmcourse: 'CSS'
        };
    }
    //ham xu ly su kien khi thay doi khoa hoc
    hqmHandleChange = (event) => {
        this.setState(
            {
                hqmcourse: event.target.value
            }
        );
    }
    hqmHandleSubmit = (event) => {
        alert('Khoa hoc da chon khi submit:' + this.state.hqmcourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                        <select name='hqmcourse' id='hqmcourse'
                            value={this.state.hqmcourse}
                            onChange={this.hqmHandleChange} >
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'CSS3'}>CSS3</option>
                            <option value={'Javascript'}>Javascript</option>
                            <option value={'Jquery'}>Jquery</option>
                            <option value={'Bootstrap'}>Bootstrap</option>
                        </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.hqmHandleSubmit}>Click here</button>
                </form>
            </div>
        )
    }
}

export default HqmEventForm2;
