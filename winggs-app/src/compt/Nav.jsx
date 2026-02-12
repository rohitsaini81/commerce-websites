import React from 'react'
import './css/Nav.css'
import LOGO from './Images'
export default function Nav() {
  return (
    <div className='just-flex navbar whitenav'>
    <div className='logo flex-left' style={{marginLeft:10}}><a href="/"><img src={LOGO} style={{height:50,width:50}} alt="LOGO" /></a>
    </div>
      <ul className='just-flex p-1 w-half'>
        <li className='m-auto'><a href="/">HOME</a></li>
        <li className='m-auto'><a href="/">ABOUT US</a></li>
        <li className='m-auto'><a href="/">SERVICES</a></li>
        <li className='m-auto'><a href="/">COUSES</a></li>
        <li className='m-auto'><a href="/">BLOG</a></li>
        <li className='m-auto'><a href="/">CARRER</a></li>
        <li className='m-auto' style={{marginRight:20}}><a href="/">CONTACT US</a></li>
      </ul>
    </div>
  )
}
