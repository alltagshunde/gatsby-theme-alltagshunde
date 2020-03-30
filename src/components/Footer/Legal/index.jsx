import React from 'react'
import { Flex, Text, Link } from 'rebass'

const Legal = ({ currentYear }) => {

    const year = 2020;
    const copyrightYears = currentYear > year ? `${year} - ${currentYear}` : `${year}`;

    return (
        <>
            <Text>&copy; Alltagshunde Rheinbach {copyrightYears}</Text>
            <Flex>
                <Link href='/privacy'>Datenschutz</Link>
                <Link href='/legal' ml={3}>Impressum</Link>
            </Flex>
        </>
    )
}

export default Legal
