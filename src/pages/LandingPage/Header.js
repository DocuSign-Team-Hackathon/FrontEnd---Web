import { React } from 'react'
import { Text, Flex, Box, Button, Input, ListItem, UnorderedList, Heading, Image, Container, Icon, Center } from "@chakra-ui/react";
const Header = () =>{
    return(
        
        <Box d="flex" justifyContent="space-between" marginRight="70px" marginTop="20px" marginLeft="70px">
          <Box d="flex" > 
            <Image src="/assets/logoNav.png" width="30%" />
            <Box>
              <nav>
                <UnorderedList textDecoration="none" fontWeight="semibold" styleType="none" d="flex" justifyContent="space-between" color="black" textTransform="uppercase">
                  <ListItem margin="10px">
                    <a href="Adpot">Adpot</a>
                  </ListItem>
                  <ListItem margin="10px">
                    <a href="Adpot">Services</a>
                  </ListItem>
                  <ListItem  margin="10px">
                    <a href="Adpot">How to Help</a>
                  </ListItem>
                  <ListItem margin="10px">
                    <a href="Adpot">About</a>
                  </ListItem>
                </UnorderedList>
                </nav>
              </Box>
          </Box> 
              <Box d="flex" justifyContent="space-between">   
                <Input margin="10px" variant="outline" placeholder="Search" size="sm" />
                <Button margin="10px"  bg="tomato" w="40%" p={4} color="white">Donate Now</Button>
              </Box>
        </Box>
    )
}


export default Header;
