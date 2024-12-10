import React from "react";
import { motion } from "framer-motion";

function Homepage() {
  const [move, setMove] = React.useState();
  return (
    <div className="homepage-container">
      <motion.div animate={{ x: move ? 500 : -500 }} className="overlay-text">
        <h1>Innovative Mechanical Designs</h1>
        <p>Transforming Ideas into Mechanical Masterpieces</p>
      </motion.div>
    </div>
  );
}

export default Homepage;
