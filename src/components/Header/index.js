import React from 'react'

import Button from '../Button'

import logoAluraflix from '../../assets/Logo.png'
import './style.css'

export const Header = () => {
  const path = window.location.pathname
  const isSelected = (buttonPath) => path === buttonPath ? 'selected' : ''

  return (
    <header id='header'>
      <a href="/">
        <img className='header-img' src={logoAluraflix} alt="Logo Aluraflix" />
      </a>
      <div className='header-buttons'>
        <Button name='Home' className={isSelected('/')} href='/' />
        <Button name='Novo filme' className={isSelected('/filme')} href='/filme' />
      </div>
    </header>
  )
}

export default Header