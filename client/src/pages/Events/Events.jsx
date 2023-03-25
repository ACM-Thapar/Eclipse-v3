import React, { Suspense } from 'react';
import './events.css';
import background from '../../assets/images/eventsBackground.png';
import Menu from '../../components/Menu/Menu.jsx';
import bottomText from '../../assets/images/bottomText.svg';

const Events = () => {
  return (
    <Suspense>
        <div className='events-container'>
            <div className="center-header-1"></div>
            <img className='bottom-background' src={background} alt="" />
            <div className="heading">EVENTS</div>
            <div className="menu">
                <Menu />
            </div>
            <div className="event-name">
                <img src={bottomText} alt="" />
            </div>
        </div>
    </Suspense>
  )
}

export default Events