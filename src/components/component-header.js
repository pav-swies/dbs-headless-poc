import React from "react";
import { Link } from "gatsby";

const Header = ({ title }) => {
  return (
    <header className="header">
      <Link className="header-logo" to="/">{title}</Link>
      <Link to="/posts/">All Posts</Link>
    </header>
  );
};

export default Header;
