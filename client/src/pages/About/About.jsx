import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <div id="AboutContainer" >
           
                    {/* <div id="clouds">
                        <img src={cloud_left} alt="" id="left" />
                        <img src={cloud_middle} alt="" id="middle" />
                        <img src={cloud_right} alt="" id="right" />
                    </div> */}
                <span id="AboutHeading" >ABOUT ECLIPSE</span>
               
                <div id="TextContainer">

                    <div id="VerticalSpan"></div>
                    <div id="Text">
                        <br /><br /><br /><br /><br /><br />
                    Welcome to Eclipse 3.0, the flagship event of the ACM! This week-long celebration of technology and innovation features a diverse range of technical events designed to challenge and inspire students. We have the following 4 events for you this time :
                    <br /><br />
                    <b>HACKLIPSE</b> is a 24-hour hackathon where developers, designers, and entrepreneurs work in teams to develop digital products that solve real-world problems using technology. Mentors and experts will be present to provide guidance, and prizes are awarded to the top teams.
                    <br /><br />
                    <b>ENGIMA</b> is a competitive programming competition that challenges participants to solve programming problems, ranging from simple to complex, in a timed competition. The winner of the final round receives an internship at a top tech company.
                    <br /><br />
                    <b>FLAMINGO</b> is a multi-level design competition that challenges designers to showcase their creativity and innovation in branding, merchandise design, and UI design. Each level has a unique theme, and winners receive prizes.
                    <br /><br />
                    <b>KAGGLE</b> Wars is an event for machine learning and artificial intelligence enthusiasts. Participants use their expertise to solve complex problems, learn from industry leaders, and compete for prizes and recognition.
                    </div>
                </div>
                </div>
                
                {/* <div id="button">
                    <button id="KnowMe">Know me</button>
                </div> */}
        </>
    )
}

export default About
