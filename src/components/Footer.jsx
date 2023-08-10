import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyTinerary</p>
      <ul className="footer-links">
        <li><Link to="/"><b>Home</b></Link></li>
        <li><Link to="cities"><b>Cities</b></Link></li>
        <li><Link to="login"><b>Login</b></Link></li>
      </ul>
      <p>
        <a
          href="https://github.com/Vassa94/mytinerary-IgnacioVassallo"
          aria-label="GitHub repository"
        >
          <i className="fab fa-github"></i><span> Ignacio Vassallo</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
