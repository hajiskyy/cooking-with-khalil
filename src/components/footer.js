import React from 'react'
import TwitterIcon from '../icons/twitter.svg';
import FacebookIcon from '../icons/facebook.svg';
import InstagramIcon from '../icons/instagram.svg';
export default function Footer() {
  return (
    <>
      <footer className="text-white bg-light-primary flex justify-between items-center px-5 md:px-40 py-5">
        <></>
        <span>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <div className="flex">
          <TwitterIcon className="fill-white stroke-0" />
          <InstagramIcon className="mx-5" />
          <FacebookIcon className="fill-white stroke-0" />
        </div>
      </footer>
    </>
  )
}
