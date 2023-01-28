import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import './AuthModal.css'
import modal from '../../assets/images/modal.svg'
import Login from './Login'
import Signup from './Signup'

function AuthModal() {
    const [login, setLogin] = React.useState(true);

  return (
    <>

        <div className="modal-container">
            <div className="modal-bg">
                <div className="modal-img">
                    <img src={modal} alt="" />
                </div>
                <div className="modal-title">
                    Create Account
                </div>
                <div className="login-form">
                    {login ? <Login login setLogin={setLogin} /> : <Signup login setLogin={setLogin} />}
                </div>
            </div>
            
        </div>

    </>
  )
}

export default AuthModal