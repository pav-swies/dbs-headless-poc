const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const redTemplate = path.resolve(`./src/templates/template-red-post.js`);
  const blueTemplate = path.resolve(`./src/templates/template-blue-post.js`);

  return graphql(`
    {
      posts: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }  
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.posts.edges;

    posts.forEach(({ node }) => {
      if (node.frontmatter.type === 'red') {
        createPage({
          path: node.fields.slug,
          component: redTemplate,
          context: {
            id: node.id,
          }
        });
      } else {
        createPage({
          path: node.fields.slug,
          component: blueTemplate,
          context: {
            id: node.id,
          }
        });
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  };
};
