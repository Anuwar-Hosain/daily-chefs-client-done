import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <section>
      <div className="size login">
        <h1 className="login-title">Please Login...</h1>
        <div className="login-form">
          <form onSubmit={handleLogin}>
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
            <h4 className="error">{error}</h4>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
