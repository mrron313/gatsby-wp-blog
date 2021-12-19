module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-wp-blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "graphql",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
