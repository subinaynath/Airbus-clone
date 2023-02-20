import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Style.css"
import Login from './Login'
import Search from './Search'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentPage from './PaymentPage'
import ThankYou from './ThankYou'


const Display = () => {
  return (
    
    < div className="hero">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Payment' element={<PaymentPage/>}/>
          <Route path='/Thank-you' element={<ThankYou/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Display



