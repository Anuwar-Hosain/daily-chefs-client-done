import React, { useState } from "react";
import "./ChefDetails.css";
import { useLoaderData } from "react-router-dom";
import { BsFillHandThumbsUpFill, BsFillHeartFill } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ChefDetails = () => {
  const [favBtn, setFavBtn] = useState(false);
  console.log(favBtn);
  const chefData = useLoaderData();
  const {
    chef_detail,
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    rating,
    viewRecipe,
    years_of_experience,
  } = chefData;

  const handleFavBtn = () => {
    alert("Added to favorite ");
    setFavBtn(true);
  };
  return (
    <section className="size chef-details">
      <h1 className="chef-details-title">Chef Details:</h1>
      <div className="chef-details-main">
        <div className="chef-pic">
          <img src={chef_picture} alt="" />
        </div>
        <div className="chef-description">
          <h1>{chef_name}</h1>
          <p>{chef_detail}</p>
          <div className="ex-re-li">
            <p className="chef-ex">Experience: {years_of_experience}</p>
            <p className="chef-re">Number of Recipes: {number_of_recipes}</p>
            <p className="chef-li">
              <BsFillHandThumbsUpFill className="like"></BsFillHandThumbsUpFill>
              {likes}
            </p>
            <p className="chef-li">
              <BsFillHeartFill
                className={favBtn ? "fav-btn" : "fav-block"}
                onClick={handleFavBtn}
              ></BsFillHeartFill>
            </p>
          </div>
        </div>
      </div>
      <div className="Chef-recipe">
        <h1 className="chef-details-title">Check Chef Recipe</h1>
        <div className="check-cards">
          <div className="card-check">
            <img src={viewRecipe.recipe1} alt="" />
            <div className="card-check-dis">
              <h2>Pasta</h2>
              <p className="margin">
                Executive Chef: This is the top chef in a kitchen, responsible
                for creating the menu, managing the kitchen staff, ordering
                supplies, and ensuring that the food is prepared to the highest
                quality standards.
              </p>
              <ul className="margin">
                <li>
                  <samp className="bold">Step 1: </samp> Ingredients
                </li>
                <li>
                  <samp className="bold">Step 2: </samp> Weigh the Flour
                </li>
                <li>
                  <samp className="bold">Step 3: </samp> Beat the Eggs
                </li>
                <li>
                  <samp className="bold">Step 4: </samp> Form a Well
                </li>
                <li>
                  <samp className="bold">Step 5: </samp> Add Eggs and Fold
                </li>
              </ul>
              <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            </div>
          </div>
          <div className="card-check">
            <img src={viewRecipe.recipe2} alt="" />
            <div className="card-check-dis">
              <h2 className="margin">chicken skewers</h2>
              <p className="margin">
                Executive Chef: This is the top chef in a kitchen, responsible
                for creating the menu, managing the kitchen staff, ordering
                supplies, and ensuring that the food is prepared to the highest
                quality standards.
              </p>
              <ul className="margin">
                <li>
                  <samp className="bold">Step 1: </samp> Ingredients
                </li>
                <li>
                  <samp className="bold">Step 2: </samp> Weigh the Flour
                </li>
                <li>
                  <samp className="bold">Step 3: </samp> Beat the Eggs
                </li>
                <li>
                  <samp className="bold">Step 4: </samp> Form a Well
                </li>
                <li>
                  <samp className="bold">Step 5: </samp> Add Eggs and Fold
                </li>
              </ul>
              <Rating style={{ maxWidth: 180 }} value={2.8} readOnly />
            </div>
          </div>
          <div className="card-check">
            <img src={viewRecipe.recipe3} alt="" />
            <div className="card-check-dis">
              <h2>Vegetable Soup</h2>
              <p className="margin">
                Executive Chef: This is the top chef in a kitchen, responsible
                for creating the menu, managing the kitchen staff, ordering
                supplies, and ensuring that the food is prepared to the highest
                quality standards.
              </p>
              <ul className="margin">
                <li>
                  <samp className="bold">Step 1: </samp> Ingredients
                </li>
                <li>
                  <samp className="bold">Step 2: </samp> Weigh the Flour
                </li>
                <li>
                  <samp className="bold">Step 3: </samp> Beat the Eggs
                </li>
                <li>
                  <samp className="bold">Step 4: </samp> Form a Well
                </li>
                <li>
                  <samp className="bold">Step 5: </samp> Add Eggs and Fold
                </li>
              </ul>
              <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;
