import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidenav from "../components/sidenav"
import SideNavProvider from "../components/sideNavProvider"
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import ClockIcon from "../icons/clock.svg"

const Posts = ({ posts }) => {
  return posts.map((post, i) => (
    <div className="card" key={i}>
      <Link to={post.node.fields.slug}>
        <div className="card-content-image">
          <img className="card-image" src={post.node.frontmatter.thumbnail} alt={post.node.frontmatter.title} />
        </div>
        <div className="card-content-text">
          <div className="card-title">{post.node.frontmatter.title}</div>
          <div className="card-content-items font-semibold">
            <ClockIcon className="text-light-primary mr-2 stroke-3" />
            <span>{post.node.frontmatter.time} min </span>
          </div>
          <div className="card-content-items flex mt-3">
            {
              post.node.frontmatter.tags.map((tag, index) => <span className="mr-5 bg-light-secondary opacity-75 text-light-primary font-bold p-1 rounded" key={index}>#{tag}</span>)
            }
          </div>
        </div>
      </Link>
    </div>
  ))
}


const Tag = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <SideNavProvider>
        <Sidenav siteTitle={siteTitle} />
        <Header title={pageContext.tag} siteTitle={siteTitle} />
      </SideNavProvider>
      <section>
        <div className="card-deck">
          <Posts posts={posts} />
        </div>
      </section>
    </Layout>

  )
}

export default Tag


export const TagsQuery = graphql`
query TagsPage ($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
              time
            }
          }
        }
      }
    }
`
