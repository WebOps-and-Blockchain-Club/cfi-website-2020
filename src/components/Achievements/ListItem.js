import React from "react";

export default ({ event, description }) => {
  return (
    <div className="list-item list-item-inlay">
      <div className="list-item-center">
        <h1 style={{ fontWeight: "550", color: "black" }}>{event}</h1>
        <h4
          style={{
            fontSize: "16px",
            color: "grey",
            marginTop: "10px",
            fontWeight: "500",
          }}
        >
          {description}
        </h4>
      </div>
    </div>
  );
};
