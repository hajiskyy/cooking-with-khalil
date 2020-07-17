import React , { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Sidenav from "../components/sidenav"

const Layout = ({ children }) => {
  const [sideNav, toggle] = useState(false);

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
    <>
      <Sidenav siteTitle={siteTitle} sideNav={sideNav} toggle={toggle} />
      <Header siteTitle={siteTitle} sideNav={sideNav} toggle={toggle} />
        <main>{children}</main>
      <Footer siteTitle={siteTitle} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
