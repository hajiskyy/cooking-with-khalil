import React from 'react'
import Layout from "../components/layout"
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'

function TagList({ tags }) {
  return tags.map((tag, i) => <li key={i}>
    <Link to={`/tags/${kebabCase(tag.fieldValue)}`}> {tag.fieldValue}</Link>
  </li>)
}

const Tags = ({ data }) => {

  const tags = data.allMarkdownRemark.group

  return (
    <Layout>
      <TagList tags={tags} />
    </Layout>
  )
}

export default Tags

export const TagsQuery = graphql`
  query TagsQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`