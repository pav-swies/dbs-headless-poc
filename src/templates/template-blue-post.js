import React from "react";
import { graphql } from "gatsby";

import Layout from "./template-layout";
import Seo from "../components/component-seo";

const BluePost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const pageTitle = `${frontmatter.title} | ${data.site.siteMetadata.title}`;

  return (
    <Layout headerTitle={siteTitle} theme="blue">
      <Seo
        title={pageTitle}
        description={data.markdownRemark.excerpt}
      />
      <article className="blue-post">
        <header className="blue-post-header">
          <h1 className="blue-post-title">{frontmatter.title}</h1>
          <div className="blue-post-info">
            <p className="blue-post-date">{frontmatter.date}</p>
            <p className={`blue-post-featured featured-${frontmatter.featured}`}>Featured ★</p>
          </div>
        </header>
        <div className="blue-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default BluePost;

export const BluePostQuery = graphql`
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
        featured
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;