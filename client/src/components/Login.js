import React, { useEffect, useState } from 'react'


import loginPhones from './loginPhones.png'

import { useNavigate } from "react-router-dom";

import '../App.css';

const Login = ({setCurrUser}) =>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   



    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
      };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };


    
    const login = async (userInfo, setCurrUser)=>{
      const url="http://localhost:3000/login"
      try{
          const response=await fetch(url, {
              method: "POST",
              headers: {
                  'content-type': 'application/json',
                  'accept': 'application/json'
              },
              body: JSON.stringify(userInfo)
          })
          const data=await response.json()
          
          if(!response.ok) 
            throw data.error
          localStorage.setItem("token", response.headers.get("Authorization"))
          setCurrUser(data)
          console.log(data)

          
           navigate('/')
          
         
      }catch(error){
         console.log("error", error)
      }
  }
    const handleSubmit = (e) => {
      e.preventDefault()
       
        const userInfo={
          "user":{ email: email, password: password }
        }
        login(userInfo, setCurrUser)
        navigate("/")
  
    }
    

    const handleClick = e => {
      e.preventDefault()
     navigate('/signup')
    }


    

    return(
        <div className='main-login'>

    
        <div className='loginPic'>
            <img src = {loginPhones} alt = "phones" />
        </div>

        <div className='form'>

            <h1></h1>

        <div> 
        <input onChange = {handleEmailChange} value = {email}
         placeholder = 'Email' type = "text" id = "emailInput"/>
        </div>

        <div>
        <input onChange = {handlePasswordChange} value = {password}
         placeholder = 'Password' type = "password" id = "passwordInput"/>
        </div>

        


        <button onClick={(e) => handleSubmit(e)} >Login</button>


        <div>Don't have an account?<a href="#signup" onClick={handleClick} >Signup</a> </div>
  
        </div>

        </div>
    );
}


export default Login