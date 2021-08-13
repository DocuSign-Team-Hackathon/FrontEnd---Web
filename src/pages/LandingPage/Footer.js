import { React } from "react";
import { Text, Box, Heading, Image, Container } from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import mapImg from '../../assets/map.png';

const Footer = () => {
  return (
    <Box backgroundColor="#222222" padding="100px">
      <Box d="flex">
        <Container d="flex" flexDirection="column">
        <Box margin="10px"d="flex">
          <Icon icon="ant-design:clock-circle-outlined" fontSize="2.4rem" />
          <Heading marginLeft="10px" as="h4" size="lg">
            OAS Hours
          </Heading>
          </Box>
          <Text margin="10px">
            In response to the ongoing COVID-19 pandemic, OAS is open by
            appointment only.
          </Text>
          <Text margin="10px">
            To make an appointment, call us at (510) 535-5602 between 11am to
            4pm any day of the week.
          </Text>
          <Text margin="10px">
            2021 HOLIDAY CLOSURES: Jan 1 & 18, Feb 12 & 15 May 31, Sep 6 & 9 Nov
            9, 25 & 26, Dec 24 & 25
          </Text>
        </Container>
        <Container d="flex" flexDirection="column">
          <Box d="flex" margin="10px">
            <Icon icon="bx:bxs-phone-call" fontSize="2.4rem" />
            <Heading marginLeft="10px" as="h4" size="lg">
              Contact Us
            </Heading>
          </Box>
          <Text margin="10px">
            Fax: 510.535.5601 Phone: 510.535.5602 Relay Service 711.
          </Text>
          <Text margin="10px">
            FOR URGENT SERVICE:Call the Oakland Police Non-Emergency Dispatch
            Line: 510.777.3333
          </Text>
          <Text margin="10px">
            In cases of emergency, call 911 (land line) or 510-777-3211 (cell
            phone).
          </Text>
          <Box paddingTop="50px" d="flex" justifyContent="flex-start">
            <Box margin="10px">
              <a href="https://www.facebook.com/OAKAnimalServices/">
              <Icon margin="20px" icon="akar-icons:facebook-fill" fontSize="2.4rem" />
              </a>
            </Box>
            <Box margin="10px">
              <a href="https://twitter.com/oaklandsanimals">
              <Icon icon="akar-icons:twitter-fill" fontSize="2.4rem"  />
              </a>
            </Box>
            <Box margin="10px">
              <a href="https://www.instagram.com/oaklandanimalservices/">
              <Icon icon="akar-icons:instagram-fill" fontSize="2.4rem"  />
              </a>
            </Box>
          </Box>
        </Container>
        <Container d="flex" flexDirection="column">
          <Heading margin="10px" as="h4" size="lg">
            Find Us
          </Heading>
          <Text margin="10px">1101 29th Avenue, Oakland, CA 94601</Text>
          <Container>
            <Image
              src={mapImg}
              alt="location of the oakland animal services"
              h="300px"
            />
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
