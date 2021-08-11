import { React } from 'react'
import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center } from "@chakra-ui/react";
const Header = () =>{
    return(
        
        <Box d="flex" justifyContent="space-between" marginRight="70px" marginTop="20px" marginLeft="70px">
          <Box d="flex" > 
            <Image src="./assets/logoNav.png" />
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
    )
}


export default Header;
