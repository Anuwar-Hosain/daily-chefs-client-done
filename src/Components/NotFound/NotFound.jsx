import React from "react";
import "./NotFound.css";
import notPage from "../../../public/404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="size">
      <div className="card-not">
        <img src={notPage} alt="" />
        <h1>Not Found Page</h1>
        <Link to="/">Go to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
