module.exports = {
  siteMetadata: {
    title: "Headless PoC",
    titleTemplate: "%s · The Real Hero",
    description: "A proof of concept site using a headless CMS.",
    url: "https://dbs-headless-poc.netlify.app",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
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
        name: "blog",
        path: "./content/",
      },
      __key: "blog",
    },
  ],
};
