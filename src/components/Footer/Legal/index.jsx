import React from 'react'
import { Flex, Text, Link } from 'rebass'
import { Link as RouteLink } from 'gatsby'

const Legal = ({ currentYear }) => {

    const year = 2020;
    const copyrightYears = currentYear > year ? `${year} - ${currentYear}` : `${year}`;

    return (
        <>
            <Text>&copy; Alltagshunde {copyrightYears}</Text>
            <Flex>
                <Link as={RouteLink} to='/agb'>AGB</Link>
                <Link as={RouteLink} to='/datenschutz' ml={3}>Datenschutz</Link>
                <Link as={RouteLink} to='/impressum' ml={3}>Impressum</Link>
            </Flex>
        </>
    )
}

export default Legal
