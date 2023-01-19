import React from 'react'
import './Home.css'
import bg3 from '../../assets/images/bg1.svg'
import cloud1 from '../../assets/images/cloud1.svg'
import cloud2 from '../../assets/images/cloud2.svg'
import cloud3 from '../../assets/images/cloud3.svg'
import cloud4 from '../../assets/images/cloud4.svg'
import buildings from '../../assets/images/buildings.svg'

function Home() {
  return (
    <>
      <div className="main-container">
        <div className="main-container-bg">
          
        </div>
        <div className="main-containersidebg">
          
        </div>
        <div className="main-heading">
          <h1>Eclipse</h1>
        </div>
        <div className="building-container">
          
        </div>
        <div className="clouds-container">
          <div className="sub-cloud1">
            <img src={cloud1} alt="cloud1" />
          </div>
          <div className="sub-cloud2">
            <img src={cloud2} alt="cloud2" />
          </div>
          <div className="sub-cloud3">
            <img src={cloud3} alt="cloud3" />
          </div>
          <div className="sub-cloud4">
            <img src={cloud3} alt="cloud3" />
          </div>
          <div className="sub-cloud4">
            <img src={cloud4} alt="cloud3" />
          </div>
          <div className="sub-cloud5">
            <img src={cloud4} alt="cloud3" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home