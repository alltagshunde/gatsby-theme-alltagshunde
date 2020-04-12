import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading, Button } from 'rebass'
import { css } from '@emotion/core'
import Image from '../Image'
import Link from './Link'

const Card = ({ span, heading, text, image, button, buttonLink }) => {

    //TODO: variant?
    const noInnerMargin = css`
        & p {
            margin-bottom: 0;
        }
        & p:first-child {
            margin-top: 0;
        }
    `

    // TODO: put in theme, responsive
    const flexbox = css`
        grid-gap: 10px;
    `

    //TODO: cms button link with page ref
    return (
        <Flex variant='card' sx={{ gridColumn: span, gridGap: '30px' }} bg='secondaryMuted' color='white' width={1} my={4} flexDirection='column' justifyContent='space-between' alignItems='center'>
            {image && <Image image={image} isBanner={true} />}
            {heading && <Heading as='h3' fontSize={4}>{heading}</Heading>}
            {text && <Box width='1' css={noInnerMargin} dangerouslySetInnerHTML={{ __html: text }} />}
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
