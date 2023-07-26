import React from 'react'
import MyHeader from '../header/MyHeader'
import './landing_page.css'
import Illustration from '../../images/illustration-mockups.svg'

const LandingPage = () => {
  return (
    <div className="main-container">
      <MyHeader />
      <main>
        <div className="left-container">
          <img src={Illustration} alt="illustration" />
        </div>
        <div className="right-container">
          <p>Build The Community</p>
          <p>Your fans will love</p>
          <p>Huddle reimagines the way we build communities. You have a voice, but so does your audience. Create connections wit your users as you engage in genuine discussion.</p>
          <button className='register-button'>Register</button>
        </div>

      </main>
    </div>
  )
}

export default LandingPage