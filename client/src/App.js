import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate }
 from 'react-router-dom';

import './App.css';
import User from './components/User'
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';


const App=()=>{
  const [currUser, setCurrUser]=useState(null);
  const [anyUser, setAnyUser] = useState(null);
  const [token, setToken] = useState('');
  const navigate = useNavigate;

 
  
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={currUser? <MainPage currUser = {currUser}
         token = {token} setAnyUser = {setAnyUser} setCurrUser = {setCurrUser}/> : 
        <Login currUser = {currUser}
         setCurrUser = {setCurrUser} setToken = {setToken} />} />
        <Route path="/login" element={<Login currUser = {currUser}
        setCurrUser = {setCurrUser} />} />
        <Route path="/signup" element={<Signup currUser = {currUser}
        setCurrUser = {setCurrUser} />} />
        <Route path="/profile" element={<Profile user = {anyUser} currUser = {currUser}
         setAnyUser = {setAnyUser} setCurrUser/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}


export default App