import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

function Homepage() {
  return (
    <motion.div className="homepage-container">
      <div className="overlay-text">
        <motion.h1
          className="homepage-title"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          Innovative Mechanical Designs
        </motion.h1>
        <motion.p
          className="homepage-subtitle"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          Transforming Ideas into Mechanical Masterpieces
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button href="#projects" className="explore-button" variant="none">
            Explore Our Projects
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Homepage;
