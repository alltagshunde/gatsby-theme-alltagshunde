import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from 'rebass'
import Legal from './Legal'
import Info from './Info'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query PartnerQuery {
            allSiteYaml(filter: {fields: {typ: {eq: "partner"}}}) {
                edges {
                    node {
                        fields {
                            typ
                        }
                        partner {
                            name
                            url
                        }
                    }
                }
            }
        }
    `)

    const partner = data.allSiteYaml.edges[0].node.partner;
    const currentYear = new Date().getFullYear();

    return (
        <Box bg='secondary' >
            <Flex color='white' variant='container' py={5} justifyContent='space-between' flexWrap='wrap'>
                <Info partner={partner} />
            </Flex>
            <Box bg='white' height='1px'></Box>
            <Flex color='white' variant='container' py={5} justifyContent='space-between' flexWrap='wrap'>
                <Legal currentYear={currentYear} />
            </Flex>
        </Box>
    )
}

export default Footer
