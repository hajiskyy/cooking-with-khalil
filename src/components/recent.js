import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ClockIcon from "../icons/clock.svg"

const Posts = ({ posts }) => {
  return posts.map((post, i) => (
    <div className="card" key={i}>
      <Link to={post.fields.slug}>
        <div className="card-content-image">
          <img className="card-image" src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
        </div>
        <div className="card-content-text">
          <div className="card-title">{post.frontmatter.title}</div>
          <div className="card-content-items">
            <ClockIcon className="text-light-primary mr-2" />
            <span>{post.frontmatter.time} min </span>
          </div>
          <div className="card-content-items flex mt-3">
            {
              post.frontmatter.tags.map((tag, index) => <span className="mr-5 bg-light-secondary opacity-75 text-light-primary font-bold p-1 rounded" key={index}>#{tag}</span>)
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
              thumbnail
              title
              tags
              steps
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
  console.log(data)

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
