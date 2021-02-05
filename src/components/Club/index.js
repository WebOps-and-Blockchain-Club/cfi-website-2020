import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Image, Row } from "antd";
import data from "../Clubs/data";

const gridStyle = {
  textAlign: "center",
};

export default () => {
  const { id } = useParams();
  const { title, content, images } = data.find(({ title }) => title == id);
  return (
    <div id="club-container">
      <div className="hero">
        <div className="hero-title-container">
          <h2 id="title">
            <span className="title-red">{title}</span>
          </h2>
          <div className="content">{content}</div>
        </div>
      </div>
      <Row justify="center" align="center">
        {images.map((image) => (
          <Col span={12}>
            <Image height={500} src={image} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
