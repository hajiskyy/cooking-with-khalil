import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Featured from "../components/featured"
import Recent from "../components/recent"
import Header from "../components/header"
import About from "../components/about"
import Sidenav from "../components/sidenav"
import SideNavProvider from "../components/sideNavProvider"


import '../scss/index.scss'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO title="Home" />
      <SideNavProvider>
        <Sidenav siteTitle={siteTitle} />
        <Header title={false} siteTitle={siteTitle} />
      </SideNavProvider>
      <Featured />
      <Recent />
      <About />
    </Layout>
  )
}

export default IndexPage
