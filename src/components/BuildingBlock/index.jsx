import React from "react"
import PropTypes from 'prop-types'

import Text from './Text'
import Image from './Image'

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
  }

  return component
}

BuildingBlock.propTypes = {
  type: PropTypes.string.isRequired,
}

BuildingBlock.defaultProps = {
}

export default BuildingBlock
