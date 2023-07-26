import React from 'react'
import Logo from '../../images/logo.svg'
import './header.css'

const MyHeader = () => {
  return (
    <header>
        <div className="my-header">
            <img src={Logo} alt="huddle logo" className='logo' />
            <span className='logo-text'>Huddle</span>
        </div>
    </header>
  )
}

export default MyHeader