import React, { useState } from "react";
import "./../styles.css";
import { motion, AnimatePresence } from "framer-motion";

function WorkWithUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="work-with-us-container">
      <div className="work-with-us-text-section">
        <h1 className="work-with-us-title">WORK WITH US</h1>
        <p className="work-with-us-description">
          As a designing company, we enable brands to make their mark in
          history. Begin your story with us.
        </p>
        <button
          className="btn btn-light work-with-us-learn-more-button"
          onClick={() => setIsModalOpen(true)}
        >
          LEARN MORE
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isLoaded && isInView ? { opacity: 1 } : { opacity: 0 }}
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

      {/* Full-screen modal with 7 divs */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="experience-modal-box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-left-section">
                <h2>EXPERIENCE</h2>
              </div>
              <div className="experience-right-section">
                <div className="experience-card light">
                  <p>
                    Concept Design of the Biogas digester (for American waste
                    management company).
                  </p>
                  <strong>Client: Biogas digester</strong>
                </div>
                <div className="experience-card light">
                  <p>
                    Design and detailing support for developed the Formax
                    Machine (cold punch machine for nut and bolt manufacturing).
                  </p>
                  <strong>Client: National Machinery, USA, Tiffin</strong>
                </div>
                <div className="experience-card light">
                  <p>
                    Concept Design the Sliding door mechanism (for Cylinder head
                    washing machine).
                  </p>
                  <strong>
                    Client: CTG Cleaning Technologies, USA, Ohio City
                  </strong>
                </div>
                <div className="experience-card dark">
                  <p>
                    Design the material handling equipment, piping layout and
                    installation of material handling equipment.
                  </p>
                  <strong>Client: MAC Process, USA, Kansas City</strong>
                </div>
                <div className="experience-card dark">
                  <p>
                    Design and detailing of Air purifier for commercial and
                    household product with 3000 to 500 sqft area.
                  </p>
                  <strong>
                    Client: Airier Natura Pvt Ltd, Bangalore, Gurugram, India
                  </strong>
                </div>
                <div className="experience-card dark">
                  <p>
                    Involve in the Design and detailing of IC engine testing lab
                    of Asia’s biggest IC engine testing Lab.
                  </p>
                  <strong>Client: Cummins, Pune, India</strong>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WorkWithUs;
