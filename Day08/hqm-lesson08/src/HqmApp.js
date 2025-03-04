import React, { Component } from 'react'
import HqmControl from './components/HqmControl';
import HqmStudentList from './components/HqmStudentList';
import HqmForm from './components/HqmForm';

export default class HqmApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      hqmStudents:[
        {hqmId:"SV001",hqmStudentName:"Ha Quang Minh",hqmAge:19,hqmGender:"Nam",hqmBirthday:"02/06/2005",hqmBirthPlace:"HN", hqmAddress:"999 Say Gex"},
        {hqmId:"SV002",hqmStudentName:"Nguyen Khanh Phong",hqmAge:56,hqmGender:"Nữ",hqmBirthday:"06/09/1969",hqmBirthPlace:"HN", hqmAddress:"Trung quốc"},
        {hqmId:"SV003",hqmStudentName:"Trinh Tran Phuong Tuan",hqmAge:27,hqmGender:"Nam",hqmBirthday:"12/4/1997",hqmBirthPlace:"HN", hqmAddress:"Trung Quốc"},
        {hqmId:"SV004",hqmStudentName:"Jack",hqmAge:27,hqmGender:"Nam",hqmBirthday:"12/4/1997",hqmBirthPlace:"Zimbabue", hqmAddress:"Zimbabue"},
      ],
      hqmStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  hqmHandleView = (hqmStudent)=>{
    this.setState({
      hqmStudent:hqmStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.hqmStudent);
    return (
      <div>
        <h1 className='text-center'>Ha Quang Minh - K23CNT3 - MiniProject</h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <HqmControl  />
                {/* danh sách sinh vien  */}
                <HqmStudentList  renderHqmStudents={this.state.hqmStudents} onHqmHandleView={this.hqmHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <HqmForm  renderHqmStudent = {this.state.hqmStudent}/>
            </div>
          </div>
        </section>
      </div>
    );  
  }
}
