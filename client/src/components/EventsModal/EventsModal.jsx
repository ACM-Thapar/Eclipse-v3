import React from 'react';
import './eventsModal.css';
import Hacklipse from '../../assets/images/bottomText.svg';
import Enigma from '../../assets/images/enigma.svg';
// import Hacklipse from '../../assets/images/bottomText.svg';
import { FaWindowClose } from 'react-icons/fa';
import Tracks from '../../pages/Tracks/Tracks';
import Prizes from '../../pages/Prizes/Prizes';

const EventsModal = ({ closeModal, eventNumber }) => {
  return (
    <div className="main-event-container" style={{ position: 'relative' }}>
      {/* <p>Hacklipse</p> */}
      {eventNumber === 1 ? <img className='hacklipse-logo' src={Enigma} alt="" />
      :
      (eventNumber === 2 ? <img className='hacklipse-logo' src={Hacklipse} alt="" />
      :
      <p className='flamingo-heading'>FLAMINGO</p>
      )
      }
      <div className="register-button">
        <button>Register Here</button>
      </div>
      <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi iure eius molestias fugiat ipsum veniam placeat perspiciatis accusantium! Exercitationem nemo, qui culpa esse eius excepturi, ipsam numquam eum dignissimos earum distinctio non? Laudantium? <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur facere reiciendis dolorum impedit dolorem cumque deleniti. Harum nihil tempora architecto. Quae porro aliquam veniam saepe atque, tempora dolorum harum sint? <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea tenetur quaerat voluptatibus veniam blanditiis qui nostrum architecto dolore ad, totam non quis. Non ducimus autem sint voluptatem! Vitae modi, debitis magnam repellat cumque ipsum temporibus. Quidem, autem suscipit? Consequuntur? <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus magnam quos in harum sequi minima commodi maxime tenetur quam corrupti. Velit officiis incidunt deleniti sint exercitationem! Quo fugit error nostrum.</p>
      </div>
      <div onClick={closeModal} className="close"><FaWindowClose size={40} color='#f14242' style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} /></div> 
      {eventNumber === 2 ? (<><div><Tracks /></div><div><Prizes /></div></>) : null}
      
    </div>
  )
}

export default EventsModal