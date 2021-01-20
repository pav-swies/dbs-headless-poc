import React from "react";
import { Link } from "gatsby";

const Footer = ({ title }) => {

  return (
    <footer className="footer">
      <Link to="/">{ title }</Link>
      <Link to="/">GitHub</Link>
    </footer>
  );
};

export default Footer;
