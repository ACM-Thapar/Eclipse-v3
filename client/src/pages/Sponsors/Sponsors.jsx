import React, {useState} from "react";
import "./Sponsors.css"; 
   
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
            
            <div classname = "sponsors-container">
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
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="Phone Number" value={number} onChange={e => setNumber(e.target.value)} />
                    <textarea placeholder="Enter your query" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button onClick={submit}>Submit</button>
                </div>
                </div>

            </div>
            </div>
            
          )   
}

export default Sponsors;
