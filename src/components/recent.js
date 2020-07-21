import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ClockIcon from "../icons/clock.svg"
import Img from "gatsby-image"

const Posts = ({ posts }) => {
  return posts.map((post, i) => (
    <div className="card" key={i}>
      <Link to={post.fields.slug}>
        <div className="card-content-image">
          <Img className="card-image" fluid={post.frontmatter.thumbnail.childImageSharp.fluid} alt={post.frontmatter.title} />
        </div>
        <div className="card-content-text">
          <div className="card-title">{post.frontmatter.title}</div>
          <div className="card-content-items">
            <ClockIcon className="text-light-primary mr-2 stroke-3" />
            <span className="font-semibold">{post.frontmatter.time} min </span>
          </div>
          <div className="card-content-items flex mt-3">
            {
              post.frontmatter.tags.map((tag, index) => <span className="chip" key={index}>#{tag}</span>)
            }
          </div>
        </div>
      </Link>
    </div>
  ))
}



const Recent = () => {
  const data = useStaticQuery(graphql`
      query MyQuery {
        allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              tags
              steps
              time
              ingredients
              featured
              date
              Layout
              rating
            }
          }
        }
      }
    `)
  return (
    <section className="bg-white text-center pb-0">
      <h5 className="sub-heading">RECENT</h5>
      <div className="card-deck">
        <Posts posts={data.allMarkdownRemark.nodes}/>
      </div>
      <Link to="/tags" className="btn inline-block text-center bg-light-secondary text-light-primary mx-auto mt-10">Explore Recipes</Link>
    </section>
  )
}


export default Recent 
