import React from "react";
import "./ChefCard.css";

const ChefCard = (props) => {
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
  } = props.chef;
  console.log(props.chef);
  return (
    <div className="chef-card">
      <img src={chef_picture} alt="" className="chef-img" />
      <h1>ChefCard</h1>
    </div>
  );
};

export default ChefCard;
