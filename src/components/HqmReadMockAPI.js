import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

export default function HqmReadMockApi() {
    // khoi tao state
    const [hqmListUser, hqmsetListUser] = useState([])
    // api
    const hqmApiOnline = "https://67da74ec35c87309f52c9812.mockapi.io/k23cnt1_haquangminh/hqm_users"
    // doc du lieu tu api bang axios
    useEffect(()=>{
        axios
            .get(hqmApiOnline)
            .then((hqm_respone)=>{
                hqmsetListUser(hqm_respone.data)
            })
            .catch((error)=>{
                console.log("Loi kia!!!");
            })
    },[])

    // view data
    const hqmElementUser = hqmListUser.map((hqm_item, index)=>{
        return (
            <tr>
                <td>{hqm_item.hqmId}</td>
                <td>{hqm_item.hqmFullName}</td>
                <td>{hqm_item.hqmAge}</td>
                <td>{hqm_item.hqmActive?"Hoat dong":"Khoa"}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sach</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Chuc nang</th>
                </tr>
            </thead>
            <tbody>
                {
                    hqmElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
