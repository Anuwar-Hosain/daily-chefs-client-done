import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="main-header">
        <nav className="size header">
          <div>
            <h4 className="logo">
              Daily <samp className="chef">Chefs</samp>
            </h4>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/">
                  <BsPersonCircle></BsPersonCircle>
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
