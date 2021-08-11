import { React } from 'react'
import Header from './Header'
import Dogs from './Dogs'
import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center, Grid, GridItem } from "@chakra-ui/react";
const AdoptPage = () =>{
    return(
    <Flex flexDirection="column">
    <Header />
       <Box paddingLeft="20px">
           <Heading color="#C2392E" >Pets available for Adoption</Heading>
       </Box>
       <Grid paddingTop="100px" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 450px)" textAlign="center">
      {Dogs.map((dog) => {
        return (
          <Box margin="30px" padding="20px" border="1px" borderRadius="5px" key={dog.id}>
            {/* <Image margin="auto" src={dog.picture} /> */}
            <Heading color="#C2392E" fontSize="2xl">{dog.name}</Heading>
            <Text>{dog.age}, {dog.size}, {dog.gender}, {dog.type}</Text>
            {/* <Image src={dog.picture} alt={`An adorable ${dog.type}`}/> */}
          </Box>
        )
      })}
      </Grid>
    </Flex>
    )
}


export default AdoptPage;
