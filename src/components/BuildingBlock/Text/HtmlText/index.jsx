import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { css } from '@emotion/core'

const HtmlText = ({ text }) => {

    const noInnerMargin = css`
        & p {
            margin-bottom: 0;
        }
        & p:first-child {
            margin-top: 0;
        }
    `

    return (
        <Box width='1' css={noInnerMargin} dangerouslySetInnerHTML={{ __html: text }} />
    )
}

HtmlText.propTypes = {
    text: PropTypes.string.isRequired,
}

HtmlText.defaultProps = {
}

export default HtmlText
