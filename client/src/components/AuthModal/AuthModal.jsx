import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import './AuthModal.css'
import modal from '../../assets/images/modal.svg'

function AuthModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

        <div className="modal-container">
            <div className="modal-bg">
                <img src={modal} alt="" />
            </div>
            <div className="modal-title">
                Login
            </div>
        </div>

    </>
  )
}

export default AuthModal