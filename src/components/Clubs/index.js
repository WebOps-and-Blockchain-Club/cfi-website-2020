import React from "react";
import { Card, Typography, Col, Row } from "antd";
import { Link } from "react-router-dom";
import data from "./data";

const gridStyle = {
  width: "100%",
  textAlign: "center",
  height: "100%",
};

export default () => {
  return (
    <div id="clubs-container">
      <div className="hero">
        <div className="hero-title-container">
          <h2 id="title">
            Our <span className="title-red">Clubs.</span>
          </h2>
          <p>
            Clubs at CFI are its functioning organs. Divided based on interest,
            each club represents a student group highly enthusiastic in that
            specific field. Each club has members right from the first year to
            the final year undergraduate students and even students from
            postgraduate courses. Knowledge transfer, resulting in reducing the
            learning period is the strength of clubs at CFI.
            <br />
            <br />
            Almost a decade since its inception, CFI is now home to 10 clubs,
            namely:
          </p>
        </div>
      </div>
      <Card className="clubs-list">
        <Row>
          {data.map(({ title }) => (
            <Col span={8} align="center">
              <Link className="club-link" to={`/club/${title}`}>
                <Card.Grid style={gridStyle}>
                  <p className="title">{title}</p>
                </Card.Grid>
              </Link>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
