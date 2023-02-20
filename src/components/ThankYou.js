import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Style.css"

const ThankYou = () => {
    const navigate=useNavigate();
    return (
        <div className='thanks-container'>
            <h2>Thank You!! 😊😊 </h2>
            <h3>Your Booking is Confirmed 🤩🤩</h3>
            <button
            onClick={()=>navigate("/Search")}
            >Go To Home Page</button>
        </div>
    )
}

export default ThankYou
