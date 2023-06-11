import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `my-profile`,
    siteUrl: `https://sharma-shivam.netlify.app/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-sass', 'gatsby-plugin-material-ui'],
}

export default config
