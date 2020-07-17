import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ClockIcon from "../icons/clock.svg"

export default function Featured() {

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

  return (
    <section className="bg-light-tetiary">
      <h5 className="sub-heading">FEATURED</h5>
      <div className="w-full flex md:grid-cols-2 justify-between items-center flex-col md:flex-row mt-8">
        <div className=" w-w250 h-h250 md:w-w300 md:h-h300 flex-shrink-0 mx-auto md:h-400 md:w-400 relative">
          <Img className="featured-img rounded-lg w-full h-full" fluid={data.sectionImage.childImageSharp.fluid} objectFit="cover"  />
        </div>
        <div className="flex flex-col w-full  justify-center items-center my-5 md:pl-10">
          <h1 className="text-3xl w-full text-center md:text-left font-bold">Title</h1>
          <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula nisi, cursus sit amet hendrerit nec, porta ut velit. Maecenas tristique, dui sit amet sollicitudin sagittis, ante metus blandit nisi, nec interdum sapien lorem eu purus. Phasellus efficitur ligula ante, vitae congue tortor consequat at. Quisque ullamcorper vitae lacus dignissim mollis. Duis dignissim tellus quis nisl fringilla vehicula. Etiam placerat</p>
          <span className="flex items-center w-full my-8">
            <div className="flex">
              <ClockIcon className="text-light-primary mr-2" />
              <span className="italic">10 min</span>
            </div>
            <button className="btn">Make This</button>
          </span>
        </div>
      </div>
    </section>
  )
}
