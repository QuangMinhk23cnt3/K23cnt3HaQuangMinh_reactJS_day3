import React, { Component } from 'react'

class HqmEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            hqmSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    hqmHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.hqmSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            hqmSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    hqmHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.hqmSelectCheckBox);
    }

  render() {
    return (
      <div className='alert alert-success'>
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.hqmSelectCheckBox.includes("Apple")}
              onChange={this.hqmHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.hqmSelectCheckBox.includes("Banana")}
              onChange={this.hqmHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.hqmSelectCheckBox.includes("Orange")}
              onChange={this.hqmHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.hqmHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default HqmEventForm4;