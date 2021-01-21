import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/template-layout";
import BlogLink from  "../components/component-blog-link";

const BlogPage = ({ 
  data,
  data: {
    allMarkdownRemark: { edges },
  },
  location 
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => <BlogLink key={ edge.node.id } post={ edge.node } />);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout headerTitle={ siteTitle } footerTitle={ siteTitle } location={ location } >
      <h1>Blog Posts</h1>
      <ul>
        { Posts }
      </ul>
    </Layout>
  )
}

export default BlogPage;

export const blogQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
          }
        }
      }
    }
  }
`;