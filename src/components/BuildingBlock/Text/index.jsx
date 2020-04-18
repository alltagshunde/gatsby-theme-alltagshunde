import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from 'rebass'
import HtmlText from './HtmlText'


const Text = ({ width, heading, text, headingLevel, headingSize, headingCentered, headingColorPrimary, span, my }) => {

    const responsiveWidth = 1//width === '1/3' ? [1, 1 / 2, 1 / 3] : width === '1/2' ? [1, 1 / 2] : 1
    const headingTag = `h${headingLevel}`
    const headingAlign = headingCentered ? 'center' : 'start'
    const headingSizeIndex = (headingSize || headingLevel) - 1
    const headingFontSize = [7, 6, 5, 4, 3, 2][headingSizeIndex]
    const headingMargin = !text || text === '' ? 0 : [4, 4, 4, 3, 3, 3][headingSizeIndex]
    const headingColor = headingColorPrimary ? 'primary' : 'secondary'

    return (
        <Flex sx={{ gridColumn: span }} my={my} width={responsiveWidth} flexDirection='column' alignItems={headingAlign}>
            <Heading color={headingColor} variant='caps' as={headingTag} fontSize={headingFontSize} mb={headingMargin}>{heading}</Heading>
            <HtmlText text={text} />
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
    my: PropTypes.number,
}

Text.defaultProps = {
    width: '1',
    headingLevel: 1,
    headingCentered: true,
    my: 0
}

export default Text
