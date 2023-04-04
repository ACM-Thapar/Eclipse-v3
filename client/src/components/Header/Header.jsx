import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
import AuthModal from '../AuthModal/AuthModal'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const modal = useRef(null);

  const toggleModal = () => {
    if (modal.current.style.display === "flex") {
      modal.current.style.display = "none";
    }
    else {
      modal.current.style.display = "flex";
    }
  }

  const handleClickOutside = (e) => {
    if (e.target === modal.current) {
      toggleModal();
    }
  }
  
  return (
    <>
        <div className="header-container">
            <div className="left-header">
                <Link to="/about">ABOUT</Link>
                <Link to="/events">EVENTS</Link>
                
            </div>
            <div className="center-header"></div>
            <div className="right-header">
                <Link to="/timeline">TIMELINE</Link>
                <Link to="/sponsors">SPONSORS</Link>
            </div>
        </div>
        <div onClick={handleClickOutside} ref={modal} className="modal-container1">
          <AuthModal />
        </div>
    </>
  )
}

export default Header
