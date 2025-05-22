// AboutUs.js
import React from "react";
import bgImage from "./design.jpg";
import "./AboutUs.css";
import ResultsStats from "./ResultsStats";

const AboutUs = () => {
  return (
    <div className="outer-wrapper">
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="about-box">
          <h2>About Us</h2>
          <hr />
          <p>
            At our mechanical designing company, we pride ourselves on delivering cutting-edge engineering solutions.
            With a team of experienced designers and engineers, we tackle complex projects and turn them into reality.
            Our commitment to quality and innovation ensures that we meet and exceed our clients' expectations.
            Let us help you bring your vision to life.
          </p>
        </div>
      </div>

      {/* Results section appears cleanly below */}
      <ResultsStats />
    </div>
  );
};

export default AboutUs;
