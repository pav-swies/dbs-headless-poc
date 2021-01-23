import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <html lang="en" />
    </Helmet>
  );
};

export default Seo;
