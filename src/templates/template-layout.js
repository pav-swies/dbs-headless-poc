import React from "react";

import Header from "../components/component-header";
import Footer from "../components/component-footer";

const Layout = ({ headerTitle, footerTitle, location, children }) => {
  return (
    <div className="wrapper">
      <Header title={ headerTitle } location={ location } />
      <main>
        { children }
      </main>
      <Footer title={ footerTitle } />
    </div>
  );
};

export default Layout;
