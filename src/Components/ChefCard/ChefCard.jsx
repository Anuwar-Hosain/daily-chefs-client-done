import React from "react";
import "./ChefCard.css";
import { BsFillHandThumbsUpFill, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChefCard = (props) => {
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
    title,
    code,
  } = props.chef;
  return (
    <div className="chef-card">
      <img src={chef_picture} alt="" className="chef-img" />
      <div className="ex-re-li">
        <p className="chef-ex">Experience: {years_of_experience}</p>
        <p className="chef-re">Number of Recipes: {number_of_recipes}</p>
        <p className="chef-li">
          <BsFillHandThumbsUpFill className="like"></BsFillHandThumbsUpFill>
          {likes}
        </p>
      </div>
      <h1 className="chef-title">{title}</h1>
      <h1 className="chef-name">Name:{chef_name}</h1>
      <div className="btn-view-chef">
        <Link to={`/data/${code}`} className="chef-btn">
          View Recipe <BsArrowRight></BsArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
