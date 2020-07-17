import React, { useCallback } from 'react'
import Cancel from '../icons/cancel.svg'
import { Link } from 'gatsby'

export default function Sidenav({ siteTitle, sideNav, toggle }) {

  const toggleSideNav = useCallback(
    () => {
      toggle(sideNav ? !sideNav : sideNav);
    },
    [sideNav, toggle],
  )

  let className = "side-nav ";
  className += sideNav ? "translate-x-0" : "translate-x-full"
  return (
    <div className={className}>
      <div className="px-5 text-white h-16 w-full font-bold flex items-center justify-between">
        <span >{siteTitle}</span>
        <Cancel onClick={toggleSideNav} className="stroke-current stroke-4 cursor-pointer"/>
      </div>
      <div className="side-nav-links flex flex-col">
        <Link to="#">Recipes</Link>
        <Link to="#">About</Link>
      </div>
    </div >
  )
}
