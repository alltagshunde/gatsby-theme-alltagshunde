import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading, Button } from 'rebass'
import { css } from '@emotion/core'
import Image from '../Image'

const Card = ({ span, heading, text, image, button }) => {

    //TODO: variant?
    const noInnerMargin = css`
        & p {
            margin-bottom: 0;
        }
        & p:first-child {
            margin-top: 0;
        }
    `

    //TODO: cms button link with page ref
    return (
        <Flex variant='card' sx={{ gridColumn: span }} bg='secondaryMuted' color='white' width={1} my={4} flexDirection='column' justifyContent='space-between' alignItems='center'>
            {image && <Image image={image} isBanner={true} mb={2} />}
            {heading && <Heading as='h3' fontSize={4} mb={2}>{heading}</Heading>}
            {text && <Box width='1' css={noInnerMargin} mb={2} dangerouslySetInnerHTML={{ __html: text }} />}
            {button && <Button variant='primary' py={1} mb={2}>{button}</Button>}
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
