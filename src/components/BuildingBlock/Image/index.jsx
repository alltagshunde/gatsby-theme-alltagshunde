import React, { useMemo } from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "rebass"
import { css } from "@emotion/core"


const Image = ({ caption, image, innerWidth, duoTone, span, isBanner, mb }) => {
    const data = useStaticQuery(defaultQuery)

    const match = useMemo(() => (
        data.allFile.edges.find(({ node }) => image.relativePath === node.relativePath)
    ), [data, image])

    const responsiveWidth = innerWidth === '1/3' ? 1 / 3 : innerWidth === '1/2' ? 1 / 2 : 1
    const verticalMargin = isBanner ? 0 : 4;

    //TODO: set margins from outside?
    return (
        <Box width={responsiveWidth} my={verticalMargin} mx='auto' sx={{ gridColumn: span }} mb={mb}>
            <Img loading='eager' fadeIn={true} fluid={match.node.childImageSharp.fluid} />
        </Box>
    )
}

Image.propTypes = {
    span: PropTypes.number,
    innerWidth: PropTypes.string,
    image: PropTypes.shape({
        relativePath: PropTypes.string.isRequired,
    }).isRequired,
    caption: PropTypes.string,
    duoTone: PropTypes.bool,
}

Image.defaultProps = {
    span: 1,
    innerWidth: '1',
    duoTone: false,
}

export default Image

const defaultQuery = graphql`
    query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
            edges {
                node {
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 1664) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
        }
    }
`
const duoToneQuery = graphql`
    query {
        allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
            edges {
                node {
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 1664, duotone: {highlight: "#f00e2e", shadow: "#192550"}) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
