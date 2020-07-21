import React from 'react'
import Wave from '../icons/wave.svg'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const data = useStaticQuery(graphql`
  query {
    sectionImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return (
    <>
      <Wave className="fill-primary text-light-primary" />
      <section className="bg-light-primary">
        <h5 className="sub-heading text-white">ABOUT</h5>
        <div className="w-full flex justify-between items-center flex-col md:flex-row mt-16">
          <div className="image-container flex-shrink-0 w-w300 h-h300">
            <Img className="h-full w-full rounded-circle" fixed={data.sectionImage.childImageSharp.fixed} objectFit="cover" />
          </div>
          <div className="flex w-full flex-col justify-center items-center my-5 md:pl-10">
            <p className="my-3 text-white text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula nisi, cursus sit amet hendrerit nec, porta ut velit. Maecenas tristique, dui sit amet sollicitudin sagittis, ante metus blandit nisi, nec interdum sapien lorem eu purus. Phasellus efficitur ligula ante, vitae congue tortor consequat at. Quisque ullamcorper vitae lacus dignissim mollis. Duis dignissim tellus quis nisl fringilla vehicula. Etiam placerat</p>
          </div>
        </div>
      </section>
    </>
  )
}
