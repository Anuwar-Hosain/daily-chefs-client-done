import React from "react";
import "./ChefDetails.css";
import { useLoaderData } from "react-router-dom";
import { BsFillHandThumbsUpFill, BsFillHeartFill } from "react-icons/bs";

const ChefDetails = () => {
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
  console.log(chefData);
  return (
    <section className="size chef-details">
      <h1>Chef Details:</h1>
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
              <BsFillHeartFill></BsFillHeartFill>
            </p>
          </div>
        </div>
      </div>
      <div className="Chef-recipe">
        <h1>Check Chef Recipe</h1>
        <div className="check-cards">
          <div className="card">
            <img src={viewRecipe.recipe1} alt="" />
            <h2>Pasta</h2>
            <p>
              Executive Chef: This is the top chef in a kitchen, responsible for
              creating the menu, managing the kitchen staff, ordering supplies,
              and ensuring that the food is prepared to the highest quality
              standards.
            </p>
            <ul>
              <li>Step 1: Ingredients</li>
              <li>Step 2: Weigh the Flour</li>
              <li>Step 3: Beat the Eggs</li>
              <li>Step 4: Form a Well</li>
              <li>Step 5: Add Eggs and Fold</li>
            </ul>
          </div>
          <div className="card">
            <img src={viewRecipe.recipe2} alt="" />
            <h2>chicken skewers</h2>
            <p>
              Executive Chef: This is the top chef in a kitchen, responsible for
              creating the menu, managing the kitchen staff, ordering supplies,
              and ensuring that the food is prepared to the highest quality
              standards.
            </p>
            <ul>
              <li>Step 1: Ingredients</li>
              <li>Step 2: Weigh the Flour</li>
              <li>Step 3: Beat the Eggs</li>
              <li>Step 4: Form a Well</li>
              <li>Step 5: Add Eggs and Fold</li>
            </ul>
          </div>
          <div className="card">
            <img src={viewRecipe.recipe3} alt="" />
            <h2>Pasta</h2>
            <p>
              Executive Chef: This is the top chef in a kitchen, responsible for
              creating the menu, managing the kitchen staff, ordering supplies,
              and ensuring that the food is prepared to the highest quality
              standards.
            </p>
            <ul>
              <li>Step 1: Ingredients</li>
              <li>Step 2: Weigh the Flour</li>
              <li>Step 3: Beat the Eggs</li>
              <li>Step 4: Form a Well</li>
              <li>Step 5: Add Eggs and Fold</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;
