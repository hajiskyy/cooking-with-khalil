import React, { useContext } from 'react'
import { Link } from "gatsby"
import Menu from "../icons/menu.svg"
import { sideNavContext } from "./sideNavProvider"

export default function Navbar({ siteTitle }) {
  const [, toggle] = useContext(sideNavContext)
  const toggleSideNav = () => {
    toggle(true)
  }
  return (
    <div className="w-full relative">
      <nav className="w-full flex justify-between items-center px-5 md:px-16 lg:px-32 py-5">
        <Link to="/" className="text-left text-white font-bold">{siteTitle}</Link>

        <div className="text-white w-40 justify-around hidden md:flex">
          <Link to="recipes">Recipes</Link>
          <Link to="about">About</Link>
        </div>
        <Menu onClick={toggleSideNav} className="text-white md:hidden cursor-pointer" />
      </nav>
    </div>
  )
}
