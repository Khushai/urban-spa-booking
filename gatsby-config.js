module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "urban-spa-booking",
  },
  plugins: [
      "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-antd',
    },
      "jest-fetch-mock",
      "jest-transform-file",
  ],
};
