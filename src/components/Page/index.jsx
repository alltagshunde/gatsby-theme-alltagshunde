import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import BuildingBlock from '../BuildingBlock'

const Page = ({ data, pageContext, location }) => {
  const { title, description, slug, buildingBlocks } = pageContext
  console.log('BB', buildingBlocks)
  return (
    <Layout>
      <SEO title={title} description={description} />
      {buildingBlocks.map(buildingBlock => <BuildingBlock {...buildingBlock} />)}
    </Layout>
  )
}

export default Page
