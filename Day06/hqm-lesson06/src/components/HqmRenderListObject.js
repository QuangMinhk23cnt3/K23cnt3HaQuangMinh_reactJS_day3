import React, { Component } from 'react'

class HqmRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            hqmStudents :[
                {hqmId:1,hqmName:"Ha Quang Minh", hqmAge:19},
                {hqmId:2,hqmName:"Quang Minh", hqmAge:20},
                {hqmId:3,hqmName:"Minh Quang", hqmAge:22},
                {hqmId:4,hqmName:"Trinh tran phuong tuan", hqmAge:21},
            ],
        }
    }


  render() {
    let {hqmStudents} = this.state;
        let hqmElement = hqmStudents.map((hqmItem)=>{
            return (
                <li>{hqmItem.hqmId} - {hqmItem.hqmName}</li>
            );
        })

        let hqmRenderElement = hqmStudents.map((hqmItem,index)=>{
            return (
                <tr key={index}>
                    <td>{hqmItem.hqmId}</td>
                    <td>{hqmItem.hqmName}</td>
                    <td>{hqmItem.hqmAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })

    return (
      <div>
        <h2>Danh sách sinh viên</h2>
                {hqmElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>HqmID</th>
                            <th>HqmcName</th>
                            <th>HqmAge</th>
                            <th>HqmAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {hqmRenderElement}
                    </tbody>
                </table>
      </div>
    )
  }
}

export default HqmRenderListObject;
