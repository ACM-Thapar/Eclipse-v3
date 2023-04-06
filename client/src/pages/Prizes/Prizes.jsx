import React from 'react';
import './Prizes.css';
import TracksBG from '../../assets/images/TracksBG.png';
import Track1 from '../../assets/images/Track1.svg';
import Track2 from '../../assets/images/Track2.svg';
import Track3 from '../../assets/images/Track3.svg';
import Track4 from '../../assets/images/Track4.svg';

const Prizes = () => {
  const hoverActivate = (id) => {
    const problemStatement = document.getElementById(`problem-statement-${id}`);
    problemStatement.style.top = 0;
  }
  const hoverDeactivate = (id) => {
    const problemStatement = document.getElementById(`problem-statement-${id}`);
    problemStatement.style.top = '-100%';
  }
  return (
    <div className='tracks-container'>
        
        {/* <img className='bottom-background' src={TracksBG} alt="" /> */}
        <div className="main-tracks-container">
            <p>PRIZES</p>
            <div className="track-box-container-1">
                <div className="track track-1">
                  <img src={Track1} alt="" />
                  <div className="track-name">THE BEST HACK</div>
                </div>
                <div className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">TRACK WINNERS</div>
                </div>
                <div className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">BEST FIRST YEAR HACK</div>
                </div>
                
            </div>
            <div className="track-box-container-2">
                <div className="track track-3">
                  <img src={Track3} alt="" />
                  <div className="track-name">BEST PRESENTATION</div>
                </div>
                <div className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST NO CODE HACK</div>
                </div>
                <div className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST BUSINESS SCOPE</div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">MOST USELESS HACK</div>
                </div>
                <div className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">MOST FUNNY HACK</div>
                </div>
                <div className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST PROJECT NAME</div>
                </div>
                <div className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST DOCUMENTATION</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prizes