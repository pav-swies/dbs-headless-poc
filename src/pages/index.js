import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/template-layout";

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout headerTitle={ siteTitle } footerTitle={ siteTitle } location={ location } >
      <p className="hero-text">Built with <span><a href="https://gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></span>,<br /> content managed with<br /> <span><a href="https://www.netlifycms.org/" target="_blank" rel="noreferrer">Netlify CMS</a></span>.</p>
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;