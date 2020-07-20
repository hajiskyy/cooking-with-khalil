import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"



const Header = ({ siteTitle, title }) => {
  return (
    <header className="relative w-full h-64 header flex flex-col items-center justify-center" >
      <Navbar siteTitle={siteTitle} />
      <span className="text-3xl md:text-4xl font-bold text-center text-white w-full m-auto">{title ? title : siteTitle}</span>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
