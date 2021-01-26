import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/template-layout";
import Seo from "../components/component-seo";
import PostLink from "../components/component-post-link";

const IndexPage = ({
  data,
  data: {
    allMarkdownRemark: { edges },
  }
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <Layout headerTitle={ siteTitle } theme="beige">
      <Seo
        title={siteTitle}
        description={siteDescription}
      />
      <section className="home-hero">
        <h1 className="home-heading">Headless PoC -</h1>
        <p className="home-subheading">Built with <a href="https://gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>,<br /> content managed with<br /> <a href="https://www.netlifycms.org/" target="_blank" rel="noreferrer">Netlify CMS</a>.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi necessitatibus blanditiis eaque cum enim quis nisi minima, accusantium sunt.</p>
      </section>
      <div className="home-featured">
        <h2 className="home-heading">★ Featured Posts -</h2>
        <ul className="home-featured-list">
          {Posts}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage;

export const IndexQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {featured: {eq: true}}},
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            featured
            date(formatString: "Do MMMM YYYY")
            title
            type
          }
        }
      }
    }
  }
`;