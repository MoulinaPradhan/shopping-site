import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const CardItem = (props) => {
  {
    const { title } = props.front;
    const { front } = props;
  }

  return (
    <div>
      <div className="card">
        <img src="" />
        <h4>{title}</h4>
        <p className="price">Price:₹</p>
        <p className="ratings">
          Ratings:
          <img className="stars" src="" />
        </p>
        <Link>
          <button id="view-details">View details</button>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
