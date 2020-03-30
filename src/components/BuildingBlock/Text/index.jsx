import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading } from 'rebass'
import { css } from '@emotion/core'

const Text = ({ width, heading, text, headingLevel, headingSize, headingCentered }) => {

    const responsiveWidth = width === '1/3' ? [1, 1 / 2, 1 / 3] : width === '1/2' ? [1, 1 / 2] : 1
    const headingTag = `h${headingLevel}`
    const headingAlign = headingCentered ? 'center' : 'start'
    const headingSizeIndex = (headingSize || headingLevel) - 1
    const headingFontSize = [7, 6, 5, 4, 3, 2][headingSizeIndex]
    const noInnerMargin = css`
        & p {
            margin-bottom: 0;
        }
        & p:first-child {
            margin-top: 0;
        }
    `

    return (
        <Flex width={responsiveWidth} my={4} flexDirection='column' alignItems={headingAlign}>
            <Heading variant='caps' as={headingTag} fontSize={headingFontSize} mb={1}>{heading}</Heading>
            <Box width='1' css={noInnerMargin} dangerouslySetInnerHTML={{ __html: text }} />
        </Flex>
    )
}

Text.propTypes = {
    width: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string.isRequired,
    headingLevel: PropTypes.number,
    headingSize: PropTypes.number,
    headingCentered: PropTypes.bool,
}

Text.defaultProps = {
    width: '1',
    headingLevel: 1,
    headingCentered: true,
}

export default Text
