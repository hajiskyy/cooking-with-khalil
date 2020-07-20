import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidenav from "./sidenav"
import SideNavProvider from "./sideNavProvider"

const Layout = ({ children }) => {
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
      <SideNavProvider>
        <Sidenav siteTitle={siteTitle} />
        <Header siteTitle={siteTitle} />
      </SideNavProvider>
      <main>{children}</main>
      <Footer siteTitle={siteTitle} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
