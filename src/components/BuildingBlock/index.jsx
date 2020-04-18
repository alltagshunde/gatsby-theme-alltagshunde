import React from "react"
import PropTypes from 'prop-types'

import Text from './Text'
import Image from './Image'
import Card from "./Card"

const BuildingBlock = ({ type, ...specific }) => {

  switch (type) {
    case 'text':
      return <Text {...specific} />
    case 'image':
      return <Image {...specific} />
    case 'card':
      return <Card {...specific} />
    default:
      return null
  }
}

BuildingBlock.propTypes = {
  type: PropTypes.string.isRequired,
}

BuildingBlock.defaultProps = {
}

export default BuildingBlock
