module.exports = {
  siteMetadata: {
    title: `Rescatando Tradiciones`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@giojavi04`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rescatando tradiciones`,
        short_name: `R.T.`,
        start_url: `/`,
        background_color: `#F6F6EE`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-rescatando-tradiciones.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        printRejected: true,
        develop: true, // Activates purging in npm run develop
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
