module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: "portfolio ",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",

      },
      __key: "images",
    },
  ],
};
