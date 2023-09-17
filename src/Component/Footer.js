import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { handle } from "./handle";
const Footer = () => {
  return (
    <>
      <div className="footerContainner">
        <div>
          <Link  className='hedd' onClick={handle} >TheSiren</Link>
          <hr className="footerHr" />
          <span className="blo-des">
            Discover the latest happenings in Bollywood, Hollywood, fitness,
            food and technology with our blog app.
          </span>
        </div>
        <div>
          <h2 className="about1">Useful Links</h2>
          <hr className="footerHr1" />
          <Link to={"/technology"} onClick={handle}>
            <span className="text-gray">Technology</span>
          </Link>
          <Link to={"/bollywood"} onClick={handle}>
            <span className="text-gray">Bollywood</span>
          </Link>
          <Link to={"/hollywood"} onClick={handle}>
            <span className="text-gray">Hollywood</span>
          </Link>
          <Link to={"/fitness"} onClick={handle}>
            <span className="text-gray">Fitness</span>
          </Link>
          <Link to={"/food"} onClick={handle}>
            <span className="text-gray">Food</span>
          </Link>
        </div>{" "}
        <div>
          <h2 className="about1">Our Services</h2>
          <hr className="footerHr1" />
          <span className="links1">Github</span>
          <span className="links1">Help</span>
          <span className="links1">Contact</span>
        </div>
        <div className="Copyright">
          <p>© 2023 The Siren - A React Blog Website</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
