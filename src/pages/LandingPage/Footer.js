import { React } from 'react'
import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center } from "@chakra-ui/react";
const Footer = () =>{
    return(
    <Box backgroundColor="#222222" padding="100px">
        <Box d="flex">
          <Container d="flex" flexDirection="column" >
            <Heading margin="10px" as="h4" size="lg">OAS Hours</Heading>
            <Text margin="10px">In response to the ongoing COVID-19 pandemic, OAS is open by appointment only.</Text>
            <Text margin="10px">To make an appointment, call us at (510) 535-5602 between 11am to 4pm any day of the week.</Text>
            <Text margin="10px">2021 HOLIDAY CLOSURES:
                  Jan 1 & 18, Feb 12 & 15
                  May 31, Sep 6 & 9
                  Nov 9, 25 & 26, Dec 24 & 25
            </Text>
          </Container>
          <Container d="flex" flexDirection="column"  >
          <Heading margin="10px" as="h4" size="lg">Contact Us</Heading>
            <Text margin="10px">Fax: 510.535.5601
              Phone: 510.535.5602
              Relay Service 711.</Text>
            <Text margin="10px">FOR URGENT SERVICE:Call the Oakland Police
                  Non-Emergency Dispatch Line: 510.777.3333</Text>
            <Text margin="10px">In cases of emergency, 
                  call 911 (land line) or 
                  510-777-3211 (cell phone).</Text>
          </Container>
          <Container d="flex" flexDirection="column">
          <Heading margin="10px" as="h4" size="lg">Find Us</Heading>
            <Text margin="10px" >1101 29th Avenue, Oakland, CA 94601</Text>
            <Image src="src/assets/map.png" alt="location of the oakland animal services" />
          </Container>
        </Box>
      </Box>
    )
}


export default Footer;
