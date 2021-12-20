/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
  const PageTemplate = path.resolve("./src/templates/page.js")

  const result = await graphql(`
    {
      allWpPage {
        edges {
          node {
            slug
            content
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.allWpPage.edges
  pages.forEach(page => {
    createPage({
      path: `/${page.node.slug}`,
      component: PageTemplate,
      context: page.node,
    })
  })
}