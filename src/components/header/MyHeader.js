import React from 'react'
import Logo from '../../images/logo.svg'

const MyHeader = () => {
  return (
    <header>
        <div className="my-header">
            <img src={Logo} alt="huddle logo" />
            <p>Huddle</p>
        </div>
    </header>
  )
}

export default MyHeader