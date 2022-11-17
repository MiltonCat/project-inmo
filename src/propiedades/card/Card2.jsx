import React, {memo} from "react";
import "./card2.css";
import { motion } from "framer-motion";

const Card2 = memo( ({ src, title, description, price, href, nota }) => {
  return (
    <motion.div className="card2"
    onClick={() => window.open(href, "_blank")}
    >
      <img src={src} alt="" 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1}}
      />
      <div className="card__info">
        <h1>{nota}</h1>
        <h4>{description}</h4>
        <h5>{price}</h5>
      </div>
    </motion.div>
  );
});

export default Card2;