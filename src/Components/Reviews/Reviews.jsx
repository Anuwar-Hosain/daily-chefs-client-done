import React, { useEffect, useState } from "react";
import "./Reviews.css";
import CardReview from "../CardReview/CardReview";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="size review">
      {reviews.map((review) => (
        <CardReview review={review} key={review.id}></CardReview>
      ))}
    </section>
  );
};

export default Reviews;
