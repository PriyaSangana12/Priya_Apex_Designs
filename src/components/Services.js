import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles.css";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Industrial Plant Design",
      description:
        "Comprehensive planning and designing of industrial plants to optimize space and operational efficiency.",
      image: "images/industrial_plant_design.png", // Replace with actual image
    },
    {
      title: "Pipeline Design",
      description:
        "Specialized designs for efficient and safe pipeline layouts for various industrial applications.",
      image: "images/pipeline_design.png", // Replace with actual image
    },
    {
      title: "Home Interior Design",
      description:
        "Creating aesthetically pleasing and functional home interiors using the latest software technology.",
      image: "images/home_interor_design.png", // Replace with actual image
    },
    {
      title: "Civil Design",
      description:
        "Drafting civil engineering plans like roads and drainage systems and integrating civil components in urban planning projects.",
      image: "images/civil_design.png", // Replace with actual image
    },
    {
      title: "Product Design",
      description:
        "Creating product design, prototyping, simulation, complex consumer products, particularly in automotive and aerospace.",
      image: "images/product_design.png", // Replace with actual image
    },
    {
      title: "Mechanical Design",
      description:
        "Designing mechanical parts and assemblies with simulation features. Also designed advanced mechanical design.",
      image: "images/mechanical_design.png", // Replace with actual image
    },
  ];

  return (
    <Container className="services-section text-center py-5">
      <h2 className="services-title">Services</h2>

      {/* First Row of Services */}
      <Row className="justify-content-center" >
        {services.slice(0, 3).map((service, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="h-100 border-0 shadow service-card">
              <div className="card-image-wrapper">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Quote Divider */}
      <Row className="justify-content-center">
        <div className="quote-divider">
          Timely submission of projects is our priority
        </div>
      </Row>

      {/* Second Row of Services */}
      <Row className="justify-content-center">
        {services.slice(3).map((service, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="h-100 border-0 shadow service-card">
              <div className="card-image-wrapper">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
