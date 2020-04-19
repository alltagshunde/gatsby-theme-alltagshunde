import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from 'rebass'
import Image from '../Image'
import Link from './Link'
import HtmlText from '../Text/HtmlText'

const Card = ({ span, heading, text, image, button, buttonLink, innerWidth }) => {

    const responsiveWidth = innerWidth === '3/4'
        ? [1, 1, 3 / 4]
        : innerWidth === '1/2'
            ? 1 / 2
            // : width === '1/4'
            //     ? [1, 3 / 4, 1]
            : 1

    return (
        <Flex variant='card'
            justifySelf='center'
            sx={{ gridColumn: span, '& > div,h3,a': { marginBottom: [1, 2, 3] }, borderRadius: 'default' }}
            bg='secondaryMuted'
            color='white'
            width={responsiveWidth}
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'>
            {image && <Image image={image} isBanner={true} to={buttonLink} />}
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
