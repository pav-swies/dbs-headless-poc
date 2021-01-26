import React from "react";
import { graphql } from "gatsby";

import Layout from "./template-layout";
import Seo from "../components/component-seo";

const RedPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const pageTitle = `${frontmatter.title} | ${data.site.siteMetadata.title}`;

  return (
    <Layout headerTitle={siteTitle} theme="red">
      <Seo
        title={pageTitle}
        description={data.markdownRemark.excerpt}
      />
      <article className="red-post">
        <header className="red-post-header">
          <h1 className="red-post-heading">{frontmatter.title}</h1>
          <p className="red-post-date">{frontmatter.date}</p>
        </header>
        <div className="red-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default RedPost;

export const RedPostQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;