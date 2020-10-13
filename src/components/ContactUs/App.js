import React from "react";
import contacts from "./contacts";
import CreateCard from "./card";

function ContactUs() {
  return (
    <div className="hero">
      <div className="hero-title-container">
        <h2 id="title">
          <span className="title-red">Contact Us.</span>
        </h2>
      </div>
      <div classname="column">
        <div>
          {contacts.map((contact) => {
            return (
              <CreateCard
                key={contact.title}
                title={contact.title}
                people={contact.people}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
