import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import title from "../../assets/images/TIMELINE.png";

const Timeline = () => {
  return (
    <div id="timeline" className="timeline-container">
      <div className="title">
        <img src={title} alt="" />
      </div>
      <VerticalTimeline className="timeline" animate={true} lineColor={"black"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{
            background: "rgba(0,0,0,0.2)",
            color: "#fff",
            border: "5px solid gray",
            borderRadius: "20px 0px 0px 0px",
            height: "100px",
            fontSize: "16px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          iconStyle={{ background: "black", color: "#fff", transform: 'scale(0.8)' }}
        >
          <h3 className="vertical-timeline-element-title">ENIGMA</h3>

          <p>DURATION: 6th - 9th April</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          iconStyle={{ background: "black", color: "#fff", transform: 'scale(0.8)' }}
          contentStyle={{
            background: "rgba(0,0,0,0.2)",
            color: "#fff",
            border: "5px solid gray",
            borderRadius: "0px 30px 0px 0px",
            height: "100px",
            fontSize: "16px",
          }}
        >
          <h3 id="make_small" className="vertical-timeline-element-title">KAGGLE WARS</h3>
          <p>DURATION: 9th April</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          iconStyle={{ background: "black", color: "#fff", transform: 'scale(0.8)' }}
          contentStyle={{
            background: "rgba(0,0,0,0.2)",
            color: "#fff",
            border: "5px solid gray",
            borderRadius: "30px 0px 0px 0px",
            height: "100px",
            fontSize: "16px",
          }}
        >
          <h3 className="vertical-timeline-element-title">FLAMINGO</h3>

          <p>DURATION: 7th April</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2006 - 2008"
          iconStyle={{ background: "black", color: "#fff", transform: 'scale(0.8)' }}
          contentStyle={{
            background: "rgba(0,0,0,0.2)",
            color: "#fff",
            border: "5px solid gray",
            borderRadius: "0px 30px 0px 0px",
            height: "100px",
            fontSize: "16px",
          }}
        >
          <h3 className="vertical-timeline-element-title">HACKLIPSE</h3>

          <p style={{ fontSize: 10 }}>DURATION: 8th - 9th April</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
