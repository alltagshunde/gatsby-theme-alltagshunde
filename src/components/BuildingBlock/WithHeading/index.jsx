import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading, Box } from 'rebass'

const WithHeading = ({ heading, children, headingLevel, headingSize, headingCentered, headingColorPrimary, span, my, noMargin }) => {

    const headingTag = `h${headingLevel}`
    const headingAlign = headingCentered ? 'center' : 'start'
    const headingSizeIndex = (headingSize || headingLevel) - 1
    const headingFontSize = [[4, 5, 6], [3, 4, 5], [2, 3, 4], [1, 2, 3], [1, 2], 1][headingSizeIndex]
    const headingMargin = noMargin && headingSizeIndex > 0 ? 0 : [[2, 3, 4], [2, 3, 4], [2, 3, 4], [1, 2, 3], [1, 2, 3], [1, 2, 3]][headingSizeIndex]
    const headingColor = headingColorPrimary ? 'primary' : 'secondary'

    return (
        <Flex sx={{ gridColumn: span }} py={my} width={1} flexDirection='column' alignItems={headingAlign}>
            {heading && <Box mb={headingMargin}
                sx={{
                    px: headingLevel == 1 ? [2, 3, 4] : 0, // eslint-disable-line eqeqeq
                    borderBottomStyle: 'solid',
                    borderBottomWidth: headingLevel == 1 ? '2px' : 0, // eslint-disable-line eqeqeq
                    borderColor: 'primary'
                }}>
                <Heading color={headingColor}
                    variant='caps'
                    as={headingTag}
                    fontSize={headingFontSize}>
                    {heading}
                </Heading>
            </Box>}
            {children}
        </Flex>
    )
}

WithHeading.propTypes = {
    span: PropTypes.number,
    heading: PropTypes.string,
    children: PropTypes.node,
    headingLevel: PropTypes.number,
    headingSize: PropTypes.number,
    headingCentered: PropTypes.bool,
    my: PropTypes.number,
}

WithHeading.defaultProps = {
    headingLevel: 1,
    headingCentered: true,
    my: 0
}

export default WithHeading
