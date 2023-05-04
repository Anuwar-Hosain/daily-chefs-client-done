import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Register = () => {
  return (
    <section>
      <div className="size login">
        <h1 className="login-title">Please Register...</h1>
        <div className="login-form">
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
            />
            <br />
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your photo URL..."
            />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email.."
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create your password.."
            />
            <div className="login-new">
              <p>
                Already have an Account? <Link to="/login">Login</Link>
              </p>
            </div>
            <br />
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
        <div className="g-g">
          <div className="google">
            <BsGoogle></BsGoogle>
            <h3>Google</h3>
          </div>
          <div className="google">
            <BsGithub></BsGithub>
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
