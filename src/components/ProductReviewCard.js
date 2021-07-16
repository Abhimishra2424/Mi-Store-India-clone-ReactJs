import React from "react";
import "../styles/ProductReviewCard.css";

function ProductReviewCard({ image, i, review, name, price }) {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${i} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
}

export default ProductReviewCard;
