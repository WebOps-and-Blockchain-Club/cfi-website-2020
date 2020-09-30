import React from "react";
import PressRelease from "./PressRelease";
import "./media.css";

export default function index() {
  return (
    <div>
      <div className="hero">
        <div className="hero-title-container">
          <h2 id="title">
            Media<span className="title-red">.</span>
          </h2>
          <p>
            Over 400 sports startups from around the globe applied each year. Only a few made it.
          </p>
          <p>
            Meet the two cohorts that received 12 weeks of training in business, leadership and
            pitching skills in Berlin in 2017 and 2018.
          </p>
        </div>
      </div>
      <div className="press-release">
        <PressRelease />
      </div>
    </div>
  );
}
