import React from 'react'

import './style.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer id='footer'>
        <img className='footer-logo' src={logo}/>
    </footer>
  )
}

export default Footer