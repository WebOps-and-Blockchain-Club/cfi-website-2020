import React, { Fragment } from "react";
import ListItem from "./ListItem";
import data from "./utils/data";

export default function List() {
  return (
    <div>
      {data.map((item) => (
        <Fragment>
          <div className="year title-red">
            <h2>{item.year ? item.year : item.title}</h2>
          </div>
          <div className="list-wrapper">
            <div className="list">
              {item.data.map((achievement) => (
                <ListItem
                  team={achievement.team}
                  description={achievement.description}
                  event={achievement.event}
                />
              ))}
            </div>
          </div>
          <br />
          <br />
          <br />
        </Fragment>
      ))}
    </div>
  );
}
