import React from "react";
import data from "./data";
import Card from "./card";

export default () => {
  return (
    <div id="contact-us">
      <div className="hero">
        <div className="hero-title-container">
          <h2 id="title">
            Contact <span className="title-red">Us.</span>
          </h2>
        </div>
      </div>
      <div classname="column">
        <div>
          {data.map((contact) => (
            <Card
              key={contact.title}
              title={contact.title}
              people={contact.people}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
