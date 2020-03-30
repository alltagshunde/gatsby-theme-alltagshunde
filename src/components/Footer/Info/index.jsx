import React from 'react'
import { Box, Link } from 'rebass'
import Section from '../Section'

const Info = ({ partner }) => {

    return (
        <>
            <Section title='Kontakt'></Section>
            <Section title='Über'></Section>
            <Section title='Partner'>
                {partner.map(({ name, url }) => (
                    <Box>
                        <Link href={url} target='_blank'>{name}</Link>
                    </Box>
                ))}
            </Section>
        </>
    )
}

export default Info
