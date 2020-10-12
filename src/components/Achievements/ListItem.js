import React from "react";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <a href="/" className="list-item-inlay">
        <div className="list-item-left">
          <div
            style={{ backgroundImage: `url(${props.imageUrl})` }}
            className="list-rounded-image"
          />
        </div>
        <div className="list-item-center">
          <h2>{props.event}</h2>
          <h4
            style={{
              padding: "10px",
              color: "rgba(0,0,0,0.6)",
              marginTop: "10px",
              fontWeight: 600,
              letterSpacing: 0.8,
            }}
          >
            <span>{props.description}</span>
          </h4>
        </div>
        <div className="list-item-right">
          <div className="button">Learn MOre</div>
        </div>
      </a>
    </div>
  );
}
