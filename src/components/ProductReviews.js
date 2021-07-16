import React from "react";
import ProductReviewCard from "./ProductReviewCard";
import '../styles/ProductReviews.css'

function ProductReviews({productReviews}) {
  return (
    <div className="ProductReviews">
      {productReviews.map((val, i) => (
        <ProductReviewCard
          price={val.price}
          name={val.name}
          image={val.image}
          review={val.review}
          index={i}
          key={val.image}
        />
      ))}
    </div>
  );
}

export default ProductReviews;
