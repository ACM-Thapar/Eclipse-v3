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
                  The education track's primary objective is to find innovative ways to enhance educational outcomes and broaden educational access. Participants can work on initiatives that are designed to address issues with teaching, learning and educational access. This track inspires participants to use technology to design more open, interesting, and successful learning environments.
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(2)} onMouseLeave={() => hoverDeactivate(2)} className="track track-2">
                  <img src={Track2} alt="" />
                  <div className="track-name">Social Issues</div>
                  <div id='problem-statement-2' className="problem-statement">
                  The goal of this track is to create novel responses to problems in society.   Initiatives that address particular issues with sustainability, education, climate change, and poverty can be addressed. Inspire people to use technology to improve society and make a difference in their local areas.
                  </div>
                </div>
            </div>
            <div className="track-box-container-2">
                <div onMouseEnter={() => hoverActivate(3)} onMouseLeave={() => hoverDeactivate(3)} className="track track-3">
                  <img src={Track3} alt="" />
                  <div className="track-name">FinTech</div>
                  <div id='problem-statement-3' className="problem-statement">
                  The goal of this track is to create cutting-edge solutions to enhance financial services and results. Participants can work on initiatives that address certain financial issues, such as blockchain-based solutions, digital banking, investment management, and personal finance management. This track's objective is to inspire participants to use technology to develop more readily available and effective financial services for both individuals and corporations.
                  </div>
                </div>
                <div onMouseEnter={() => hoverActivate(4)} onMouseLeave={() => hoverDeactivate(4)} className="track track-4">
                  <img src={Track4} alt="" />
                  <div className="track-name">Open Innovation</div>
                  <div id='problem-statement-4' className="problem-statement">
                  This track focuses on creating creative responses to problems that the other tracks do not address. Participants can work on projects that use any technology they choose to attempt to tackle any problem of their choosing. It aims  to inspire participants to think creatively and to develop ideas that could radically alter current industries or develop new ones.
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tracks