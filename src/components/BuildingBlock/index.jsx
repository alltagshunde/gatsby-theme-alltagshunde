import React from "react"
import PropTypes from 'prop-types'

import Text from './Text'
import Image from './Image'

const BuildingBlock = ({ type, ...specific }) => {

  let component = null;
  console.log(type, specific)

  switch (type) {
    case 'text':
      component = <Text title={specific.heading}>{specific.text}</Text>
      break;
    case 'image':
      component = <Image title={specific.caption} src={specific.image} />
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
