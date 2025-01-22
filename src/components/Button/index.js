import React from 'react'

import './style.css'

const Button = ({name, href, onClick, target = '_self', className = ''}) => {
  return (
    <a
      className={`button ${className}`}
      href={href}
      target={target}
      onClick={onClick}>
        {name}
    </a>
  )
}

export default Button