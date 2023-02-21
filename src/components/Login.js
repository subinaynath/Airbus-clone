import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Style.css"
import { signInwithGoogle } from './Firebase';


const Login = () => { 
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("name")){
      console.log("Already Login")
      navigate("/Search")
    };
  },[])

  
  const redirect=()=>{
    signInwithGoogle();
 
  }

  const hanelLogin = () => {
    // console.log("Handel Login")
    return redirect();
    // navigate("/Search")
    // console.log("Login clicked") 
  }
  return (
    <div className='login-container'>
      <h1 >WelCome To AirBus</h1>
      <h3>Pls Login To Continue...</h3>
      <button onClick={hanelLogin}>Login </button>
    </div>
  )
}

export default Login
