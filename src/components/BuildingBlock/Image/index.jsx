import React, { useMemo } from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = ({ caption, src, duoTone }) => {
    const data = useStaticQuery(defaultQuery)

    const match = useMemo(() => (
        data.allFile.edges.find(({ node }) => src.relativePath === node.relativePath)
    ), [data, src])

    return (
        <Img loading='eager' fadeIn={true} fluid={match.node.childImageSharp.fluid} />
    )
}

Image.propTypes = {
    src: PropTypes.shape({
        relativePath: PropTypes.string.isRequired,
    }).isRequired,
    caption: PropTypes.string,
    duoTone: PropTypes.bool,
}

Image.defaultProps = {
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
