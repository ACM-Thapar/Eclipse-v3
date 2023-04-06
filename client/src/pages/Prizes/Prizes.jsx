import React from 'react';
import './Prizes.css';
import TracksBG from '../../assets/images/TracksBG.png';
import Track1 from '../../assets/images/Track1.svg';
import Track2 from '../../assets/images/Track2.svg';
import Track3 from '../../assets/images/Track3.svg';
import Track4 from '../../assets/images/Track4.svg';

const Prizes = () => {
  const hoverActivate = (id) => {
    const problemStatement = document.getElementById(`prizes-statement-${id}`);
    problemStatement.style.top = 0;
  }
  const hoverDeactivate = (id) => {
    const problemStatement = document.getElementById(`prizes-statement-${id}`);
    problemStatement.style.top = '-100%';
  }
  return (
    <div className='prizes-container'>
        
        {/* <img className='bottom-background' src={TracksBG} alt="" /> */}
        <div className="main-prizes-container">
            <p>PRIZES</p>
            <div className="track-box-container-1">
                <div onMouseEnter={() => hoverActivate(1)} onMouseLeave={() => hoverDeactivate(1)} className="track track-1">
                  <img src={Track1} alt="" />
                  <div className="track-name">THE BEST HACK</div>
                    <div id='prizes-statement-1' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(2)} onMouseLeave={() => hoverDeactivate(2)} className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">TRACK WINNERS</div>
                    <div id='prizes-statement-2' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div onMouseEnter={() => hoverActivate(3)} onMouseLeave={() => hoverDeactivate(3)} className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">BEST FIRST YEAR HACK</div>
                    <div id='prizes-statement-3' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(4)} onMouseLeave={() => hoverDeactivate(4)} className="track track-3">
                  <img src={Track3} alt="" />
                  <div className="track-name">BEST PRESENTATION</div>
                    <div id='prizes-statement-4' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div onMouseEnter={() => hoverActivate(5)} onMouseLeave={() => hoverDeactivate(5)} className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST NO CODE HACK</div>
                    <div id='prizes-statement-5' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(6)} onMouseLeave={() => hoverDeactivate(6)} className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST BUSINESS SCOPE</div>
                    <div id='prizes-statement-6' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div onMouseEnter={() => hoverActivate(7)} onMouseLeave={() => hoverDeactivate(7)} className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">MOST USELESS HACK</div>
                    <div id='prizes-statement-7' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(8)} onMouseLeave={() => hoverDeactivate(8)} className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">MOST FUNNY HACK</div>
                    <div id='prizes-statement-8' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div onMouseEnter={() => hoverActivate(9)} onMouseLeave={() => hoverDeactivate(9)} className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST PROJECT NAME</div>
                    <div id='prizes-statement-9' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(10)} onMouseLeave={() => hoverDeactivate(10)} className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">BEST DOCUMENTATION</div>
                    <div id='prizes-statement-10' className="problem-statement">
                      TO BE DISCLOSED
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prizes