import React, { Component } from 'react'

class HqmEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            hqmName:'Minh',
            hqmAge:19,
            hqmGender:'Male',
            hqmCourse:'CSS'
        }
    }

    // Hàm xử lý sự kiện change
    hqmHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    hqmHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.hqmName + "\n" + this.state.hqmAge);

        // Chuyển dữ liệu trên form lên App component (HqmApp);
        this.props.onHqmHandleSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='hqmName'>Student Name:</label>
                        <input type='text' name='hqmName' id='hqmName' 
                            value={this.state.hqmName}
                            onChange={this.hqmHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='hqmAge'>Student Age:</label>
                        <input type='text' name='hqmAge' id='hqmAge' 
                            value={this.state.hqmAge}
                            onChange={this.hqmHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='hqmGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='hqmGender' id='hqmMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.hqmGender === 'Male'}
                                onChange={this.hqmHandleChange} />
                            <label htmlFor='hqmMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='hqmGender' id='hqmGender' className='mx-2'
                                value={'Female'}
                                checked={this.state.hqmGender === 'Female'}
                                onChange={this.hqmHandleChange} />
                            <label htmlFor='hqmFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='hqmGender' id='hqmNone' className='mx-2'
                                value={'None'}
                                checked={this.state.hqmGender === 'None'}
                                onChange={this.hqmHandleChange} />
                            <label htmlFor='hqmNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='hqmCourse'>
                            <select name='hqmCourse' id='hqmCourse' 
                                    value={this.state.hqmCourse}
                                    onChange={this.hqmHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.hqmHandleSubmit}>Submit</button>
                </form>
      </div>
    )
  }
}

export default HqmEventForm5;
