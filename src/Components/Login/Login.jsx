import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="size login">
        <h1 className="login-title">Please Login...</h1>
        <div className="login-form">
          <form>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email.."
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password.."
            />
            <div className="login-new">
              <p>
                New here? <Link to="/register">Create an account</Link>
              </p>
            </div>
            <br />
            <input type="submit" value="Login" className="login-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
