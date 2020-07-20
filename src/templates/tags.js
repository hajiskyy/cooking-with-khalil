import React from 'react'
import { graphql, Link } from 'gatsby'

const Posts = ({ posts }) => {
  return posts.map((post, i) => (
    <li key={i}>
      <ol>
        <li>{post.node.frontmatter.title}</li>
        <li><Link to={post.node.fields.slug}>Make</Link></li>
      </ol>
    </li>
  ))
}


const Tags = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div>
      <Posts posts={posts} />
    </div>
  )
}

export default Tags


export const TagsQuery = graphql`
query TagsPage ($tag: String!) {
    allMarkdownRemark(
      limit: 1000 
      filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              thumbnail
              title
              tags
              featured
              date
            }
          }
        }
      }
    }
`
