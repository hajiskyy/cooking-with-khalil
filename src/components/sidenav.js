import React, { useContext } from 'react'
import Cancel from '../icons/cancel.svg'
import { Link } from 'gatsby'
import { sideNavContext } from "./sideNavProvider"

export default function Sidenav({ siteTitle }) {

  const [sideNav, toggle] = useContext(sideNavContext)

  const toggleSideNav = () => {
    toggle(!sideNav)
  }

  let className = "side-nav ";
  className += sideNav ? "translate-x-0" : "translate-x-full"
  return (
    <div className={className}>
      <div className="px-5 top-0 text-white h-16 w-full font-bold flex items-center justify-between">
        <span >{siteTitle}</span>
        <Cancel onClick={toggleSideNav} className="stroke-current stroke-4 cursor-pointer"/>
      </div>
      <div className="side-nav-links flex flex-col">
        <Link to="/tags">Recipes</Link>
        <Link to="#about">About</Link>
      </div>
    </div >
  )
}
