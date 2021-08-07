import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/LandingPage/HomePage.js";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
// import Header from './pages/Header.js'
import {
  IconButton,
  Text,
  Flex,
  Box,
  Button,
  Input,
  ListItem,
  UnorderedList,
  Heading,
  Image,
  Container,
  Icon,
  Center,
} from "@chakra-ui/react";
import DogPage from "./pages/LandingPage/DogPage.js";
import AdoptPage from "./pages/LandingPage/AdoptPage.js";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Box>
        <HomePage />
      </Box>
      <Box>
        <AdoptPage />
      </Box>
      <Box>
        <DogPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
