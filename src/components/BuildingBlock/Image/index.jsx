import React, { useMemo } from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "rebass"


const Image = ({ caption, image, width, duoTone }) => {
    const data = useStaticQuery(defaultQuery)

    const match = useMemo(() => (
        data.allFile.edges.find(({ node }) => image.relativePath === node.relativePath)
    ), [data, image])

    const responsiveWidth = width === '1/3' ? [1, 1 / 2, 1 / 3] : width === '1/2' ? [1, 1 / 2] : 1

    return (
        <Box width={responsiveWidth} >
            <Img loading='eager' fadeIn={true} fluid={match.node.childImageSharp.fluid} />
        </Box>
    )
}

Image.propTypes = {
    width: PropTypes.string,
    image: PropTypes.shape({
        relativePath: PropTypes.string.isRequired,
    }).isRequired,
    caption: PropTypes.string,
    duoTone: PropTypes.bool,
}

Image.defaultProps = {
    width: '1',
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
