import React from 'react'
import Layout from "../components/layout"

import '../scss/index.scss'

export default function RecipeTemplate({ pageContext: { id } }) {
  return (
    <Layout>
      {id}
    </Layout>
  )
}
