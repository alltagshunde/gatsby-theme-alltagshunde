import React, { useMemo } from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "rebass"


const Image = ({ image, width, innerWidth, span }) => {
    const data = useStaticQuery(defaultQuery)

    const match = useMemo(() => (
        data.allFile.edges.find(({ node }) => image.relativePath === node.relativePath)
    ), [data, image])

    const responsiveWidth = innerWidth === '1/3'
        ? 1 / 3
        : innerWidth === '1/2'
            ? 1 / 2
            // : width === '1/4'
            //     ? [1, 3 / 4, 1]
            : 1

    return (
        <Box width={responsiveWidth} display={['none', 'block']} mx='auto' verticalAlign='center' sx={{ gridColumn: span }}>
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
/*
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
*/
