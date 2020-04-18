import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming'

import { global, themes } from '../../../style';
import Navbar from "../../Navbar"
import Footer from "../../Footer"
import { Box, Flex } from "rebass";


const Layout = ({ children }) => {
  const theme = 'dark';

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allSiteYaml(filter: {fields: {typ: {eq: "link"}}}) {
        edges {
            node {
                fields {
                    typ
                }
                link {
                    page
                    title
                }
            }
        }
      }
      allPagesYaml {
        edges {
            node {
              title
              fields {
                slug
              }
            }
        }
      }
    }
  `)

  const pages = {}
  data.allPagesYaml.edges.forEach(({ node }) => pages[node.title] = node.fields.slug)
  const navigation = data.allSiteYaml.edges.length > 0 ? data.allSiteYaml.edges[0] : []
  const links = navigation.node.link.map(({ page, title }, index) => ({ path: pages[page], title: title || page }))

  // TODO: put in theme, responsive
  const flexbox = css`
    grid-gap: 10px;
  `

  return (
    <ThemeProvider theme={themes[theme]}>
      <Global styles={global(themes[theme])} />
      <Navbar siteTitle={data.site.siteMetadata.title} pages={links} />
      <Flex variant='container' css={flexbox} as='main' flexWrap='wrap' justifyContent='space-between'>
        {children}
      </Flex>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
