import React from "react";
import "../styles/About.css";
import Award from "../assets/award.png";

const About = () => {
  return (
    <div className="About">
      <div className="About-left">
        <div className="About-card bg"></div>
        <div className="About-card">
          <img src="https://picsum.photos/200" alt="Random generator from picsum" className="About-card-img" />
        </div>
      </div>
      <div className="About-right">
        <h2 className="About-title">About Me</h2>
        <p className="About-sub">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className="About-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi itaque veniam sit deleniti ut necessitatibus minima eum fuga magnam, velit adipisci, cumque a. Distinctio, voluptates. Rem ea fugiat magni adipisci!</p>
        <div className="About-award">
          <img src={Award} alt="award flyer" className="About-award-img" />
          <div className="About-award-texts">
            <h4 className="About-award-title">International Design Awards</h4>
            <p className="About-award-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;