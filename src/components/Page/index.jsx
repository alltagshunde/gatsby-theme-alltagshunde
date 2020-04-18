import React from "react"

import { Tiles } from '@rebass/layout'
import Layout from "./Layout"
import SEO from "./Seo"
import BuildingBlock from '../BuildingBlock'
import { css } from "@emotion/core"
import { Box } from "rebass"

const Page = ({ pageContext }) => {

  const { title, description, buildingBlocks } = pageContext
  const rows = computeRows(buildingBlocks)
  const verticalMargin = [2, 3, 4]

  return (
    <Layout>
      <SEO title={title} description={description} />
      {rows.map((row, index) => row.type === 'container'
        ? <Box variant='container' bg={getRowColor(index)} py={verticalMargin}><BuildingBlock {...row.buildingBlock} /></Box>
        : <Tiles px={[4, 5, 6]} bg={getRowColor(index)} sx={{ gridGap: [2, 3, 4] }} css={css`width: 100%;`} py={verticalMargin} columns={getResponsiveColumns(row.columns, row.buildingBlocks.length)}>
          {row.buildingBlocks.map(buildingBlock => <BuildingBlock {...buildingBlock} />)}
        </Tiles>
      )}
    </Layout>
  )
}

export default Page

const getRowColor = index => index % 2 === 1 ? 'primaryMuted2' : 'background'

const computeRows = buildingBlocks => {
  console.log('BB', buildingBlocks)

  const rows = []
  let currentRow = {}

  buildingBlocks.forEach(buildingBlock => {
    const hasCurrentRow = currentRow.hasOwnProperty('type')

    if (buildingBlock.hasOwnProperty('width') && buildingBlock.width !== '1') {
      const columns = getNumberOfColumns(buildingBlock.width)
      const span = getColumnSpan(buildingBlock.width)
      console.log('BBB', buildingBlock.type, hasCurrentRow, columns, span)

      if (!hasCurrentRow || columns !== currentRow.columns || span > currentRow.openSlots) {
        if (hasCurrentRow) {
          rows.push(currentRow)
        }
        currentRow = { type: 'tiles', columns: columns, openSlots: columns, buildingBlocks: [] }
      }

      currentRow.openSlots = currentRow.openSlots - span;
      buildingBlock.span = getResponsiveColumnSpan(span)
      currentRow.buildingBlocks.push(buildingBlock);

    } else {
      if (hasCurrentRow && !rows.includes(currentRow)) {
        rows.push(currentRow)
      }
      rows.push({ type: 'container', buildingBlock: buildingBlock })
    }

  })
  // incomplete last row
  if (currentRow.hasOwnProperty('type') && !rows.includes(currentRow)) {
    rows.push(currentRow)
  }

  console.log('BBR', rows)

  return rows
}

const getNumberOfColumns = width => {
  if (width.indexOf('/') > -1) {
    return parseInt(width.substr(width.indexOf('/') + 1))
  }
  return 1
}

const getColumnSpan = width => {
  if (width.indexOf('/') > -1) {
    return parseInt(width.substring(0, width.indexOf('/')))
  }
  return 1
}

const getResponsiveColumnSpan = span => {
  switch (span) {
    case 3:
      return ['span 1', 'span 2', 'span 3'];
    case 2:
      return ['span 1', 'span 1', 'span 2'];
    default:
      return 'span 1';
  }
}

const getResponsiveColumns = (numberOfColumns, actualColumns) => {
  switch (numberOfColumns) {
    case 4:
      return actualColumns === 2 ? [1, 3, 4] : [1, 2, 4];
    case 3:
      return [1, 2, 3];
    case 2:
      return [1, 2];
    default:
      return 1;
  }
}
