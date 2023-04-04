import React, {useState} from "react";
import "./Sponsors.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { BsDiscord } from "react-icons/bs";

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
                
                <div class="grid-container">
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                    <div class="grid-item"></div>
                </div>
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                </div>

                <div className="contact-form-bg">
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
                                <div className="footer-text">
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Nunc vulputate libero et 
                                    velit interdum, ac aliquet odio mattis. 
                                </div>                         
                               <div className="socials">
                               <a href="https://www.facebook.com/acmthapar/"><FontAwesomeIcon icon={faFacebook} size="2xl" className="social-icon" /></a>
                               <a href="https://www.instagram.com/acmthapar/?hl=en"><FontAwesomeIcon icon={faInstagram} size="2xl"className="social-icon"  /></a>
                               <a href="https://www.youtube.com/channel/UCZBjG5uzKFH4hYtpttKYP5Q?app=desktop"><FontAwesomeIcon icon={faYoutube} size="2xl" className="social-icon" /></a>
                               <a href="https://www.linkedin.com/company/thapar-acm-student-chapter?originalSubdomain=in"><FontAwesomeIcon icon={faLinkedin} size="2xl"className="social-icon"  /></a>
                                </div>                            
                            </div>
                            <div className="footer-right">
                            <div className="footer-text">
                                    Get in touch                                  
                            </div> 
                            <div className="footer-text">
                            Have Queries? Reach out to us anytime!
                            </div>
                            <div className="contacts">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" className="contact-icon" />
                            <FontAwesomeIcon icon={faEnvelope} size="xl" className="contact-icon" />
                            <FontAwesomeIcon icon={faPhone} size="xl" className="contact-icon" />
                            <FontAwesomeIcon icon={faPhone} size="xl" className="contact-icon" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
          )   
}

export default Sponsors;
