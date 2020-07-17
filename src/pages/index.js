import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Featured from "../components/featured"
import Recent from "../components/recent"
import About from "../components/about"

import '../scss/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Featured/>
    <Recent/>
    <About/>
  </Layout>
)

export default IndexPage
