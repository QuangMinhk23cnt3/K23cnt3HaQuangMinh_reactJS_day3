import React from 'react'

export default function HqmListUser({renderHqmUsers}) {

    const hqmElements = renderHqmUsers.map((hqmItem, index)=>{
        return (
        <>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{hqmItem. id}</td>
                <td>{hqmItem. hqmFullName}</td>
                <td>{hqmItem. hqmUserName}</td>
                <td>{hqmItem. hqmPass}</td>
            </tr>
        </>
        )
    })
  return (
    <div>
        <h2>Danh sach tai khoan</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {hqmElements}
            </tbody>
        </table>
    </div>
  )
}
