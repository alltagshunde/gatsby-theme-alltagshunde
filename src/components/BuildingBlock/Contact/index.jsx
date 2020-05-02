import React from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Flex } from "rebass"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import WithHeading from "../WithHeading"
import Icon from './Icon'


const Contact = ({ whatsapp, facebook, email, innerWidth, ...rest }) => {

    const data = useStaticQuery(graphql`
        query ContactQuery {
            allSiteYaml(filter: {fields: {typ: {eq: "contact"}}}) {
                edges {
                    node {
                        fields {
                            typ
                        }
                        whatsapp
                        facebook
                        email
                    }
                }
            }
        }
    `)

    const contact = data.allSiteYaml.edges[0].node;

    const responsiveWidth = innerWidth === '1/3'
        ? 1 / 3
        : innerWidth === '1/2'
            ? 1 / 2
            // : width === '1/4'
            //     ? [1, 3 / 4, 1]
            : 1

    return (
        <WithHeading {...rest}>
            {/* TODO: innerWidth instead of width=1/2 */}
            <Flex width={responsiveWidth} my={[1, 2]} justifyContent='space-around'>
                {/*&text=*/}
                {whatsapp === 'true' && <Icon icon={faWhatsapp} baseUrl='https://api.whatsapp.com/send?phone=' value={contact.whatsapp} title='Whatsapp' />}
                {facebook === 'true' && <Icon icon={faFacebook} baseUrl='https://www.facebook.com/' value={contact.facebook} title='Facebook' />}
                {email === 'true' && <Icon icon={faEnvelope} baseUrl='mailto:' value={contact.email} title='Email' />}
            </Flex>
        </WithHeading>
    )
}

Contact.propTypes = {
    whatsapp: PropTypes.string,
    facebook: PropTypes.string,
    email: PropTypes.string,
}

Contact.defaultProps = {
}

export default Contact

