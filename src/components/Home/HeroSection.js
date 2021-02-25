import React, { Component, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./HeroSection.css";

export default () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        pause={false}
        interval={3000}
        touch={true}
        className="hero-container"
        controls={false}
        indicators={false}
      >
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100 carousel-img"
            src={require("../../assets/drone.jpg")}
            alt="First slide"
          />
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../../assets/plane.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>{" "}
      </Carousel>
      <div className="slider-txt-bx animate__animated animate__fadeInLeft">
        <h6> WELCOME TO </h6>{" "}
        <h2>
          {" "}
          India 's largest <br />
          student run <br />
          innovation lab{" "}
        </h2>{" "}
        <Link
          to="/open-house"
          className="nav-link"
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: 500,
            cursor: "pointer",
            backgroundColor: "#fe3b3b",
            padding: "10px 20px",
          }}
        >
          Learn more about our open house.
        </Link>
      </div>{" "}
    </Fragment>
  );
};
