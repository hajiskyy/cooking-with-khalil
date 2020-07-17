

// exports.createPages = async({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const RecipeTemplate = require.resolve('./src/templates/recipeTemplates.js')

//   const reult = await qraphql(`
//     {
//       allMarkdownRemark(limis: 1000){
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter{
//               tags
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then((result) => {
//     if(result.errors){
//       results.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     console.log(result)

//   })
// }



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