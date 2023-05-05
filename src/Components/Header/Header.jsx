import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
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
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
              <li>
                {user && (
                  <Link to="/">
                    <BsPersonCircle title={user?.email}> </BsPersonCircle>
                  </Link>
                )}
              </li>
              <li>
                {user ? (
                  <Link to="/" onClick={handleLogOut}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
