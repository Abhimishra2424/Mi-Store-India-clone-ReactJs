import React from "react";

function OfferList({ src, link, index }) {
  return (
    <a href={link}>
      <img src={src} alt={`${index}offer`} />
    </a>
  );
}

export default OfferList;
