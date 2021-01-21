const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve(`./src/templates/template-blog.js`);
  const workTemplate = path.resolve(`./src/templates/template-work.js`);

  return graphql(`
    {
      blog: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fileAbsolutePath: {regex: "/blog//"}}) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      work: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fileAbsolutePath: {regex: "/work//"}}) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const blog = result.data.blog.edges;
    const work = result.data.work.edges;

    blog.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: {
          id: node.id,
        },
      });
    });

    work.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: workTemplate,
        context: {
          id: node.id,
        },
      });
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
