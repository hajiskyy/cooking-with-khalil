import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ClockIcon from "../icons/clock.svg"

export default function Featured() {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(limit: 1, filter: {frontmatter: {featured: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          thumbnail
          title
          tags
          steps
          ingredients
          featured
          date
          rating
        }
        html
      }
    }
  }
`)
  return (
    <section className="bg-light-tetiary">
      <h5 className="sub-heading">FEATURED</h5>
      <div className="w-full flex md:grid-cols-2 justify-between items-center flex-col md:flex-row mt-8">
        <div className=" w-w250 h-h250 md:w-w300 md:h-h300 flex-shrink-0 mx-auto md:h-400 md:w-400 relative">
          <img className="featured-img rounded-lg w-full h-full object-cover" src={data.allMarkdownRemark.nodes[0].frontmatter.thumbnail} alt={data.allMarkdownRemark.nodes[0].title} />
        </div>
        <div className="flex flex-col w-full  justify-center items-center my-5 md:pl-10">
          <h1 className="text-3xl w-full text-center md:text-left font-bold">{data.allMarkdownRemark.nodes[0].title}</h1>
          <span className="my-3 text-center md:text-left"  dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[0].html }}></span>
          <span className="flex justify-center md:justify-start items-center w-full my-8">
            <div className="flex ">
              <ClockIcon className="text-light-primary mr-2 stroke-3" />
              <span className="italic font-semibold">{data.allMarkdownRemark.nodes[0].frontmatter.time } min</span>
            </div>
            <Link to={data.allMarkdownRemark.nodes[0].fields.slug} className="btn">Make This</Link>
          </span>
        </div>
      </div>
    </section>
  )
}
