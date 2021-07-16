import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner({ banner }) {
  return (
    <Carousel fade>
      {banner.end.map((val, i) => (
        <Carousel.Item
          key={val.image}
          id="banner"
          interval={1000}
          keyboard={true}
        >
          <img
            className="d-block w-100"
            id="bannerImage"
            src={val.image}
            alt={`${i}banner`}
          />
          <Carousel.Caption>
            <h3>{val.name}</h3>
            <p>{val.description}</p>
            <p>{val.source}</p>
            <u>Read More</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
