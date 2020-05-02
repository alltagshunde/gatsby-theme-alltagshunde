import React from "react"
import PropTypes from "prop-types"
import { Box, Flex, Image } from 'rebass'

import Link from './Link'
import { LogoIcons, LogoTextLink } from './Logo'

const Header = ({ pages }) => {

  const sticky = {
    '@supports (position: sticky)': {
      position: ['relative', 'sticky'],
      top: 0,
      zIndex: 1020
    }
  }


  //TODO: Logo width responsive, for sm either burger menu or Logo above Links
  return (
    <>
      <Box bg='white' pt={3}>
        <Flex variant='container' justifyContent='start' alignItems='start' flexWrap='wrap'>
          <Image as={LogoIcons} width={[1 / 2, 1 / 4]} />
        </Flex>
      </Box>
      <Box bg='secondary' width={1} py={3} sx={sticky} >
        <Flex variant='container' justifyContent='space-between' alignItems={['start', 'center']} flexWrap='wrap' flexDirection={['column', 'row']}>
          <Box width={[1 / 2, 1 / 4]}>
            <LogoTextLink to='/' />
          </Box>
          <Flex color='white' mt={[3, 0]} flexDirection={['column', 'row']}>
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
