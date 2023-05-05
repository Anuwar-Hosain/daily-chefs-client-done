import React, { useEffect, useState } from "react";
import "./Chefs.css";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://daily-chefs-server.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <section className="size chefs-main">
      <div className="chefs">
        <h1 className="chefs-title">
          Great Chefs Ready To Make <samp className="title-che">Best Food</samp>
        </h1>
        <div className="chefs-card">
          {chefs.map((chef) => (
            <ChefCard key={chef.code} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
