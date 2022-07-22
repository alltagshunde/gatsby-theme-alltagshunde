import React from "react"
import PropTypes from 'prop-types'

import Text from './Text'
import Image from './Image'
import Card from "./Card"
import Contact from "./Contact"
import Message from "./Message"
import Booking from "./Booking"

const BuildingBlock = ({ type, ...specific }) => {

  switch (type) {
    case 'text':
      return <Text {...specific} />
    case 'image':
      return <Image {...specific} />
    case 'card':
      return <Card {...specific} />
    case 'contact':
      return <Contact {...specific} />
    case 'booking':
      return <Booking {...specific} />
    case 'message':
      return <Message {...specific} />
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
