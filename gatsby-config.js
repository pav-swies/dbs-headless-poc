module.exports = {
  siteMetadata: {
    title: "Don't be Shy",
    description: "A proof of concept site using a headless CMS.",
    url: "https://dbs-headless-poc.netlify.app",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: "./src/cms/cms.js",
      },
    },
  ],
};
