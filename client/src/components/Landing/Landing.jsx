import React from 'react'
import './Landing.css'
import clouds from '../../images/clouds1.svg'

function Landing() {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">ECLIPSE</h1>
      </div>
      <div className="cloud-container">
        <img src={clouds} alt="" />
      </div>  
    </div>
  )
}

export default Landing