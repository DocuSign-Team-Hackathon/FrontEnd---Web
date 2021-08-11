import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center } from "@chakra-ui/react";
import Header from './Header'
import Footer from './Footer'
import AdoptPage from "./AdoptPage";


const LandingPage = () => {
  return (
    <Flex direction="column" color="white">
    <Box bgImage="url('./assets/headerImage.png')" h="100vh" backgroundSize="1500px" backgroundPosition="center right top "backgroundRepeat="no-repeat" >
    <Header />
      <Box marginTop="150px" d="flex" alignItems="end" flexDirection="column" color="black"> 
          <Text margin="10px" fontSize="6xl">Adpot a Companion</Text>
          <Text margin="10px" frontSize="2x1">Your Support is so Important</Text>
          <Button margin="10px" bg="tomato" w="20%" p={4} color="white">Adpot Today</Button>
      </Box>
    </Box>
    <Box padding="100px" bg="white">
        <Box d="flex" > 
            <Box width="50%" margin="auto">
              <Image src="/assets/watchOakland.png" alt="people playing with their dog" />
            </Box>
          <Box width="40%">
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
    <Box bgImage="url('./assets/206aa1150dd774a5f91e40279c1b37bf.jpg')" backgroundPosition="left bottom" h="60vh" backgroundRepeat="no-repeat" backgroundSize="1500px">
      <Box paddingRight="50px" textAlign="right" d="flex" flexDirection="column" alignItems="end" justifyContent="space-between" marginTop="100px"> 
          <Text margin="10px" color="black" fontSize="6xl">Don’t Buy, Adopt!</Text>
          <Box width="30%"><Text margin="10px" color="black" frontSize="2x1">The unknown truth is that these animals like us, are conscious beings with their own personality  and feelings. They deserve our respect and  should be treated as equals.</Text></Box>
          <Button margin="10px" bg="tomato" w="20%" p={4} color="white">AVAILABLE PETS</Button>
      </Box>
    </Box>
    <Box padding="100px" > 
    <Heading textAlign="center" color="#C2392E">Check out the Blog!</Heading>
        <Box bg="#F1F3F4" padding="100px" d="flex" justifyContent="center">
            <Box>
              <Container>
                <Image src="./assets/checkblog1.jpg" h="300px" borderRadius="20px" />
                <Text color="white">Seeking Dog Foster Coordinator Animal Transfer Coordinator </Text>
              </Container>
            </Box>
            <Box>
              <Container>
                <Image src="./assets/checkblog2.jpg" h="300px" borderRadius="20px" />
                <Text color="white">Bissell Empty the Shelters adoption event! July 7-11 </Text>
              </Container>
            </Box>
            <Box>
              <Container>
              <Image src="./assets/checkblog3.jpg" h="300px" borderRadius="20px" />
                <Text color="white"> OAS is now open on Thursdays! 5-7 pm for walk-in adoptions.</Text>
              </Container>
            </Box>
          </Box>
        </Box>
      <Footer />
      <AdoptPage />
    </Flex>
  );
};

export default LandingPage;
