import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="footer-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Image */}
          <Col md={6}>
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
            >
              <img
                src="images/contact_us.jpeg"
                alt="Laptop"
                className="footer-image"
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </Col>
          {/* Right Section - Contact Details */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="footer-title">Reach Out</h2>
            <div className="footer-underline"></div>
            <div className="footer-details">
              <p className="footer-name">Ajay Kumar Mangam</p>
              <p className="footer-email">priyaapexdesign@gmail.com</p>
              <p className="footer-phone">+91 6304119904</p>
              {/* Social Icons */}
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/apex_designs_company/"
                  className="icon"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                {/* 
              <a href="#" className="icon">
                <i className="bi bi-twitter"></i>
              </a>
             <a href="#" className="icon">
                <i className="bi bi-facebook"></i>
              </a>
              */}
                <a
                  href="http://linkedin.com/company/priyaapexdesigns"
                  className="icon"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Bottom bar */}
      <div className="footer-bottom text-center mt-3">
        Terms & Support | All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
