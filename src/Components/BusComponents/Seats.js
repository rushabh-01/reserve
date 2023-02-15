import React from 'react'
import "../../Css/Bus/Seats.css"

const Seats = () => {
  return (
    <>
    <div className='seat-section'>
      <h2 className="seat-position">Upper Seat</h2>
      <div className="seats grid grid-cols-7">
        <button type="button"></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button className="down-seat"></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <h2 className="seat-position mt-5">Lower Seat</h2>
      <div className="seats grid grid-cols-7">
      <button type="button"></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button className="down-seat"></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      </div>
    </>
  )
}

export default Seats