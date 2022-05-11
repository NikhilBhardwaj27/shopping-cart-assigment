import React from "react";
import "./card.styles.scss";

const CARD_TYPE_CLASSES = {
  normal: "normal-card",
  dashed: "dashed-border-card",
};

const Card = ({ children, cardType }) => {
  return (
    <div className={`card-container ${CARD_TYPE_CLASSES[cardType]}`}>
      {children}
    </div>
  );
};

export default Card;
