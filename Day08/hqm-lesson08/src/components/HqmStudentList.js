import React, { Component } from 'react'
import HqmStudent from './HqmStudent';

export default class HqmStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    hqmHandleView = (hqmStudent)=>{
        // Chuyển dữ liệu lên hqmApp
        this.props.onHqmHandleView(hqmStudent);
    }

  render() {
    // lấy dữ liệu trong props từ HqmApp chuyển xuống
    let {renderHqmStudents} = this.props;
    console.log("List:",renderHqmStudents);
    
    // chuyển dữ liệu vào HqmStudent để hiển thị
    let hqmElementStudent = renderHqmStudents.map((hqmItem,index)=>{
        return <HqmStudent key={index} renderHqmStudent={hqmItem} onHqmHandleView={this.hqmHandleView} />
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {hqmElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
