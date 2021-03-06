require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Sahil Yadav',
    siteUrl: 'https://sahilyadav.com',
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#44B284',
        showSpinner: false,
      },
    },
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cache',
    'gatsby-transformer-sqip',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify', // place as last in the array. ref: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify#how-to-use
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: [process.env.GA_TRACKING_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
