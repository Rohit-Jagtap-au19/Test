import React from 'react'
import header from '../header/header.css'
import img from '../Images/img8.jpg'

const Header = () => {
  return (
    <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          </div>
          <img id='Pic' src={img} alt="" />
          </div>
  )
}

export default Header