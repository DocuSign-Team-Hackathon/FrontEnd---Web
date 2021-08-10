import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import PetAdoptionForm from "./pages/Onboarding/PetAdoption";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      {/* <LandingPage /> */}
      <Flex justifyContent="center">
        <PetAdoptionForm />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
