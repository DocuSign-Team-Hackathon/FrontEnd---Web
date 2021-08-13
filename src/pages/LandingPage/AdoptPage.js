import { React } from "react";
import Header from "./Header";
import Dogs from "./Dogs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Text, Flex, Box, Heading, Image, Grid } from "@chakra-ui/react";
import DogPage from "./DogPage";
const AdoptPage = () => {
  return (
    <Router>
      <Flex flexDirection="column">
        <Header />
        <Box paddingLeft="100px" paddingTop="50px">
          <Heading color="black">
            Pets available for{" "}
            <Text as="span" color="#C2392E">
              <Link to="/dogpage">Adoption</Link>
            </Text>{" "}
          </Heading>
        </Box>
        <Grid
          paddingTop="50px"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 450px)"
          textAlign="center"
        >
          {Dogs.map((dog) => {
            return (
              <Box
                margin="30px"
                padding="20px"
                borderRadius="5px"
                dropShadow="8px 10px 8px black"
                key={dog.id}
              >
                <a href="/dog">
                  {" "}
                  <Image
                    margin="auto"
                    src={dog.picture}
                    width="70%"
                    cursor="pointer"
                  />
                </a>
                <Box
                  boxShadow="lg"
                  p="6"
                  rounded="md"
                  bg="white"
                  padding="15px"
                  width="280px"
                  margin="auto"
                >
                  <Heading color="#C2392E" fontSize="2xl">
                    {dog.name}
                  </Heading>
                  <Text fontSize="0.9rem" padding="5px" color="black">
                    {dog.age}, {dog.size}, {dog.gender}, {dog.type}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Flex>
    </Router>
  );
};

export default AdoptPage;
