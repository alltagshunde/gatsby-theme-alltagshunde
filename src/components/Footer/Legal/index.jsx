import React from 'react'
import { Flex, Text, Link } from 'rebass'

const Legal = ({ currentYear }) => {

    const year = 2020;
    const copyrightYears = currentYear > year ? `${year} - ${currentYear}` : `${year}`;

    return (
        <>
            <Text>&copy; Alltagshunde {copyrightYears}</Text>
            <Flex>
                <Link href='/agb'>AGB</Link>
                <Link href='/datenschutz' ml={3}>Datenschutz</Link>
                <Link href='/impressum' ml={3}>Impressum</Link>
            </Flex>
        </>
    )
}

export default Legal
