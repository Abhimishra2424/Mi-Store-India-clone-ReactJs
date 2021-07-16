import React from "react";
import "../styles/HotItemCard.css";

function HotItemCard({ image, name, price, i }) {
  return (
    <div className="HotItemCard">
      <img src={image} alt={`${i} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default HotItemCard;
