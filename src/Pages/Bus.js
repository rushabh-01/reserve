import React from 'react'
import Filter from '../Components/BusComponents/Filter'
import Calender from '../Components/BusComponents/Calender'
import BusList from '../Components/BusComponents/BusList'
import '../Css/Bus/Bus.css'

const Bus = () => {
  return (
    <div>
      <div className='flex parent'>
        <div className='child1'>
          <Filter/>
        </div>
        <div className='child2'>
          <Calender/>
          <BusList/>
          <BusList/>
          <BusList/>
          <BusList/>
          <BusList/>
        </div>
      </div>
    </div>
  )
}

export default Bus