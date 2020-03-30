import React from 'react'
import { Box, Heading } from 'rebass'

const Section = ({ width, title, children }) => {

    return (
        <Box width={width} mb={4}>
            <Heading variant='caps' as='h6' fontSize={2} mb={1} color='muted'>{title}</Heading>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Section
