import React from 'react'
import PropTypes from 'prop-types'
import HtmlText from './HtmlText'
import WithHeading from '../WithHeading'


const Text = ({ text, ...rest }) => {

    return (
        <WithHeading {...rest} noMargin={!text}>
            <HtmlText text={text} />
        </WithHeading>
    )
}

Text.propTypes = {
    text: PropTypes.string,
}

Text.defaultProps = {
}

export default Text
