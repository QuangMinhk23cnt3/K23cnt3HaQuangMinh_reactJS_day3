import React, { useState } from 'react'

export default function HqmUseStateListObject() {
    // moc data
    const listStudent = [
        { hqmId: "001", hqmName: "Ha Quang Minh", hqmAge: 19, hqmClass: "K23CNT3" },
        { hqmId: "002", hqmName: "Trinh Tran Phuong Tuan", hqmAge: 27, hqmClass: "K23CNT69" },
        { hqmId: "003", hqmName: "Dach", hqmAge: 69, hqmClass: "K23CNT99" },
        { hqmId: "004", hqmName: "Ton Lai", hqmAge: 19, hqmClass: "K23CNT3" },
    ];
    // tao State vs hook
    const [hqmStudents, setHqmStudents] = useState(listStudent);
    // render data
    let hqmElement = hqmStudents.map((hqmItem, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{hqmItem.hqmId}</td>
                <td>{hqmItem.hqmName}</td>
                <td>{hqmItem.hqmAge}</td>
                <td>{hqmItem.hqmClass}</td>
                <td>
                    <button className="btn btn-success">Sua</button>
                    <button className="btn btn-primary">Xoa</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h3>Danh sách sinh viên</h3>
            <table border="1" width="99%">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>hqmID</th>
                        <th>hqmName</th>
                        <th>hqmAge</th>
                        <th>hqmClass</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {hqmElement}
                </tbody>
            </table>
        </div>
    )
}
