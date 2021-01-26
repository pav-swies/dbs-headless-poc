import React from "react";

import Header from "../components/component-header";
import Footer from "../components/component-footer";

const Layout = ({ headerTitle, children, theme }) => {

  return (
    <div className={`global-wrapper theme-${ theme }`}>
      <div className="wrapper">
        <Header title={headerTitle} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
