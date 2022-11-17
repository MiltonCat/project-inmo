import React, {memo} from "react";
import "./card.css";
import {motion} from "framer-motion";

const Card = memo(({ src, title, description, price, href, nota }) => {
  return (
    <motion.div className="card"
    onClick={() => window.open(href, "_blank")}
    >
      <img src={src} alt="" />
      <div className="card1__info">
        <h1>{nota}</h1>
        <h4>{description}</h4>
        <h5>{price}</h5>
      </div>
    </motion.div>
  );
});

export default Card;
