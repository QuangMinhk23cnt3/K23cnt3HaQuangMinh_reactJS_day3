import React from 'react'
import HqmHome from './components/HqmHome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HqmNavBar from './components/HqmNavBar';
import HqmListUser from './components/HqmListUser';
import HqmCreateUsers from './components/HqmCreateUsers';
import HqmEditUser from './components/HqmEditUser';
import './styles.css';

export default function HqmApp() {
  return (
    <div>
      <h1>Toi co 500 trieu diem suc manh</h1>
      <hr />
      <Router>
        <HqmNavBar />
        <Routes>
          <Route path="/" element={<HqmHome />} />
          <Route path="/users" element={<HqmListUser />} />
          <Route path="/create" element={<HqmCreateUsers />} />
          <Route path="/edit/:id" element={<HqmEditUser />} />
        </Routes>
      </Router>
    </div>
  )
}
