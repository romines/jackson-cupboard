module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cupboard.adamromines.me`,
        protocol: `http`,
        hostingWPCOM: false,
        verboseOutput: true,
      },
    },
  ],
}
