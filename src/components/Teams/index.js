import React, { Fragment } from "react";
import { Col, Row, Image } from "antd";
import data from "./data";

export default () => {
  return (
    <div id="competetion-teams">
      <div className="hero">
        <div className="hero-title-container">
          <h2 id="title">
            Competetion <span className="title-red">Teams.</span>
          </h2>
          <p style={{ fontSize: "15px" }}>
            CFI’s Competition teams are groups of highly motivated individuals
            who work round the clock to meet challenging deadlines of various
            competitions. Over the years, our teams have have bagged prizes both
            at the national and international level.
          </p>
        </div>
      </div>

      {data.map(({ title, image, description }, index) => (
        <Row gutter={32} align="middle" className="team-container">
          <Col span={12} order={(index % 2) + 1}>
            <Image
              preview={false}
              height={400}
              style={{
                boxShadow: "rgb(0 0 0 / 12%) 0px 30px 60px",
                borderRadius: "10px",
              }}
              src={image}
              alt=""
            />
          </Col>
          <Col span={12} order={1}>
            <h1
              className="title-red"
              style={{
                boxShadow: "0 4px 14px 0 #ff3535",
                backgroundColor: "#ff3535",
                color: "white",
                textAlign: "center",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              {title}
            </h1>
            <br />
            {description}
          </Col>
        </Row>
      ))}
    </div>
  );
};
