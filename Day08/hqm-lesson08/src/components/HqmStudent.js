import React, { Component } from 'react'

export default class HqmStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    hqmHandleView = (hqmStudent)=>{
        // Chuyển lên HqmStudentList
        this.props.onHqmHandleView(hqmStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ HqmStudentList
    let {renderHqmStudent, key} = this.props;
    console.log("Student:",renderHqmStudent);
    return (
        <>
        <tr>
          <td>{key}</td>
          <td>{renderHqmStudent.hqmId}</td>
          <td>{renderHqmStudent.hqmStudentName}</td>
          <td>{renderHqmStudent.hqmAge}</td>
          <td>{renderHqmStudent.hqmGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.hqmHandleView(renderHqmStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
