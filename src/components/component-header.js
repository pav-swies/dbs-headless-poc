import React from "react";
import { Link } from "gatsby";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const links = (
    <div className="header-links">
      <Link to="/blog/">Blog</Link>
      <a href="/admin/">CMS</a>
    </div>
  );

  if (isRootPath) {
    return (
      <header className="header header--root">
        <h1 className="header-logo">{ title }</h1>
        { links }
      </header>
    );
  } else {
    return (
      <header className="header">
        <Link className="header-logo" to="/">{ title }</Link>
        { links }
      </header>
    );
  };
};

export default Header;
