import React from "react";
import CardItem from "./CardItem";

const Card = (props) => {
  const { front } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      {front.map((front) => {
        return <CardItem front={front} key={front.id} />;
      })}
    </div>
  );
};

export default Card;
