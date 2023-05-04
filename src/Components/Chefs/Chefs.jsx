import React, { useEffect, useState } from "react";
import "./Chefs.css";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  console.log(chefs);
  return (
    <section className="size chefs-main">
      <div className="chefs">
        <h1 className="chefs-title">
          Great Chefs Ready To Make <samp className="title-che">Best Food</samp>
        </h1>
        {chefs.map((chef) => (
          <ChefCard></ChefCard>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
