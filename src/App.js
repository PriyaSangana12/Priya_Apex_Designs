import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import SiteNavbar from "./components/SiteNavbar"; // Adjust the path if necessary
import Footer from "./components/Footer"; // Adjust the path if necessary
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Services from "./components/Services";
import WorkWithUs from "./components/WorkWithUs";

const App = () => {
  return (
    <div>
      <SiteNavbar />

      {/* Sections with unique IDs for navigation */}
      <section id="home">
        <Homepage />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work-with-us">
        <WorkWithUs />
      </section>

      <section id="services">
        <Services />
      </section>
      <section id="contact-us">
        <Footer />
      </section>
    </div>
  );
};

export default App;
