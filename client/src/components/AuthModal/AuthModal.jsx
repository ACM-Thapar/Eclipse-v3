import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import './AuthModal.css'
import modal from '../../assets/images/modal.svg'
import Login from './Login'


function AuthModal() {


  return (
    <>

        <div className="modal-container">
            <div className="modal-bg">
                <div className="modal-img">
                    <img src={modal} alt="" />
                </div>
                <div className="modal-title">
                    Login
                </div>
                <div className="login-form">
                    <Login />
                </div>
            </div>
            
        </div>

    </>
  )
}

export default AuthModal