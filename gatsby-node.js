
// const _ = require('lodash')
const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const RecipeTemplate = require.resolve('./src/templates/recipeTemplate.js')

  try {
    const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000){
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter{
              tags
              title
            }
          }
        }
      }
    }
  `)
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id
      console.log(edge.node.fields.slug)
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: RecipeTemplate,
        context: {
          id
        }
      })
    });

  } catch (error) {
    console.error(error)
  }



}



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}