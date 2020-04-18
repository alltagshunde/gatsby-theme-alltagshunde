import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from 'rebass'
import Image from '../Image'
import Link from './Link'
import HtmlText from '../Text/HtmlText'

const Card = ({ span, heading, text, image, button, buttonLink }) => {

    return (
        <Flex variant='card'
            sx={{ gridColumn: span, '& > div,h3,a': { marginBottom: [1, 2, 3] } }}
            bg='secondaryMuted'
            color='white'
            width={1}
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'>
            {image && <Image image={image} isBanner={true} />}
            {heading && <Heading as='h3' fontSize={3} variant='caps' textAlign='center'>{heading}</Heading>}
            {text && <HtmlText text={text} />}
            {button && <Link to={buttonLink}>{button}</Link>}
        </Flex>
    )
}

Card.propTypes = {
    span: PropTypes.number,
    heading: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
    button: PropTypes.string,
}

Card.defaultProps = {
    span: 1,
}

export default Card
