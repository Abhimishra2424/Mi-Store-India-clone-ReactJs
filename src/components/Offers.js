import React from "react";
import OfferList from "./OfferList";
import '../styles/offers.css'

const Offers = ({offers}) => {
  debugger;
  return (
    <div className="offersSection">
      {offers.map((val, index) => (
        <OfferList
          key={val.image}
          index={index}
          src={val.image}
          link={val.url}
        />
      ))}
    </div>
  );
};

export default Offers;
