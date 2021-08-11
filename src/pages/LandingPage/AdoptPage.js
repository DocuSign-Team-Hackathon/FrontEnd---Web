import { React } from 'react'
import Header from './Header'
import Dogs from './Dogs'
import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center, Grid, GridItem } from "@chakra-ui/react";
const AdoptPage = () =>{
    return(
    <Flex flexDirection="column">
    <Header />
       <Box paddingLeft="100px" paddingTop="50px">
           <Heading color="black">Pets available for <Text as="span" color="#C2392E">Adoption</Text> </Heading>
       </Box>
       <Grid paddingTop="50px" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 450px)" textAlign="center">
      {Dogs.map((dog) => {
        return (
          <Box margin="30px" padding="20px"  borderRadius="5px" dropShadow="8px 10px 8px black" key={dog.id}>
            <Image margin="auto" src={dog.picture} width="70%" />
            <Box padding="10px" margin="auto" >
              <Heading color="#C2392E" fontSize="2xl">{dog.name}</Heading>
              <Text padding="10px"color="black">{dog.age}, {dog.size}, {dog.gender}, {dog.type}</Text>
            </Box>
          </Box>
        )
      })}
      </Grid>
    </Flex>
    )
}


export default AdoptPage;
