import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function HqmReadApiLocal() {
    // tao state 
    const [hqmListUser, setHqmListUser] = useState([])
    // doc du lieu tu api local va set cho hqmlistuser
    const apiUrl = "http://localhost:3001/users"
    // lay danh sach tu apiUrl
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((hqmRespone) => {
                setHqmListUser(hqmRespone.data)
            })
            .catch((error) => {
                console.log("Loi");
            })
    },[])
    return (
        <div>
            <h2>Doc du lieu tu API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hqmListUser.map((hqmItem, index)=>{
                            return (
                                <tr>
                                    <td>{hqmItem.id}</td>
                                    <td>{hqmItem.fullName}</td>
                                    <td>{hqmItem.age}</td>
                                    <td>{hqmItem.class}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
