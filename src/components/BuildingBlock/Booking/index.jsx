import React from 'react'
import PropTypes from 'prop-types'

//import {Flex, Button, Box} from 'rebass'
//import Iframe from 'react-iframe'
import WithHeading from "../WithHeading"



const Booking = ({text, appointmentType, innerWidth, ...rest }) => {
    /*const [isOpen,setIsOpen] = React.useState(false);

    const responsiveWidth = innerWidth === '1/3'
        ? 1 / 3
        : innerWidth === '1/2'
            ? 1 / 2
            // : width === '1/4'
            //     ? [1, 3 / 4, 1]
            : 1*/

    return (
        <WithHeading {...rest} headingCentered={true}>
            {/*<Flex width={responsiveWidth} my={[1, 2]} justifyContent='space-around'>
                <Button fontSize="2em" onClick={() => setIsOpen(true)}>Termin vereinbaren</Button>
            </Flex>
            {isOpen && <Box width="100%" height="1500px">
            <Iframe 
            url="https://app.squarespacescheduling.com/schedule.php?owner=22811034" 
            height="1500px" 
            width="100%" 
            frameBorder="0"
            scrolling="no"
            overflow="show"/>
    </Box>}*/}
            </WithHeading>
    )
}

Booking.propTypes = {
    appointmentType: PropTypes.string,
}

Booking.defaultProps = {
    appointmentType: null
}

export default Booking
