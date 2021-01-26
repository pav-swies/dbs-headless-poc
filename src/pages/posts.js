import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/template-layout";
import Seo from "../components/component-seo";
import PostLink from  "../components/component-post-link";

const PostsPage = ({ 
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
    <Layout headerTitle={siteTitle} theme="beige">
      <Seo
        title={siteTitle}
        description={siteDescription}
      />
      <div className="posts-header">
        <h1 className="posts-heading">All Posts -</h1>
      </div>
      <ul className="posts-list">
        {Posts}
      </ul>
    </Layout>
  )
}

export default PostsPage;

export const PostsQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
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