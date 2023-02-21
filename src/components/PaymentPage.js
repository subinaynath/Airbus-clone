import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Style.css"

const PaymentPage = () => {
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [card,setCard]=useState();
    const [cvv,setCvv]=useState();
    const [exDate,setExDate]=useState();

    useEffect(()=>{
        if(!localStorage.getItem("name")){
          console.log("Already Login")
          navigate("/")
        };
      },[])

    const paymentHandler=()=> {
        if(!card || !name || !cvv || !exDate) alert("Please fill all the payment details!!");
        else {
            navigate("/Thank-you");
        }
    }


    return (
        <div className='payment-page-container'>
            <div className='payment-page'>
                <h3>Enter Your Payment Details</h3>
                <form>
                    <input onChange={(e)=>setName(e.target.value)}
                    required value={name} type="name" placeholder="Card Holder's name" />

                    <input onChange={(e)=>setCard(e.target.value)}
                    required value={card} type="number" max="9999999999999999" placeholder="Card Number" />

                    <input onChange={(e)=>setCvv(e.target.value)}
                    required value={cvv} type="tel" maxLength="3" placeholder='CVV' />
                    <div>
                        <label htmlFor='ex-date'>Expiry Date:-</label>
                        <input onChange={(e)=>setExDate(e.target.value)}
                        required value={exDate} type="tel" id="ex-date" maxLength="5"  placeholder='MM/YY'/>
                    </div>
                    <button type='submit'
                    onClick={paymentHandler}
                    >Proceed to payment</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentPage
