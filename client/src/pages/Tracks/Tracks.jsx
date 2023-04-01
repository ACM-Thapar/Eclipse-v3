import React from 'react';
import './tracks.css';
import TracksBG from '../../assets/images/TracksBG.png';
import Track1 from '../../assets/images/Track1.svg';
import Track2 from '../../assets/images/Track2.svg';
import Track3 from '../../assets/images/Track3.svg';
import Track4 from '../../assets/images/Track4.svg';

const Tracks = () => {
  return (
    <div className='tracks-container'>
        <div className="center-header-1"></div>
        {/* <img className='bottom-background' src={TracksBG} alt="" /> */}
        <div className="main-tracks-container">
            <p>TRACKS</p>
            <div className="track-box-container-1">
                <div className="track track-1">
                  <img src={Track1} alt="" />
                  <div className="track-name">Lorem Ipsum</div>
                </div>
                <div className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">Lorem Ipsum</div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div className="track track-3">
                  <img src={Track3} alt="" />
                  <div className="track-name">Open Innovation</div>
                </div>
                <div className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">Agriculture</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tracks