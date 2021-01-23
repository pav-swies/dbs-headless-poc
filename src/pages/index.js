import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/template-layout";
import Seo from "../components/component-seo";

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <Layout headerTitle={ siteTitle } footerTitle={ siteTitle } location={ location } >
      <Seo
        title={siteTitle}
        description={siteDescription}
      />
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