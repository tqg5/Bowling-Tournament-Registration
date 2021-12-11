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
          components: path.resolve(__dirname, './src/components'),
          store: path.resolve(__dirname, './src/store'),
          slices: path.resolve(__dirname, './src/store/slices'),
          utils: path.resolve(__dirname, './src/utils')
        },
        extensions: [ '.jpeg', '.ts', '.tsx', '.json' ]
      }
    }
  ],
};
