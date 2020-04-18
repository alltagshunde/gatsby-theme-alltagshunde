import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import { Box, Flex, Image } from 'rebass'

import Link from './Link'
import { LogoIcons, LogoTextLink } from './Logo'

const Header = ({ pages }) => {

  const sticky = css`
    @supports (position: sticky) {
        position: sticky;
        top: 0;
        z-index: 1020;
    }
  `
  //TODO: Logo width responsive, for sm either burger menu or Logo above Links
  return (
    <>
      <Box bg='white' pt={3}>
        <Flex variant='container' justifyContent='start' alignItems='start' flexWrap='wrap'>
          <Image as={LogoIcons} width={1 / 4} />
        </Flex>
      </Box>
      <Box bg='secondary' width={1} py={3} css={sticky} >
        <Flex variant='container' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
          <Box width={1 / 4}>
            <LogoTextLink to='/' />
          </Box>
          <Flex color='white'>
            {pages.map(({ title, path }) => (
              <Box>
                <Link to={path}>{title}</Link>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
