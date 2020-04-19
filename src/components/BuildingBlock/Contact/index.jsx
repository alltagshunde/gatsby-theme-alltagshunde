import React from "react"
import PropTypes from 'prop-types'
import { Box, Flex } from "rebass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import WithHeading from "../WithHeading"


const Contact = ({ whatsapp, facebook, email, ...rest }) => {

    return (
        <WithHeading {...rest}>
            {/* TODO: innerWidth instead of width=1/2 */}
            <Flex width={1 / 2} mx='auto' mt={[1, 2]} justifyContent='space-around'>
                <Flex variant='avatar'>
                    <FontAwesomeIcon icon={faWhatsapp} fixedWidth />
                </Flex>
                <Flex variant='avatar'>
                    <FontAwesomeIcon icon={faFacebook} fixedWidth />
                </Flex>
                <Flex variant='avatar'>
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                </Flex>
            </Flex>
        </WithHeading>
    )
}

Contact.propTypes = {
    whatsapp: PropTypes.string,
    facebook: PropTypes.string,
    email: PropTypes.string,
}

Contact.defaultProps = {
}

export default Contact

