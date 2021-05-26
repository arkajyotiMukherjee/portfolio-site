const siteTitle = "Arkajyoti Mukherjee";
const siteDescription =
  "Portfolio site for Arkajyoti Mukherjee | Fullstack developer | React | Golang | Flutter.";
const siteAuthor = "arkajyotiMukherjee";
const siteUrl = "https://arkajyotimukherjee.com/";
const siteImage = `${siteUrl}/icons/siteImage.png`;
const siteKeywords = [
  "arko",
  "arkajyotiMukherjee",
  "arkajyoti",
  "mukherjee",
  "fullstack",
  "portfolio",
  "react",
  "golang",
  "flutter",
];

module.exports = {
  siteMetadata: {
    siteTitle,
    siteDescription,
    siteAuthor,
    siteUrl,
    siteKeywords,
    siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JJ0KJJW9X7", // Google Analytics / GA
        ],
      },
    },
  ],
};
