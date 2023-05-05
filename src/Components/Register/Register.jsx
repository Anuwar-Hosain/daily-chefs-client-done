import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="size login">
        <h1 className="login-title">Please Register...</h1>
        <div className="login-form">
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name..."
            />
            <br />
            <input
              type="text"
              name="photo"
              id="photo"
              required
              placeholder="Enter your photo URL..."
            />
            <br />
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
