import React from 'react';
import './tracks.css';
import TracksBG from '../../assets/images/TracksBG.png';
import Track1 from '../../assets/images/Track1.svg';
import Track2 from '../../assets/images/Track2.svg';
import Track3 from '../../assets/images/Track3.svg';
import Track4 from '../../assets/images/Track4.svg';

const Tracks = () => {
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
            <p>TRACKS</p>
            <div className="track-box-container-1">
                <div onMouseEnter={() => hoverActivate(1)} onMouseLeave={() => hoverDeactivate(1)} className="track track-1">
                  <img src={Track1} alt="" />
                  <div className="track-name">Education</div>
                  <div id='problem-statement-1' className="problem-statement">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe sit nulla quod, cupiditate nobis sunt dicta animi quaerat quidem eius magni consequatur totam, nam beatae id libero. Officia quam accusantium perferendis. Minus voluptate odio non aperiam magnam possimus!
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(2)} onMouseLeave={() => hoverDeactivate(2)} className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">Social Issues</div>
                  <div id='problem-statement-2' className="problem-statement">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe sit nulla quod, cupiditate nobis sunt dicta animi quaerat quidem eius magni consequatur totam, nam beatae id libero. Officia quam accusantium perferendis. Minus voluptate odio non aperiam magnam possimus!
                  </div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div onMouseEnter={() => hoverActivate(3)} onMouseLeave={() => hoverDeactivate(3)} className="track track-3">
                  <img src={Track3} alt="" />
                  <div className="track-name">FinTech</div>
                  <div id='problem-statement-3' className="problem-statement">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe sit nulla quod, cupiditate nobis sunt dicta animi quaerat quidem eius magni consequatur totam, nam beatae id libero. Officia quam accusantium perferendis. Minus voluptate odio non aperiam magnam possimus!
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(4)} onMouseLeave={() => hoverDeactivate(4)} className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">Open Innovation</div>
                  <div id='problem-statement-4' className="problem-statement">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe sit nulla quod, cupiditate nobis sunt dicta animi quaerat quidem eius magni consequatur totam, nam beatae id libero. Officia quam accusantium perferendis. Minus voluptate odio non aperiam magnam possimus!
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tracks