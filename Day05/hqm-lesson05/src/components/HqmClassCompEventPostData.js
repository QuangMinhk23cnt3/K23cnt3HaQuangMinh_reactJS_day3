import React, { Component } from 'react'

class HqmClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }
    
    //Ham xu ly su kien
    hqmEventHandleClick = ()=>{
        // chuyen du lieu len App thong qua props
        this.props.onHqmDataToApp("Du lieu tu Component con - HqmClassCompEventPostData ");
    }
    
    render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-warning' onClick={this.hqmEventHandleClick}>
                    Button 1 - Chuyen du lieu len App</button>
            </div>
        )
    }
}

export default HqmClassCompEventPostData;