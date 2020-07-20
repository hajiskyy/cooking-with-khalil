import React from 'react'
import Layout from "../components/layout"
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import Header from "../components/header"
import Sidenav from "../components/sidenav"
import SideNavProvider from "../components/sideNavProvider"

function TagList({ tags }) {
  return tags.map((tag, i) => <li className="list-none text-3xl font-semibold " key={i}>
    <Link to={`/tag/${kebabCase(tag.fieldValue)}`}> {tag.fieldValue}</Link>
  </li>)
}

const Tags = ({ data }) => {

  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO title="Tags" />
      <SideNavProvider>
        <Sidenav siteTitle={siteTitle} />
        <Header title="Tags" siteTitle={siteTitle} />
      </SideNavProvider>
      <section className="h-screen">
        <div className="divide-y divide-gray-400">
          <TagList tags={tags} />
        </div>
      </section>
    </Layout>
  )
}

export default Tags

export const TagsQuery = graphql`
  query {
      site {
        siteMetadata {
          title
        }
      }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`