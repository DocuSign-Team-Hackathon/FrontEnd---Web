import { React } from "react";

import {
  Box,
  Button,
  Input,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      marginRight="70px"
      marginTop="20px"
      marginLeft="70px"
    >
      <Box d="flex">
        <Image src="/assets/logoNav.png" width="30%" />
        <Box>
          <nav>
            <UnorderedList
              textDecoration="none"
              fontWeight="semibold"
              styleType="none"
              d="flex"
              justifyContent="space-between"
              color="black"
              textTransform="uppercase"
            >
              <ListItem margin="10px">
                <a href="/adopt">Adpot</a>
              </ListItem>
              <ListItem margin="10px">
                <a href="https://www.oaklandanimalservices.org/services/">
                  Services
                </a>
              </ListItem>
              <ListItem margin="10px">
                <a href="https://www.oaklandanimalservices.org/how-to-help/">
                  How to Help
                </a>
              </ListItem>
              <ListItem margin="10px">
                <a href="https://www.oaklandanimalservices.org/about/">About</a>
              </ListItem>
            </UnorderedList>
          </nav>
        </Box>
      </Box>
      <Box d="flex" justifyContent="space-between">
        <Input margin="10px" variant="outline" placeholder="Search" size="sm" />
        {/* <IconButton colorScheme="blue" aria-label="Search database"icon={<SearchIcon />} /> */}
        <Button margin="10px" bg="tomato" w="40%" p={4} color="white">
          Donate Now
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
