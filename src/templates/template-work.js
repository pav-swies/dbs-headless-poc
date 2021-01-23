import React from "react";
import { graphql } from "gatsby";

import Layout from "./template-layout";
import Seo from "../components/component-seo";

const Work = ({ data, location }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const pageTitle = `${frontmatter.title} | ${data.site.siteMetadata.title}`;

  return (
    <Layout headerTitle={siteTitle} footerTitle={siteTitle} location={location} >
      <Seo
        title={pageTitle}
        description={data.markdownRemark.excerpt}
      />
      <article className="o-doc">
        <header className="o-doc__header">
          <p>-------- work template --------</p>
          <h1 className="o-doc__heading">{frontmatter.title}</h1>
          <p className="o-doc__date">{frontmatter.date}</p>
        </header>
        <div className="o-doc__content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default Work;

export const workQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;