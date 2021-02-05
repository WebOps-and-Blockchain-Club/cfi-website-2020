import React, { Fragment } from "react";
import { Row, Col } from "antd";
import data from "./data";

export default function PressRelease() {
  return (
    <Fragment>
      {data.map((item) => (
        <Row className="press-release-container">
          <Col width={24} className="press-release-right">
            <h2 className="title">{item.pressCoverage}</h2>
            {item.data.map((release) => (
              <div className="press-release-right-items">
                <a
                  href={release.url}
                  target="blank"
                  className="press-release-headline"
                >
                  {release.headline}
                </a>
                <p className="press-release-date">Posted on {release.date}</p>
                <p className="press-release-publication">
                  <b>Publication:</b> {release.publication}
                </p>
                <p className="press-release-item">
                  <b>Edition:</b> {release.edition}
                </p>
                <p className="press-release-item">
                  <b>Journalist:</b> {release.journalist}
                </p>
                {release.student && (
                  <p className="press-release-item">
                    <b>Students:</b> {release.student}
                  </p>
                )}
                {release.professor && (
                  <p className="press-release-item">
                    <b>Professor:</b> {release.professor}
                  </p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}
