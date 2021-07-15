import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ start }) {
  return (
    <Carousel fade>
      {start.map((val, i) => (
        <Carousel.Item>
          <img className="d-block w-100" src={val} alt="first slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
