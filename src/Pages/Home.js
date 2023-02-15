import React from 'react'
import Accomplishment from '../Components/HomeComponents/Accomplishment'
import Banner from '../Components/HomeComponents/Banner'
import Review from '../Components/HomeComponents/Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Accomplishment/>
      <Review/>
    </div>
  )
}

export default Home