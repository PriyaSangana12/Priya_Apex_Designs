import React from "react";
import "./../styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function WorkWithUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="work-with-us-container">
      <div className="work-with-us-text-section">
        <h1 className="work-with-us-title">WORK WITH US</h1>
        <p className="work-with-us-description">
          As a designing company, we enable brands to make their mark in
          history. Begin your story with us.
        </p>
        <button className="btn btn-light work-with-us-learn-more-button">
          LEARN MORE
        </button>
      </div>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        className="work-with-us-image-section"
      >
        <div className="work-with-us-image-wrapper">
          <img
            src="/images/work_with_us.png"
            alt="Designing Tools"
            className="work-with-us-design-image"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default WorkWithUs;
