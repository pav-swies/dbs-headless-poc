import React from "react";
import { Link } from "gatsby";

const Footer = () => {

  return (
    <footer className="footer">
      <a href="/admin/">CMS</a>
      <Link to="/">GitHub</Link>
    </footer>
  );
};

export default Footer;
