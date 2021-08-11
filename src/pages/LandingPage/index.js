import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center } from "@chakra-ui/react";


const LandingPage = () => {
  return (
    <Flex
      direction="column"
      color="white"

    >
    <Box d="flex" justifyContent="space-between" marginRight="70px" marginTop="20px" marginLeft="70px">
      <Box d="flex" > 
        <Image />
        <Text color="black">Oakland Animal Services</Text>
      </Box>
      <Box>
        <nav>
          <UnorderedList textDecoration="none" styleType="none" d="flex" justifyContent="space-between" color="black">
            <ListItem>
              <a href="Adpot">Adpot</a>
            </ListItem>
            <ListItem>
              <a href="Adpot">Services</a>
            </ListItem>
            <ListItem>
              <a href="Adpot">How to Help</a>
            </ListItem>
            <ListItem>
              <a href="Adpot">About</a>
            </ListItem>
          </UnorderedList>
          </nav>
          <Box>  
            <Input variant="outline" placeholder="Search" size="sm" />
            <Button bg="tomato" w="30%" p={4} color="white">Donate Now</Button>
          </Box>
      </Box>
    </Box>

    <Box padding="50px" bgImage="url('/assets/headerImage.png')" vh="100" backgroundPosition="center"backgroundRepeat="no-repeat">
      <Box marginTop="150px" d="flex" alignItems="end" flexDirection="column" color="black"> 
          <Text margin="10px" fontSize="6xl">Adpot a Companion</Text>
          <Text margin="10px" frontSize="2x1">Your Support is so Important</Text>
          <Button margin="10px" bg="tomato" w="20%" p={4} color="white">Adpot Today</Button>
      </Box>
    </Box>


    <Box padding="100px" bg="white">
        <Box d="flex" justifyContent="space-around"> 
            <Box>
              <Image src="/src/assets/watchOakland.png" alt="people playing with their dog" />
            </Box>
          <Box>
            <Container>
            <Heading as="h3" size="lg" color="#C2392E">About us </Heading>
                <Text color="black">Oakland Animal Services is a registered non-profit organization dedicated to the protection and the promotion of humane treatment of all animals.</Text>
            </Container>
          </Box>
    </Box>
        <Box padding="100px" d="flex" justifyContent="center" margin="20px"> 
          <Box>
            <Container>
            <Text color="black">Oakland Animal Servicesis Oakland’s only “open admissions” shelter </Text>
            </Container>
          </Box>
          <Box>
            <Container>
            <Text color="black">We bring warmth and welcome homeall Oakland’s homeless, injured,orphaned, unwanted, lost,abandoned and mistreated animals. </Text>
            </Container>
          </Box>
          <Box>
            <Container>
            <Text color="black"> Every animal brought to our door is welcome, regardless of age, breed, temperament or medical condition</Text>
            </Container>
          </Box>
        </Box>
      </Box>
 
    <Box bgImage="url('/assets/206aa1150dd774a5f91e40279c1b37bf.jpg')" backgroundPosition="center"backgroundRepeat="no-repeat">
      <Box paddingRight="50px" textAlign="right" d="flex" flexDirection="column" alignItems="end" justifyContent="space-between"> 
          <Text margin="10px" color="black" fontSize="6xl">Don’t Buy, Adopt!</Text>
          <Box width="30%"><Text margin="10px" color="black" frontSize="2x1">The unknown truth is that these animals like us, are conscious beings with their own personality  and feelings. They deserve our respect and  should be treated as equals.</Text></Box>
          <Button margin="10px" bg="tomato" w="20%" p={4} color="white">AVAILABLE PETS</Button>
      </Box>
    </Box>
    
      <Box padding="100px" > 
        <Box bg="#F1F3F4" padding="100px" d="flex" justifyContent="center">
            <Box>
              <Container>
                <Text color="black">Seeking Dog Foster Coordinator Animal Transfer Coordinator </Text>
              </Container>
            </Box>
            <Box>
              <Container>
                <Text color="black">Bissell Empty the Shelters adoption event! July 7-11 </Text>
              </Container>
            </Box>
            <Box>
              <Container>
                <Text color="black"> OAS is now open on Thursdays! 5-7 pm for walk-in adoptions.</Text>
              </Container>
            </Box>
          </Box>
        </Box>
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
    </Flex>
  );
};

export default LandingPage;
