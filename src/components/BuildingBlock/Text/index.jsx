import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'rebass'
import HtmlText from './HtmlText'
import WithHeading from '../WithHeading'


const Text = ({ text, button, buttonLink2, buttonSize, buttonTop, ...rest }) => {

    return (
        <WithHeading {...rest} noMargin={!text}>
            {button && buttonTop && <Button variant='primary' fontSize={buttonSize} py={1} mx='auto' mb={[3, 4]} as='a' href={buttonLink2} target='_blank'>
                {button}
            </Button>}
            <HtmlText text={text} />
            {button && !buttonTop && <Button variant='primary' fontSize={buttonSize} py={1} mx='auto' mt={[3, 4]} as='a' href={buttonLink2} target='_blank'>
                {button}
            </Button>}
        </WithHeading>
    )
}

Text.propTypes = {
    text: PropTypes.string,
    button: PropTypes.string,
    buttonLink2: PropTypes.string,
    buttonSize: PropTypes.string,
    buttonTop: PropTypes.bool,
}

Text.defaultProps = {
    buttonSize: "3",
    buttonTop: false,
}

export default Text
