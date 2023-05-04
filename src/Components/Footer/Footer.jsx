import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer-main">
      <div className="size footer">
        <div>
          <h4 className="logo-footer">
            Daily <samp className="chef">Chefs</samp>
          </h4>
          <p>
            Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc
            orc leo consequat vitae erat gravida lobortis nec et sagittis.
          </p>
          <div className="footer-icon">
            <BsFacebook className="footer-icon-b"></BsFacebook>
            <BsInstagram className="footer-icon-b"></BsInstagram>
            <BsTwitter className="footer-icon-b"></BsTwitter>
          </div>
        </div>
        <div>
          <h1>Contact Info</h1>
          <p>Address: New Hyde Park, NY 11040</p>
          <p>Email: example@info.com</p>
          <p>Call: (+91)-213-666-0027</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
