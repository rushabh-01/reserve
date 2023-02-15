import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/Bus/SelectSeats.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Seats from "../BusComponents/Seats.js"

const SelectSeats = () => {
  return (
    <>
    <div className='block' style={{padding:25}}>
    <h3 className="seat-heading">Select Seats</h3>
    <div className='flex justify-between items-center'>
        
        <div className="select-row">
          <h3>Seat Price </h3>
          <div className='flex items-baseline selectbox'>
          <input type="radio" id="All" name="All" value=""></input>
          <p htmlFor="All">All</p>
          </div>
          <div className='flex items-baseline selectbox'>
          <input type="radio" id="All" name="All" value=""></input>
          <p htmlFor="All">$699</p>
          </div>
          <div className='flex items-baseline selectbox'>
          <input type="radio" id="All" name="All" value=""></input>
          <p htmlFor="All">$899</p>
          </div>
          <div className='flex items-baseline selectbox'>
          <input type="radio" id="All" name="All" value=""></input>
          <p htmlFor="All">$1199</p>
          </div>
          <div className='flex items-baseline selectbox'>
          <input type="radio" id="All" name="All" value=""></input>
          <p htmlFor="All">$1599</p>
          </div>
          
          
        </div>
      <div className='seat-status'>
        <div className='flex items-center'>
        <FontAwesomeIcon icon={faCircle} />
          <p htmlFor="600">Vacant Seats</p>
        </div>
        <div className='flex items-center'>
        <FontAwesomeIcon icon={faCircle} className="dark" />
          <p htmlFor="600">Reserved Seats</p>
        </div>
        <div className='flex items-center'>
        <FontAwesomeIcon icon={faCircle} className="darkBlue" />
          <p htmlFor="600">Your Selection</p>
        </div>
      
      
      </div>

      
    </div>
      <div className='flex justify-between mt-10'>
        <Seats/>
      <div className="Boarding">
        <h3>
          <b> Bording & Dropping</b>
        </h3>
        <h4>Chennai</h4>
        <p>
          Central Rail station | Chennai
          <span className="Boarding-time">22:45</span>
        </p>
        <h4>Bangalore</h4>
        <p>
          Mysore | Banglore <span className="Boarding-time">06:20</span>
        </p>
        <hr />
        <p>
          Serial No: <span className="Boarding-time">7</span>
        </p>
        <hr />
        <h4>Fair Details</h4>
        <p>
          Amount <span className="Boarding-time">INR 750.0</span>
        </p>
        <p>Includes all fair charges</p>
        <button className="payment-button">
          <Link  className="payment-btn-color">Proceed To Book</Link>
        </button>
      </div>
      </div>
    </div>
        
    </>
  )
}

export default SelectSeats