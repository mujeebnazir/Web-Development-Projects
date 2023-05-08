import React from "react";
import "./Card.css";

const Card = () => {
  let randomQuotes = [
    "You are the shuckiest shuck faced shuck in the world!",
    "Insane means fewer cameras!",
    "Act first, explain later.",
    "Hand me my pants,",
  ];
  return <div className="card">{randomQuotes.map()}</div>;
};

export default Card;
