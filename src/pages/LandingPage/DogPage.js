import { React } from "react";
import { useState } from "react";
import Dogs from "./Dogs";
import { Text, Box, Button, Heading, Image } from "@chakra-ui/react";

function DogPage() {
  const [currentDogId, setDogId] = useState(0);

  // const currentDog = Dogs[currentDogId]
  const nextDog = () => {
    const nextId = currentDogId + 1;
    setDogId(nextId);
  };

  const prevDog = () => {
    const prevId = currentDogId - 1;
    setDogId(prevId);
  };
  return (
    <>
      {Dogs[currentDogId] && (
        <Box padding="50px">
          <Box d="flex" justifyContent="space-around">
            <Box
              paddingTop="15px"
              width="60%"
              key={Dogs[currentDogId].id}
              d="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Image
                  borderRadius="10px"
                  margin="auto"
                  src={Dogs[currentDogId].picture}
                  width="500px"
                />
              </Box>
              <Box>
                <Text
                  paddingTop="10px"
                  color="#C2392E"
                  fontWeight="semibold"
                  fontSize="2xl"
                  align="center"
                >
                  {Dogs[currentDogId].name} is Available
                </Text>
                <a href="/petadoptionform">
                  <Button
                    borderRadius="10px"
                    margin="20px"
                    width="200px"
                    colorScheme="red"
                    variant="solid"
                  >
                    Adopt Me
                  </Button>
                </a>
              </Box>
            </Box>
            <Box
              width="40%"
              margin="auto"
              d="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Heading margin="10px" as="h3" color="black" paddingBottom="10px">
                {" "}
                Meet {Dogs[currentDogId].name}
              </Heading>
              <Box margin="10px">
                <Heading
                  as="h4"
                  size="lg"
                  color="#C2392E"
                  paddingBottom="20px"
                  borderBottom="3px solid #C2392E"
                >
                  Husky Mix
                </Heading>
                <Box d="flex" flexWrap="wrap">
                  <Box margin="10px" align="center">
                    <Heading fontSize="1.5rem" color="black">
                      Age
                    </Heading>
                    <Text padding="5px" color="black">
                      {Dogs[currentDogId].age}
                    </Text>
                  </Box>
                  <Box align="center" margin="10px">
                    <Heading fontSize="1.5rem" color="black">
                      Size
                    </Heading>
                    <Text padding="5px" color="black">
                      {Dogs[currentDogId].size}
                    </Text>
                  </Box>
                  <Box align="center" margin="10px">
                    <Heading fontSize="1.5rem" color="black">
                      Color
                    </Heading>
                    <Text padding="5px" color="black">
                      {Dogs[currentDogId].color}
                    </Text>
                  </Box>
                  <Box align="center" margin="10px">
                    <Heading fontSize="1.5rem" color="black">
                      Gender
                    </Heading>
                    <Text padding="5px" color="black">
                      {Dogs[currentDogId].gender}
                    </Text>
                  </Box>
                  <Box align="center" margin="10px">
                    <Heading fontSize="1.5rem" color="black">
                      Type
                    </Heading>
                    <Text padding="5px" color="black">
                      {Dogs[currentDogId].type}
                    </Text>
                  </Box>
                  <Box margin="10px">
                    <Heading fontSize="1.5rem" color="black">
                      W/ Kids
                    </Heading>
                    <Text align="center" padding="5px" color="black">
                      {Dogs[currentDogId].kids}
                    </Text>
                  </Box>
                  <Box margin="10px">
                    <Heading fontSize="1.5rem" color="black">
                      W/ Cats
                    </Heading>
                    <Text align="center" padding="5px" color="black">
                      {Dogs[currentDogId].cats}
                    </Text>
                  </Box>
                  <Box margin="10px" x>
                    <Heading fontSize="1.5rem" color="black">
                      W/ Dogs
                    </Heading>
                    <Text align="center" padding="5px" color="black">
                      {Dogs[currentDogId].dog}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box margin="10px">
                <Heading
                  as="h3"
                  size="lg"
                  color="#C2392E"
                  paddingBottom="20px"
                  borderBottom="3px solid #C2392E"
                >
                  About
                </Heading>
                <Text color="black" paddingBottom="10px" paddingTop="20px">
                  Our boy Coco can't wait to meet you! He is a volunteer
                  favorite for his quirky and spunky personality. He is a
                  character with personality to spare. He has a bouncy hop to
                  his step and is playful with toys and people. Coco also likes
                  other dogs and has done well with them; it's a joy to watch
                  him blossom in play. A confident, respectful dog in the home
                  who can show him the ropes may be a good match for him.
                </Text>
                <Text color="black">
                  He has been working on gaining confidence to be the best boy
                  he can be. He can be nervous in some situations so he needs
                  adopters who understand his needs to help him thrive. Positive
                  reinforcement training will be a wonderful way to get to know
                  and bond with Coco. He is smart and will need dog savvy,
                  experienced adopters.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box padding="50px" d="flex" justifyContent="space-between">
            <Button color="black" onClick={currentDogId > 0 ? prevDog : null}>
              Prev
            </Button>
            <Button
              color="black"
              onClick={currentDogId < Dogs.length ? nextDog : ""}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}

export default DogPage;
