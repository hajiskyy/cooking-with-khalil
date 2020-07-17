import PropTypes from "prop-types"
import React, { useCallback } from "react"
import { Link } from "gatsby"
import Menu from "../icons/menu.svg"



const Header = ({ siteTitle, sideNav, toggle }) => {

  const toggleSideNav = useCallback(
    () => {
      toggle(!sideNav)
    },
    [sideNav,toggle],
  )

  return (
    <header className="w-full h-64 header flex flex-col items-center justify-center" >
      <nav className="w-full flex justify-between items-center px-5 md:px-16 lg:px-32 py-5">
        <Link to="/" className="text-left text-white">{siteTitle}</Link>

        <div className="text-white w-40 justify-around hidden md:flex">
          <Link to="recipes">Recipes</Link>
          <Link to="about">About</Link>
        </div>
        <Menu onClick={toggleSideNav} className="text-white md:hidden cursor-pointer" />
      </nav>
      <span className="text-3xl md:text-4xl font-bold text-center text-white w-full m-auto">{siteTitle}</span>
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
