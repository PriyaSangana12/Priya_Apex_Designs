import React from "react";
import "./ResultsStats.css";
import { FaBriefcase, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

const ResultsStats = () => {
  return (
    <div className="results-wrapper">
      <h2 className="results-heading">
        Results that <span className="highlight">Really Matters</span>
      </h2>
      <div className="stats-grid">
        <div className="stat-item">
          <FaBriefcase className="stat-icon" />
          <p className="stat-number">10+</p>
          <p className="stat-text">Years of Experience</p>
        </div>
        <div className="stat-item">
          <FaCheckCircle className="stat-icon" />
          <p className="stat-number">50+</p>
          <p className="stat-text">Projects Done</p>
        </div>
        <div className="stat-item">
          <FaThumbsUp className="stat-icon" />
          <p className="stat-number">100%</p>
          <p className="stat-text">Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsStats;