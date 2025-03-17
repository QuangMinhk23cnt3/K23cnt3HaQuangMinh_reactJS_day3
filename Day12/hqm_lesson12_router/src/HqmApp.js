import React, { useState } from 'react'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import HqmNavNar from './components/HqmNavNar'
import HqmHome from './components/HqmHome'
import HqmAbout from './components/HqmAbout'
import HqmContact from './components/HqmContact'
import HqmListUser from './components/HqmListUser'
import HqmFormUser from './components/HqmFormUser'
import './App.css';

export default function HqmApp() {

  const listUsers = [
    {id:"001", hqmFullName:"Ha Quang Minh", hqmUserName:"MeMayYeuTao", hqmPass:"123456@"},
    {id:"002", hqmFullName:"Trinh Tran Phuong Tuan", hqmUserName:"ViTinhTuJ97", hqmPass:"123456@"},
    {id:"003", hqmFullName:"Jack", hqmUserName:"JackCam3.5", hqmPass:"123456@"},
  ]
  const [hqmUsers, setHqmUsers] = useState(listUsers)
  // Ham xu li si kien them moi
  const hqmHandleAdd = (hqmParam)=>{
    console.log("hqmHandleAdd:", hqmParam);
    
    setHqmUsers(prev =>{return [
      ...prev, 
      hqmParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo [ Ha Quang Minh - K23CNT3 ]</h1>
      <hr />
      <Router>
        <HqmNavNar />
        <Routes>
          <Route path='/' element = {<HqmHome />} />
          <Route path='/about' element = {<HqmAbout />} />
          <Route path='/contact' element = {<HqmContact />} />
          <Route path='/list-user' element = {<HqmListUser renderHqmUsers={hqmUsers}/>} />
          <Route path='/create-user' element = {<HqmFormUser onHqmAddNew={hqmHandleAdd}/>} />
        </Routes>
      </Router>
    </div>
  )
}
