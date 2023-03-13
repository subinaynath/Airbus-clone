import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Style.css"

const Search = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]) // congtain All flight
  const [result, setResult] = useState([]); // Filterd Flight
  const [isshow, setIshow] = useState(false);

  const [alert, setAlert]=useState(false);
  const [alert2,setAlert2]=useState(false);
  // const context=useContext(context);

  useEffect(() => {
    if(!localStorage.getItem("name")){
      console.log("Already Login")
      navigate("/")
    };
    fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights`)
      .then(response => response.json())
      .then((data) => setFlights(data))
      .catch(error => console.log(error))

    console.log(flights)
  }, [])

  const searchHandel = () => {
    if (!from || !to) {
      // alert("Please Fill The Destination");
      if(!from ){
        setAlert(true);
      }
      if(!to){
        setAlert2(true);
      }
    }
    else {
      setAlert(false);
      setAlert2(false);
      setResult(
        flights.filter(
          (flight) => {
            return flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase()
          }
        )
      )
      console.log(result);
      setIshow(true);
    }
    
  }

  return (
    <div className='search-container'>
      <h3 className='title'>Let the Journey begin</h3>
      <from className='search'>
        <div className='f-holder'>
          <label htmlFor='From' >From</label>
          <input required className={alert?"red":"black"} type="text" id='From' placeholder='From' value={from} 
          onChange={(e) => {
            setAlert(false);
            setFrom(e.target.value)
            }} />
          {alert?<div className='warning'>From is Required</div>:<></>}
        </div>

        <div className='f-holder'>
          <label htmlFor='To'>To</label>
          <input required className={alert2?"red":"black"} type="text" id='To' placeholder='To' value={to} 
          onChange={(e) => {
            setAlert2(false);
            setTo(e.target.value)
            }} />
          {alert2?<div className='warning'>To is Required</div>:<></>}
        </div>

        <div className='f-holder'>
          <label htmlFor='Depart'>Depart</label>
          <input type="date" id='Depart' placeholder='Depart' />
        </div>

        <div className='f-holder'>
          <label htmlFor='Return'>Return</label>
          <input type="date" id='Return' placeholder='Return' />
        </div>

        <button
          onClick={() => {
            console.log("search Clicked")
            searchHandel();
          }}
        >Search Flights</button>
      </from>
      {isshow ? <div className='flights-result'>
        {result &&
          result.map((flight, index) => (
            <div key={index}>
              <div className='flight-route'>{flight.from} - {flight.to}</div>
              <div className='flight-time'>Time: {flight.departure.departureTime} | Date: {flight.departure.departureDate}</div>
              <div className='flight-airline'>Airline: {flight.airlineName}</div>
              <div className='flight-airline'>Via: {flight.via}</div>
              <div className='flight-price'>Price: ${flight.price}</div>
              <button
                onClick={() => {navigate("/Payment",{state:{id:1,name:flight.price}})}}
              >Book</button>
            </div>
          ))
        }
      </div> : <></>}
    </div>
  )
}

export default Search
