import React from "react"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Box, Flex, Image } from 'rebass'

import Link from './Link'
import { LogoIcons, LogoText } from './Logo'

const Header = ({ pages }) => {
  const theme = useTheme()

  const sticky = css`
    @supports (position: sticky) {
        position: sticky;
        top: 0;
        z-index: 1020;
    }
  `
  console.log('PAGES', pages)
  return (
    <>
      <Box bg='white' pt={3}>
        <Flex variant='container' justifyContent='start' alignItems='start' flexWrap='wrap'>
          <Image as={LogoIcons} width={1 / 4} />
        </Flex>
      </Box>
      <Box bg='secondary' width={1} py={3} css={sticky} >
        <Flex variant='container' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
          <Image as={LogoText} width={1 / 4} />
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
