import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './Pages/User/Container/User';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Authorize/Login';
import Signup from './Authorize/Register';
import Admin from './Pages/Admin/Container/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/home' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
);

