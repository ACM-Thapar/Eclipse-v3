import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <>
        <div className="header-container">
            <div className="left-header">
                <a href="/about">ABOUT</a>
                <a href="/">EVENTS</a>
                <a href="/">TIMELINE</a>
            </div>
            <div className="center-header">
                
            </div>
            <div className="right-header">
                <a href="/">CONTACT US</a>
                <a href="/">STORE</a>
                <a href="/">LOG IN</a>
            </div>
        </div>
    </>
  )
}

export default Header
