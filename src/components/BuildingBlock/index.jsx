import React from "react"
import PropTypes from 'prop-types'

import Text from './Text'
import Image from './Image'
import Card from "./Card"

const BuildingBlock = ({ type, ...specific }) => {

  let component = null;
  console.log(type, specific)

  switch (type) {
    case 'text':
      component = <Text {...specific} />
      break;
    case 'image':
      component = <Image {...specific} />
      break;
    case 'card':
      component = <Card {...specific} />
      break;
  }

  return component
}

BuildingBlock.propTypes = {
  type: PropTypes.string.isRequired,
}

BuildingBlock.defaultProps = {
}

export default BuildingBlock
