import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import ClockIcon from "../icons/clock.svg"

export default function Recent() {
  const data = useStaticQuery(graphql`
  query {
    sectionImage: file(relativePath: { eq: "food.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  const items = [
    {
      id: 1,
      title: "Title",
      image: data.sectionImage.childImageSharp.fluid,
      time: 10
    },
    {
      id: 2,
      title: "Title",
      image: data.sectionImage.childImageSharp.fluid,
      time: 10
    },
    {
      id: 3,
      title: "Title",
      image: data.sectionImage.childImageSharp.fluid,
      time: 10
    },
  ]

  return (
    <section className="bg-white text-center pb-0">
      <h5 className="sub-heading text-left">RECENT</h5>
      <Cards>
        {items.map(item => <Card item={item} key={item.id} />)}
      </Cards>
      <Link to="#" className="btn inline-block text-center bg-light-secondary text-light-primary mx-auto mt-10">Explore Recipes</Link>
    </section>
  )
}

function Cards({ children }) {
  return (
    <div className="card-deck mx-auto gap-5 grid grid-cols-1 md:grid-cols-3 w-full my-10 items-center justify-center">
      {children}
    </div>
  )
}
Cards.propTypes = {
  children: PropTypes.node.isRequired,
}

function Card({ item }) {
  return (
    <div className="w-full mx-auto card my-5 rounded-lg overflow-hidden shadow-lg">
      <Link to="#">
        <div className=" relative w-full h-64 ">
          <Img className="absolute object-cover h-full top-0 left-0 w-full" fluid={item.image} />
        </div>
      </Link>
      <div className="px-6 py-4 \">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <div className="flex">
          <ClockIcon className="text-light-primary mr-2" />
          <span>{item.time} min </span>
        </div>
      </div>
    </div>
  )
}