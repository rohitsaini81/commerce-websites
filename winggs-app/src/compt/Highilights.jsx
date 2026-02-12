import React from 'react'
import { Highlight,Highlightimage2 } from './Images'
import "./css/Highilights.css"
export default function Highilights() {
    return (
        <>
            <div className='flex f-center'>
                <div className='High-w-70'><img className='template-0001' src={Highlight} alt="" /></div>
                <div>
                    <font>
                        WINGGS provide great resources to their clients.
                    </font>
                    <ul style={{ marginRight: 10 }} className="gray02">
                        <li>
                        <font>People.</font>    
                        </li>
                        <li>
                            <font>Processes.</font>
                        </li>
                        <li>
                            <font>Technology.</font>
                        </li>
                    </ul>
                    <li>
                        <font>We Utilize the best</font>
                    </li>
                </div>
            </div>
            <Discription001 />
            <Discription002 />
        </>
    )
}



function Discription001() {
    return (
        <div className='f-center template-0002 gray'>
            <font size={5}>
                Wing Global IT Services is a known trusted advisor with experienced team
                for customer support and IT Solutions. Join forces with us for an affordable IT development backed with our advanced frameworks, processes, knowledge, and technology.
            </font>
        </div>
    )
}

function Discription002() {
    return (
        <div className='f-center template-0002 f-coulmn yellow'>
            <font size={5}>
                Are you looking for the right technology partner to help you develop your business?
                At Winggs, we aim to take your company to the next level by offering the best services and technology,
                serving your demands in the most efficient way.
            </font>
            <font size={100}>
                We dream future, just Contact us!
            </font>
        </div>
    )
}



function Highilight2() {
  return (
    <div className='f-size'>
      <img src={Highlightimage2} alt="wait"/>
    </div>
  )
}

export  {Highilight2}

