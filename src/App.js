import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import DashBoard from './DashBoard/DashBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<Navigate to='/dashboard' replace={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
