import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css"; // Import custom styles
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      image: "/images/autocad.png", // Replace with actual image
      name: "AutoCAD",
    },
    {
      image: "/images/catia.png", // Replace with actual image
      name: "Catia",
    },
    {
      image: "/images/solid_works.png", // Replace with actual image
      name: "SolidWorks",
    },
    {
      image: "/images/revit.png", // Replace with actual image
      name: "Revit",
    },
    {
      image: "/images/tekla.png", // Replace with actual image
      name: "Tekla",
    },
    {
      image: "/images/creo.png", // Replace with actual image
      name: "Creo",
    },
  ];

  return (
    <Container className="skills-section text-center py-5">
      <h2 className="skills-title">Skills We Used</h2>
      <div className="skills-underline mx-auto mb-4"></div>
      <Row className="justify-content-center">
        {skills.slice(0, 3).map((skill, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <motion.div
             initial={{ scale: 0.5 }}
             whileInView={{ scale: 0.8 }}
             transition={{duration:0.5, ease: "easeIn"}}
              className="skill-item"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-image mb-2"
              />
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        {skills.slice(3).map((skill, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 0.8 }}
              transition={{duration:0.5, ease: "easeIn"}}
              className="skill-item"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-image mb-2"
              />
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
