const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Bowling Website",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, './src/components')
        },
        extensions: [ '.jpeg', '.ts', '.tsx' ]
      }
    }
  ],
};
