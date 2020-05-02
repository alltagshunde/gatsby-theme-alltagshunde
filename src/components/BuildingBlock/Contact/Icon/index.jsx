import React from "react"
import PropTypes from 'prop-types'
import { Flex, Link } from "rebass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Icon = ({ icon, baseUrl, value, title }) => {

    return (
        <Link href=""
            title={title}
            onClick={e => { e.preventDefault(); window.open(`${baseUrl}${value}`, '_blank') }}
            target="_blank"
            rel="nofollow noopener">
            <Flex variant='avatar'>
                <FontAwesomeIcon icon={icon} fixedWidth />
            </Flex>
        </Link>
    )
}

Icon.propTypes = {
    baseUrl: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.any,
}

Icon.defaultProps = {
}

export default Icon

