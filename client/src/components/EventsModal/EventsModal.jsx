import React from 'react';
import './eventsModal.css';
import Hacklipse from '../../assets/images/bottomText.svg';
import Enigma from '../../assets/images/enigma.svg';
import Kaggle from '../../assets/images/kaggle.svg';
import Flamingo from '../../assets/images/Flamingo.svg';
// import Hacklipse from '../../assets/images/bottomText.svg';
import { FaWindowClose } from 'react-icons/fa';
import Tracks from '../../pages/Tracks/Tracks';
import Prizes from '../../pages/Prizes/Prizes';

const EventsModal = ({ closeModal, eventNumber }) => {
  return (
    <div className="main-event-container" style={{ position: 'relative' }}>
      {/* <p>Hacklipse</p> */}
      {eventNumber === 1 ? <img className='hacklipse-logo' src={Enigma} alt="" />
      :
      (eventNumber === 2 ? <img className='hacklipse-logo' src={Hacklipse} alt="" />
      :
      (eventNumber === 3 ? <img className='hacklipse-logo' src={Flamingo} alt="" />
      :
      <p className="flamingo-heading">KAGGLE WARS</p>
      )
      )
      }
      <div className="register-button">
        {eventNumber === 1 ? (<a href="https://www.codingninjas.com/codestudio/contests/acm-thapar-presents-enigma-by-code-studio"><button>Register Here</button></a>) : (
        eventNumber === 2 ? <a href="https://hacklipse3.devfolio.co/"><button>Register Here</button></a>
        :
        (eventNumber === 3 ? <a href="https://flamingo.devfolio.co/"><button>Register Here</button></a>
        :
        <a href="https://unstop.com/hackathons/kaggle-wars-thapar-institute-of-engineering-and-technology-tiet-patiala-657754?lb=JosSQ6Y"><button>Register Here</button></a>
        )
        )}
      </div>
      <div className="description">
        {eventNumber === 1 ? (<p>Enigma is a highly anticipated competitive programming competition, attracting top coding talent from around the country.
          <br /><br />
          The event features a series of coding challenges designed to test the contestants' problem-solving skills and ability to write efficient and effective algorithms.
          <br /><br />
          Participants are required to solve a variety of programming problems, ranging from simple tasks to more complex challenges that require advanced skills in data structures, algorithms, and optimization techniques. 
          <br /><br />
          The competition is timed, with contestants given a set amount of time to complete each challenge. The faster a participant completes a challenge, the higher their score.
          <br /><br />
          The competition culminates in a final round, where the top-performing contestants compete head-to-head in a live coding challenge and interviews of top tech companies.
          <br /><br />
          The winner of this final round will be awarded an internship at a top tech company, providing them with invaluable experience and the opportunity to work on cutting-edge projects.
          <br /><br />
          Enigma is a challenging and exciting competition, designed to bring together the best and brightest programming talent from around the world. Whether you're a seasoned pro or just starting out, Enigma is the perfect opportunity to test your skills and showcase your talents on a global stage.</p>) : (
          eventNumber === 2 ? <p>Hacklipse is a hackathon event that brings together developers, designers, and entrepreneurs to collaborate on innovative projects and build solutions to real-world problems using technology. 
          <br /><br />
          The hackathon would be 24 hours long, during which participants work in teams to develop new software applications, hardware prototypes, or other digital products.
          <br /><br />
          The event will start with participants receiving an introduction to the rules and guidelines of the hackathon. Then the teams can start brainstorming ideas and discussing project plans.
          <br /><br />
          Mentors and experts would be available throughout the event to provide guidance, answer questions, and help troubleshoot technical issues.
          <br /><br />
          During the hackathon, participants work intensively to develop their projects, with a focus on rapid prototyping and iteration. They may use a variety of tools, technologies, and platforms, such as programming languages, APIs, data analytics tools, and cloud computing services.
          <br /><br />
          At the end of the hackathon, each team would have to present their project to a panel of judges, who evaluate the projects based on criteria such as innovation, feasibility, impact, and execution. Prizes would awarded to the top teams, and participants would have the opportunity to showcase their work to potential employers, investors, and collaborators.
          <br /><br />
          Overall, Hacklipse is an exciting and engaging event that fosters collaboration, creativity, and innovation in the tech community.</p>
          :
          (
            eventNumber === 3 ? <p>Flamingo Design Competition is a multi-level design competition that challenges designers from all over the country to showcase their creativity, innovation and skills. 
            <br /><br />
            The competition is organized in three levels: branding, merchandise design, and UI design. Each level has a unique theme that participants must adhere to.
            <br /><br />
            In the branding level, participants are required to create a comprehensive branding strategy for a fictional company according to the case study. The branding strategy should include the company logo, color palette, typography, and brand guidelines that will define the visual identity of the company. 
            <br /><br />
            The merchandise design level challenges participants to create innovative and attractive merchandise designs for a brand. Participants are required to design various products, including t-shirts, hats, bags, and other merchandise that reflects the brand's values and resonates with its target audience.
            <br /><br />
            The UI design level requires participants to design a user interface for a mobile or web application based on the problem statement. The interface should be user-friendly, intuitive and visually appealing. Participants are required to showcase their skills in designing interfaces that cater to the needs of users and enhance their experience.
            <br /><br />
            Throughout the competition, participants will be judged based on their creativity, originality, adherence to the theme, and overall design quality.
            <br /><br />
            The winners of each level will be awarded exciting prizes, and their designs will be showcased on various platforms.
            <br /><br />
            Flamingo Design Competition aims to provide a platform for designers to showcase their talent and creativity, network with fellow designers and industry experts, and gain recognition for their work.</p>
            :
            <p>Kaggle Wars is a highly-anticipated event for machine learning and artificial intelligence enthusiasts. This competition brings together data scientists, machine learning engineers, and AI experts from around the world to showcase their skills and knowledge. 
            <br /><br />
            The event challenges participants to use their expertise in data analysis, machine learning, and artificial intelligence to solve complex problems and compete against each other. 
            <br /><br />
            Kaggle Wars provides a unique platform for attendees to learn from industry leaders, engage in hands-on workshops, and network with like-minded individuals. The competition offers an exciting opportunity to gain valuable experience in working on real-world problems and a chance to win prizes and recognition for their accomplishments.
            <br /><br />
            Participants from all over the country come together to solve complex problems using data analysis, machine learning algorithms, and artificial intelligence techniques. 
            <br /><br />
             Don't miss out on this thrilling event that combines cutting-edge technology with fierce competition - join us for Kaggle Wars!</p>
          )
        )}
      </div>
      <div onClick={closeModal} className="close"><FaWindowClose size={40} color='#f14242' style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} /></div> 
      {eventNumber === 2 ? (<><div><Tracks /></div><div><Prizes /></div></>) : null}
    </div>
  )
}

export default EventsModal