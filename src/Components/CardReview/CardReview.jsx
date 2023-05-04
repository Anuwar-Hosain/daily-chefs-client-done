import React from "react";
import "./CardReview.css";

const CardReview = (props) => {
  const { name, review, icon } = props.review;
  return (
    <div className="review-card">
      <img src={icon} alt="" className="card-r-img" />
      <p>{name}</p>
      <h1>{review}</h1>
    </div>
  );
};

export default CardReview;
