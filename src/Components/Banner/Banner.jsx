import React from "react";
import "./Banner.css";
import banner from "../../../public/banner01.png";

const Banner = () => {
  return (
    <section className="main-banner">
      <div className="size banner">
        <div className="description">
          <h1 className="banner-title">Welcome Daily Chefs</h1>
          <p className="banner-para">
            While we work to ensure that product information is correct, on
            occasion manufacturers may alter their ingredient lists. Actual
            product packaging and materials may contain more and/or different
            information than that shown on our Web site. We recommend that you
            do not solely rely on the information presented and that you always
            read labels, warnings, and directions before using or consuming a
            product. For additional information about a information than that
            shown on our Web site. We recommend that you do not solely rely on
            the information presented and that you always read labels, warnings,
            and directions before using or consuming a product. For additional
            information about a information than that shown on our Web site. We
            recommend that you do not solely rely on the information presented
            and that you always read labels, warnings, and directions before
            using or consuming a product. For additional information about a
          </p>
          <button className="banner-btn">Check Quality Food</button>
        </div>
        <div className="pic">
          <img src={banner} alt="img" className="banner-img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
