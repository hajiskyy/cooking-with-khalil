import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ClockIcon from "../icons/clock.svg"
import Img from "gatsby-image"

export default function Featured() {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(limit: 1, filter: {frontmatter: {featured: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
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
          ingredients
          featured
          date
          rating
          time
        }
        html
      }
    }
  }
`)
  return (
    <section className="bg-light-tetiary">
      <h1 className="sub-heading">FEATURED</h1>
      <div className="w-full flex md:grid-cols-2 justify-between items-center flex-col md:flex-row mt-8">
        <div className=" w-w250 h-h250 md:w-w300 md:h-h300 flex-shrink-0 mx-auto md:h-400 md:w-400 relative">
          <Img className="featured-img rounded-lg w-full h-full object-cover" fluid={data.allMarkdownRemark.nodes[0].frontmatter.thumbnail.childImageSharp.fluid} alt={data.allMarkdownRemark.nodes[0].title} />
        </div>
        <div className="flex flex-col w-full  justify-center items-center my-5 md:pl-10">
          <h3 className="text-3xl w-full text-center md:text-left font-bold">{data.allMarkdownRemark.nodes[0].title}</h3>
          <span className="my-3 text-center md:text-left" dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[0].html }}></span>
          <span className="flex justify-center md:justify-start items-center w-full my-8">
            <div className="flex ">
              <ClockIcon className="text-light-primary mr-2 stroke-3" />
              <span className="italic font-semibold">{data.allMarkdownRemark.nodes[0].frontmatter.time} min</span>
            </div>
            <Link to={data.allMarkdownRemark.nodes[0].fields.slug} className="btn">Make This</Link>
          </span>
        </div>
      </div>
    </section>
  )
}
