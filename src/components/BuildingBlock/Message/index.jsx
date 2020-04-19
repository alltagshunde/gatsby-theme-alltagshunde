import React, { useMemo } from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { Box, Heading, Flex, Button } from "rebass"
import { Textarea, Input } from '@rebass/forms'
import { css } from "@emotion/core"
import WithHeading from "../WithHeading"


const Message = ({ image, span, verticalMargin, ...rest }) => {
    const data = useStaticQuery(defaultQuery)

    const match = useMemo(() => (
        data.allFile.edges.find(({ node }) => image.relativePath === node.relativePath)
    ), [data, image])

    const background = css`
        width: 100%;
        height: 100%;
    `


    return (
        <Box width={1} sx={{ gridColumn: span }}>
            <BackgroundImage css={background} loading='eager' fadeIn={true} fluid={match.node.childImageSharp.fluid}>
                <WithHeading span={span} my={verticalMargin} {...rest}>
                    <Flex width={[1 / 2, 1 / 3]} flexDirection='column'>
                        <Input
                            id='name'
                            name='name'
                            placeholder='Name*'
                        />
                        <Input
                            id='email'
                            name='email'
                            placeholder='Email*'
                        />
                        <Input
                            id='phone'
                            name='phone'
                            placeholder='Telefon'
                        />
                        <Textarea
                            id='message'
                            name='message'
                            placeholder='Ihre Nachricht*'
                            rows={10}
                        />
                        <Button my={1}>Senden</Button>
                    </Flex>
                </WithHeading>
            </BackgroundImage>
        </Box >
    )
}

Message.propTypes = {
    span: PropTypes.number,
    image: PropTypes.shape({
        relativePath: PropTypes.string.isRequired,
    }).isRequired,
}

Message.defaultProps = {
    span: 1,
}

export default Message

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
