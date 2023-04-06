import React, {useState} from "react";
import "./Sponsors.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ACM_LOGO from '../../assets/images/acm_logo.svg';
import ECLIPSE_LOGO from '../../assets/images/eclipse_logo_real.svg';
import { BsDiscord } from "react-icons/bs";
import BeReal from '../../assets/images/Sponsors/BeReal.png';
import Bullseye from '../../assets/images/Sponsors/bullseye.png';
import CodeStudio from '../../assets/images/Sponsors/codestudio.png';
import CodingMinutes from '../../assets/images/Sponsors/CodingMinutes.jpg';
import Devfolio from '../../assets/images/Sponsors/devfolio.png';
import Elm from '../../assets/images/Sponsors/elm.svg';
import FileCoin from '../../assets/images/Sponsors/filecoin.png';
import Flipr from '../../assets/images/Sponsors/flipr.png';
import Polygon from '../../assets/images/Sponsors/Polygon.png';
import Postman from '../../assets/images/Sponsors/postman.png';
import Puma from '../../assets/images/Sponsors/puma.jpg';
import PW from '../../assets/images/Sponsors/pw.jpg';
import Replit from '../../assets/images/Sponsors/replit.png';
import S1 from '../../assets/images/Sponsors/s1.jpeg';
import Sketch from '../../assets/images/Sponsors/sketch.png';
import Solana from '../../assets/images/Sponsors/solana.jpg';

import {
    faFacebook,
    faInstagram,
    faYoutube,
    faLinkedin,  
    faDiscord,  
  } from "@fortawesome/free-brands-svg-icons";

import { Link } from 'react-router-dom'
   
const Sponsors = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
            
            <div id="sponsors" className = "sponsors-container">
                <div className="sponsors-container-bg">
                
                <div className="sponsors-heading">
                    <h1>Our Sponsors</h1>
                </div>
                
                <div id="g1" class="grid-container">
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={BeReal} alt="" />
                        <img className="sponsor-img" width={130} src={Bullseye} alt="" />
                        <img className="sponsor-img" width={130} src={CodeStudio} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={CodingMinutes} alt="" />
                        <img className="sponsor-img" width={130} src={Devfolio} alt="" />
                        <img className="sponsor-img" width={130} src={Elm} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={FileCoin} alt="" />
                        <img className="sponsor-img" width={130} src={Flipr} alt="" />
                        <img className="sponsor-img" width={130} src={Polygon} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Postman} alt="" />
                        <img className="sponsor-img" width={130} src={Puma} alt="" />
                        <img className="sponsor-img" width={130} src={PW} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Replit} alt="" />
                        <img className="sponsor-img" width={130} src={S1} alt="" />
                        <img className="sponsor-img" width={130} src={Sketch} alt="" />
                    </div>
                </div>

                <div id="g2" class="grid-container">
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={BeReal} alt="" />
                        <img className="sponsor-img" width={130} src={Bullseye} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={CodeStudio} alt="" />
                        <img className="sponsor-img" width={130} src={CodingMinutes} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Devfolio} alt="" />
                        <img className="sponsor-img" width={130} src={Elm} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={FileCoin} alt="" />
                        <img className="sponsor-img" width={130} src={Flipr} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Polygon} alt="" />
                        <img className="sponsor-img" width={130} src={Postman} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Puma} alt="" />
                        <img className="sponsor-img" width={130} src={PW} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Replit} alt="" />
                        <img className="sponsor-img" width={130} src={S1} alt="" />
                    </div>
                    <div style={{ overflow: 'hidden', gap: 50 }} class="grid-item">
                        <img className="sponsor-img" width={130} src={Sketch} alt="" />
                        <img className="sponsor-img" width={130} src={Solana} alt="" />
                    </div>
                </div>
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                </div>

                <div style={{ background: '#171717' }} className="contact-form-bg">
                <div className="contact-form">
                    <a className="anchor" href="https://discord.gg/Hcn3PncH">
                    <div className="button-container">
                        <FontAwesomeIcon icon={faDiscord} size="xl" className="contact-icon" />
                        <div>Join Our Discord</div>
                    </div>
                    </a>
                </div>
                </div>
                    <div className="footer-bg">
                        <div className="footer">
                            <div className="footer-left">
                                <div style={{ display: 'flex', gap: 10 }} className="logos">
                                    <img width={150} style={{ marginBottom: 30 }} src={ACM_LOGO} alt="" />
                                    <img width={150} style={{ marginBottom: 30 }} src={ECLIPSE_LOGO} alt="" />
                                </div>
                                <div className="footer-text">
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Nunc vulputate libero et 
                                    velit interdum, ac aliquet odio mattis. 
                                </div>
                               {/* <div className="socials">
                               <a href="https://www.facebook.com/acmthapar/"><FontAwesomeIcon icon={faFacebook} size="2xl" className="social-icon" /></a>
                               <a href="https://www.instagram.com/acmthapar/?hl=en"><FontAwesomeIcon icon={faInstagram} size="2xl"className="social-icon"  /></a>
                               <a href="https://www.youtube.com/channel/UCZBjG5uzKFH4hYtpttKYP5Q?app=desktop"><FontAwesomeIcon icon={faYoutube} size="2xl" className="social-icon" /></a>
                               <a href="https://www.linkedin.com/company/thapar-acm-student-chapter?originalSubdomain=in"><FontAwesomeIcon icon={faLinkedin} size="2xl"className="social-icon"  /></a>
                                </div>                             */}
                            </div>
                            <div className="footer-right">
                            <div style={{ fontSize: 20, marginBottom: 20 }} className="footer-text">
                                    Get in touch                                  
                            </div> 
                            <div className="footer-text">
                            Have Queries? Reach out to us anytime!
                            </div>
                            <div style={{ marginTop: 8 }} className="contacts">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="mail1">
                                    <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
                                    <p style={{ fontSize: 13 }}>mail@acmtiet.com</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="mail1">
                                    <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
                                    <p style={{ fontSize: 13 }}>mail@acmtiet.com</p>
                                </div>
                                {/* <FontAwesomeIcon icon={faPhone} size="xl" className="contact-icon" />
                                <FontAwesomeIcon icon={faPhone} size="xl" className="contact-icon" /> */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
          )   
}

export default Sponsors;
