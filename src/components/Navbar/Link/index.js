import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { useMatch } from '@reach/router'
import { Link, Text } from 'rebass'
import { Link as RouteLink } from 'gatsby'

const NavbarLink = ({ to, children }) => {
    const theme = useTheme()
    const match = useMatch(to);

    const color = css`
        color: ${match ? theme.colors.primary : theme.colors.white};
    `

    return (
        <Link variant='nav' as={RouteLink} to={to} css={color}>
            <Text variant='caps' fontSize={2} fontWeight='bold'>{children}</Text>
        </Link>
    )
}

NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

NavbarLink.defaultProps = {
}

export default NavbarLink
