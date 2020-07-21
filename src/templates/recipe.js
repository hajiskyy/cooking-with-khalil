import React from 'react'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideNavProvider from "../components/sideNavProvider"
import Sidenav from "../components/sidenav"
import Navbar from '../components/navbar'
import ClockIcon from "../icons/clock.svg"
import ShareIcon from "../icons/share.svg"
import TwitterIcon from "../icons/twitter.svg"

import '../scss/index.scss'

const RecipeTemplate = ({ data, pageContext }) => {
  const recipe = data.markdownRemark.frontmatter;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout>
      <SEO title={recipe.title} />
      <SideNavProvider>
        <Sidenav siteTitle={siteTitle} />
        <Navbar background={true} siteTitle={siteTitle} />
      </SideNavProvider>
      <section>
        <div className="main-content lg:flex w-full">
          <div className="flex-shrink-0 mx-auto overflow-hidden rounded-lg w-full h-400 lg:w-w400 lg:h-h400">
            <img src={recipe.thumbnail} className="w-full h-full object-center" alt={recipe.title} />
          </div>
          <div className="text-content w-full lg:w-10/12 lg:pl-10">
            <h5 className="text-center lg:text-left text-4xl font-bold my-8 text-light-primary capitalize">{recipe.title}</h5>
            <span to="#" className="flex w-24 justify-between items-center rounded-full">
              <ClockIcon />
              {recipe.time}
            </span>
            <div className="w-full my-10">
              {recipe.tags.map((tag, i) => (<Link to={`/tag/${kebabCase(tag)}`} > <span className="chip mr-5" key={i}>#{tag}</span> </Link>))}
            </div>
            <span className="flex my-5 mx-auto justify-start items-center">
              <Link to="#" className="chip flex bg-white border border-light-primary w-24 justify-between px-3 items-center rounded-full">
                <ShareIcon />
            Share
          </Link>
              <Link to="#" className="chip flex bg-white border border-light-primary w-24 justify-between px-3 items-center rounded-full">
                <TwitterIcon className="stroke-0" />
            Tweet
          </Link>
            </span>
            <div className="text-left mt-10 lg:mt-5" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          </div>

        </div>

        <div className="content mt-10">

          <h4 className="mt-10 text-left text-2xl capitalize font-semibold">Ingredients</h4>
          <ul>
            {recipe.ingredients.map((item, i) => (<li key={'i' + i}>{item}</li>))}
          </ul>

          <h4 className="mt-10 text-left text-2xl capitalize font-semibold">Steps</h4>
          {recipe.steps.map((step, i) => (<li className="list-decimal" key={'s' + i}>{step}</li>))}
        </div>
      </section>
    </Layout>
  )
}

export default RecipeTemplate


export const RecipeQuery = graphql`
query RecipePage ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        ingredients
        steps
        thumbnail
        tags
      }
    }
  }
`