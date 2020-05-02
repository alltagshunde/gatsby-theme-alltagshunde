import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'rebass'
import { Link as RouteLink } from 'gatsby'

const CardLink = ({ to, children }) => {
    console.log('TO2', to, children)

    return (
        <Button variant='primary' py={1} mt={[1, 2]} as={RouteLink} to={to}>
            {children}
        </Button>
    )
}

CardLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

CardLink.defaultProps = {
}

export default CardLink
