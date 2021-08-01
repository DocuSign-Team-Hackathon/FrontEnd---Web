import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
