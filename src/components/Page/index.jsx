import React from "react"

import { Tiles } from '@rebass/layout'
import Layout from "../layout"
import SEO from "../seo"
import BuildingBlock from '../BuildingBlock'
import { css } from "@emotion/core"

const Page = ({ data, pageContext, location }) => {
  const { title, description, slug, buildingBlocks } = pageContext
  console.log('BB', buildingBlocks)

  const rows = []
  let currentRow = {}

  buildingBlocks.forEach(buildingBlock => {
    if (buildingBlock.hasOwnProperty('width') && buildingBlock.width !== '1') {
      const columns = getNumberOfColumns(buildingBlock.width);
      if (!currentRow.openSlots) {
        currentRow = { type: 'tiles', columns: columns, openSlots: columns, buildingBlocks: [] }
      }
      currentRow.openSlots = currentRow.openSlots - 1;
      currentRow.buildingBlocks.push(buildingBlock);

      if (!currentRow.openSlots) {
        rows.push(currentRow)
        currentRow = {}
      }

    } else {
      rows.push({ type: 'container', buildingBlock: buildingBlock })
    }

  })
  console.log('BBR', rows)


  return (
    <Layout>
      <SEO title={title} description={description} />
      {rows.map(row => row.type === 'container'
        ? <BuildingBlock {...row.buildingBlock} />
        : <Tiles css={css`width: 100%;`} columns={getResponsiveColumns(row.columns)}>
          {row.buildingBlocks.map(buildingBlock => <BuildingBlock {...buildingBlock} />)}
        </Tiles>
      )}
    </Layout>
  )
}

export default Page

const getNumberOfColumns = width => {
  switch (width) {
    case '1/4':
      return 4;
    case '1/3':
      return 3;
    case '1/2':
      return 2;
    default:
      return 1;
  }
}

const getResponsiveColumns = numberOfColumns => {
  switch (numberOfColumns) {
    case 4:
      return [1, 2, 4];
    case 3:
      return [1, 2, 3];
    case 2:
      return [1, 2];
    default:
      return 1;
  }
}
