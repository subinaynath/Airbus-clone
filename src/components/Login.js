import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Style.css"


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='login-container'>
        <h1 >WelCome To AirBus</h1>
        <h3>Pls Login To Continue...</h3>
        <button onClick={() => {
        navigate("/Search")
        // console.log("Login clicked")
      }}>Login </button>
    </div>
  )
}

export default Login
