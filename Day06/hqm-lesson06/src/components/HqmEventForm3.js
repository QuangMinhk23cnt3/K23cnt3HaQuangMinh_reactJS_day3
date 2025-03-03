import React, { Component } from 'react'

class HqmEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            hqmGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    hqmHandleChange = (event)=>{
        this.setState({
            hqmGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    hqmHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.hqmGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-warning'>
        <h2> Form input - Radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='hqmGioiTinh'  id='hqmNam' className='mx-2'
                            value="Nam" checked={this.state.hqmGioiTinh === 'Nam'} onChange={this.hqmHandleChange}/> 
                            <label htmlFor='hqmNam'>Nam</label>  
                        <input type='radio' name='hqmGioiTinh'  id='hqmNu' className='mx-2'
                            value="Nữ" checked={this.state.hqmGioiTinh === 'Nữ'} onChange={this.hqmHandleChange}/> 
                            <label htmlFor='hqmNu'>Nữ</label>  
                        <input type='radio' name='hqmGioiTinh' id='hqmKhac' className='mx-2'
                            value="Khác" checked={this.state.hqmGioiTinh === 'Khác'} onChange={this.hqmHandleChange}/> 
                            <label htmlFor='hqmKhac'>Khác</label>
                    </div>
                    <button onClick={this.hqmHandleSubmit}>Submit</button>
                </form>
      </div>
    )
  }
}

export default HqmEventForm3;
