import {
  Text,
  Flex,
  Box,
  Button,
  Heading,
  Image,
  Container,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import { Icon } from "@iconify/react";
import watchOakland from "../../assets/watchOakland.png";
import blog1 from "../../assets/checkblog1.jpg";
import blog2 from "../../assets/checkblog2.jpg";
import blog3 from "../../assets/checkblog3.jpg";
import headerImage from "../../assets/headerImage.png";
import puppyImage from "../../assets/206aa1150dd774a5f91e40279c1b37bf.jpg";

const HomePage = () => {
  return (
    <Flex direction="column" color="white">
      <Box
        bgImage={headerImage}
        h="100vh"
        backgroundSize="1900px"
        backgroundPosition="center right top "
        backgroundRepeat="no-repeat"
      >
        <Header />
        <Box
          marginTop="150px"
          d="flex"
          alignItems="flex-end"
          flexDirection="column"
          color="black"
          paddingRight="50px"
        >
          <Text margin="10px" fontSize="6xl">
            Adopt a Companion
          </Text>
          <Text margin="10px" fontSize="2x1">
            Your Support is so Important
          </Text>
          <a href="/adopt">
            <Button margin="10px" bg="tomato" w="20%" p={4} color="white">
              Adopt Today
            </Button>
          </a>
        </Box>
      </Box>
      <Box padding="100px" bg="white">
        <Box d="flex">
          <Box width="50%" margin="auto">
            <Image src={watchOakland} alt="people playing with their dog" />
          </Box>
          <Box width="40%">
            <Container>
              <Heading as="h3" size="lg" color="#C2392E">
                About us{" "}
              </Heading>
              <Text color="black">
                Oakland Animal Services is a registered non-profit organization
                dedicated to the protection and the promotion of humane
                treatment of all animals.
              </Text>
            </Container>
          </Box>
        </Box>
        <Box padding="100px" d="flex" justifyContent="center" margin="20px">
          <Box>
            <Container>
              <Box
                d="flex"
                flexDirection="column"
                alignItems="center"
                align="center"
                color="black"
              >
                <Icon
                  icon="fa:paw"
                  color="#C2392E"
                  fontSize="3.5rem"
                  align="center"
                />
                <Text marginTop="20px">
                  Oakland Animal Servicesis Oakland’s only “open
                  admissions”shelter{" "}
                </Text>
              </Box>
            </Container>
          </Box>
          <Box>
            <Container>
              <Box
                d="flex"
                flexDirection="column"
                alignItems="center"
                align="center"
                color="black"
              >
                <Icon
                  icon="fa:paw"
                  color="#C2392E"
                  fontSize="3.5rem"
                  align="center"
                />
                <Text marginTop="20px">
                  We bring warmth and welcome homeall Oakland’s homeless,
                  injured,orphaned, unwanted, lost,abandoned and mistreated
                  animals.{" "}
                </Text>
              </Box>
            </Container>
          </Box>
          <Box>
            <Container>
              <Box
                d="flex"
                flexDirection="column"
                alignItems="center"
                align="center"
                color="black"
              >
                <Icon
                  icon="fa:paw"
                  color="#C2392E"
                  fontSize="3.5rem"
                  align="center"
                  margin="20px"
                />
                <Text marginTop="20px">
                  Every animal brought to our door is welcome, regardless of
                  age, breed, temperament or medical condition{" "}
                </Text>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
      <Box
        bgImage={puppyImage}
        backgroundPosition="left bottom"
        h="60vh"
        backgroundRepeat="no-repeat"
        backgroundSize="1500px"
      >
        <Box
          paddingRight="50px"
          align="right"
          d="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
          marginTop="100px"
        >
          <Text margin="10px" color="white" fontSize="6xl">
            Don’t Buy, <span style={{ color: "#C2392E" }}>Adopt!</span>
          </Text>
          <Box width="30%">
            <Text margin="10px" color="white" fontSize="2x1">
              The unknown truth is that these animals like us, are conscious
              beings with their own personality and feelings. They deserve our
              respect and should be treated as equals.
            </Text>
          </Box>
          <Button margin="10px" bg="tomato" w="20%" p={4} color="white">
            AVAILABLE PETS
          </Button>
        </Box>
      </Box>
      <Box padding="100px">
        <Heading align="center" color="#C2392E">
          Check out the Blog!
        </Heading>
        <Box bg="#F1F3F4" padding="100px" d="flex" justifyContent="center">
          <Box>
            <Container position="relative">
              <a href="https://www.oaklandanimalservices.org/2021/06/foas-is-hiring-dog-foster-transfer-coordinator/">
                <Image src={blog1} h="350px" borderRadius="20px" />
                <Text
                  position="absolute"
                  bottom="10px"
                  color="white"
                  align="center"
                  padding="10px"
                >
                  Seeking Dog Foster Coordinator Animal Transfer Coordinator{" "}
                </Text>
              </a>
            </Container>
          </Box>
          <Box>
            <Container position="relative">
              <a href="https://www.oaklandanimalservices.org/2021/07/bissell-empty-the-shelters-adoption-event-july-7-11/">
                <Image src={blog2} h="350px" borderRadius="20px" />
                <Text
                  position="absolute"
                  bottom="10px"
                  color="white"
                  align="center"
                  padding="12px"
                >
                  Bissell Empty the Shelters adoption event! July 7-11{" "}
                </Text>
              </a>
            </Container>
          </Box>
          <Box>
            <Container position="relative">
              <a href="https://www.oaklandanimalservices.org/2021/07/oas-is-now-open-on-thursdays-5-7pm-for-walk-in-adoptions/">
                <Image src={blog3} h="350px" borderRadius="20px" />
                <Text
                  position="absolute"
                  bottom="10px"
                  color="white"
                  align="center"
                  padding="10px"
                >
                  {" "}
                  OAS is now open on Thursdays! 5-7 pm for walk-in adoptions
                </Text>
              </a>
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};

export default HomePage;
