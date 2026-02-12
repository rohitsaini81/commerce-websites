import React from 'react'
import { HOME1, HOME2 } from './Images'
import "./css/Home.css"


function Home() {
  return (
  //  <div className="flex-column">
     <div className='just-flex home'>
      <div className='home-images hmg1'><img src={HOME1} alt="" /></div>
      <div className='home-images hmg2'><img src={HOME2} alt="" /></div>
    </div>
   /* </div> */

  )
}



function HomeFooter() {
  return (
    <div className='homeFooter'>
      <font className="white">
      We believe in utilizing the best People, Processes, and Technology. 
      </font>
    </div>
  )
}




export default Home
export {HomeFooter}
