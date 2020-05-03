module.exports = ({ contentPath = "content" }) => ({
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }) => pathToType(node.relativeDirectory),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alltagshunde Rheinbach - Carolin Henseler`,
        short_name: `Alltagshunde`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5aa02c`,
        display: `minimal-ui`,
        icon: `content/assets/icon2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "400i", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
})

const pathToType = path => {
  const type = `${path.split('/')[0]}Yaml`
  return type[0].toUpperCase() + type.substring(1)
}
