import React from "react"
import PropTypes from "prop-types"
import { Box, Flex, Image } from 'rebass'
//import Modal from 'react-modal';
//import Iframe from 'react-iframe'

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

  //const [modalIsOpen,setIsOpen] = React.useState(false);

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
          <Flex color='white' mt={[3, 0]} flexDirection={['column', 'row']} flexWrap='wrap'>
            {pages.map(({ title, path }) => (
              <Box key={path}>
                <Link to={path}>{title}</Link>
              </Box>
            ))}
            {/*<Button onClick={() => setIsOpen(true)}>bookit2</Button>*/}
          </Flex>
        </Flex>
      </Box>
      {/*<Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Example Modal"
          style={{
            overlay: {
              zIndex: 1030
            },
            content: {
              //top: '100px'
            }
          }}
        >
          <Iframe 
            url="https://app.squarespacescheduling.com/schedule.php?owner=22811034" 
            height="100%" 
            width="100%" 
            frameBorder="0"/>
        </Modal>*/}
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
