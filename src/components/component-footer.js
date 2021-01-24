import React from "react";

import NetlifyLogo from "../icons/netlify.svg";
import GithubLogo from "../icons/github.svg";

const Footer = () => {

  return (
    <footer className="footer">
      <p className="footer-disclaimer">DbS Headless PoC</p>
      <div>
        <a href="/admin/">
          <NetlifyLogo />
          <span className="visually-hidden">Netlify</span>
        </a>
        <a href="https://github.com/pav-swies/dbs-headless-poc" target="_blank" rel="noreferrer">
          <GithubLogo />
          <span className="visually-hidden">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
