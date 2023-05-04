import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <section className="size news">
      <h1 className="news-title">Subscribe to our Newsletter</h1>
      <div className="email">
        <input
          type="email"
          name="email"
          className="email-news"
          placeholder="Enter your email"
        />
        <input type="submit" value="Submit" className="news-btn" />
      </div>
    </section>
  );
};

export default Email;
