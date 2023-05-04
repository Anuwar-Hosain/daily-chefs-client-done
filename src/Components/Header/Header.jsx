import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonCircle } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="size header">
        <div>
          <h4>Daily Chefs</h4>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/">
                <BsPersonCircle></BsPersonCircle>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
