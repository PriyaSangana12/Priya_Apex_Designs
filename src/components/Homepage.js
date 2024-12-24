import React from "react";
import { motion } from "framer-motion";

function Homepage() {
  const [move, setMove] = React.useState();
  return (
    <motion.div className="homepage-container">
      <div className="overlay-text">
        <motion.h1 initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
    transition={{duration:0.3, ease: "easeIn"}} >Innovative Mechanical Designs</motion.h1>
        <motion.p initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
    transition={{duration:0.2, ease: "easeIn"}} >Transforming Ideas into Mechanical Masterpieces</motion.p>
      </div>
    </motion.div>
  );
}

export default Homepage;


