import React from "react";

function PersonData(props) {
  return (
    <div className="card col-sm-6">
      <div className="card-body">
        <p className="card-title">{props.name}</p>
        <h5 className="card-text">{props.dept}</h5>
        <h5 className="card-text">{props.number}</h5>
        <h5 className="card-text">
          <a href={"mailto:" + props.email}>{props.email}</a>
        </h5>
      </div>
    </div>
  );
}

export default PersonData;
