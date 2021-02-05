import React from "react";

import PersonData from "./person";

export default ({ people, title }) => {
  if (people.length === 1) {
    return (
      <div className="card text-center col-sm-12">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="row">
          <div className="card col-12">
            <div className="card-body">
              <p className="card-title">{people[0].name}</p>
              <h5 className="card-text">{people[0].dept}</h5>
              <h5 className="card-text">{people[0].number}</h5>
              <h5 className="card-text">
                <a href={"mailto:" + people[0].email}>{people[0].email}</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card text-center col-sm-12">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="row">
        {people.map((person) => {
          return (
            <PersonData
              key={person.name}
              name={person.name}
              dept={person.dept}
              number={person.number}
              email={person.email}
            />
          );
        })}
      </div>
    </div>
  );
};
