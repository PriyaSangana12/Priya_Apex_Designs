import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="work-with-us-container">
      <div className="work-with-us-text-section">
        <h1 className="work-with-us-title">About Us</h1>
        <p className="work-with-us-description">
          At our mechanical designing company, We pride ourselves on delivering
          cutting-edge engineering solutions. With a team of experienced
          designers and engineers, we tackle complex projects and turn them into
          reality. Our commitment to quality and innovation ensures that we meet
          and exceed our clients' expectations. Let us help you bring your
          vision to life.
        </p>
        {/*<motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="btn btn-light work-with-us-learn-more-button"
        >
          TALK TO US
        </motion.button> */}
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
            src="images/about_us.jpeg" // Replace with actual image URL
            alt="Designing tools"
            className="about-image"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
