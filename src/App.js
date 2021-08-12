import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import PetAdoptionForm from "./pages/Onboarding/PetAdoption";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({ breakpoints });

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <LandingPage /> */}
      <PetAdoptionForm />
    </ChakraProvider>
  );
}

export default App;
