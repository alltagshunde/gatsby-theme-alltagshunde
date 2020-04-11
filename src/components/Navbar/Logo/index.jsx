import React from 'react'
import LogoIcons from './logo-image-alt.svg'
import LogoText from './logo-text-light-alt.svg'
import { Link, Image } from 'rebass'
import { Link as RouteLink } from 'gatsby'

const LogoTextLink = props => {
    return (
        <Link variant='nav' p={0} as={RouteLink} {...props}>
            <Image as={LogoText} />
        </Link>
    )
}

export { LogoIcons, LogoText, LogoTextLink }
