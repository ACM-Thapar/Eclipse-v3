import React from 'react'
import cloud_left from '../assets/images/About Section/About_cloud_left.svg';
import cloud_middle from '../assets/images/About Section/About_cloud_middle.svg';
import cloud_right from '../assets/images/About Section/About_cloud_right.svg';


const About = () => {
    return (
        <>
            <div id="AboutContainer">

                <div id="clouds">

                    <img src={cloud_left} alt="" id="left" />
                    <img src={cloud_middle} alt="" id="middle" />
                    <img src={cloud_right} alt="" id="right" />
                </div>
                <span id="AboutHeading">ABOUT ECLIPSE</span>


                <div id="TextContainer">

                    <div id="VerticalSpan"></div>
                    <div id="Text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum alias inventore magnam perspiciatis nesciunt, fugiat ad consectetur quis animi assumenda reprehenderit quos ea laboriosam adipisci tempore quisquam? Ipsam, temporibus repudiandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nostrum! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos!
                    </div>
                </div>

                <div id="button">
                    <button id="KnowMe">Know me</button>
                </div>

            </div>
        </>
    )
}

export default About
