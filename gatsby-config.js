module.exports = {
  siteMetadata: {
    title: "Don't be Shy",
    description: "A proof of concept site using a headless CMS.",
    url: "https://dbs-headless-poc.netlify.app",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `./static/img`,
        name: 'uploads',
      },
    },
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
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images-v2',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
              quality: 90,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: "./src/cms/cms.js",
      },
    },
  ],
};
