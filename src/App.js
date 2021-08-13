import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PetAdoptionForm from "./pages/Onboarding/PetAdoption";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import HomePage from "./pages/LandingPage/HomePage";
import { BrowserRouter as Route, Switch } from "react-router-dom";


import DogPage from "./pages/LandingPage/DogPage.js";
import AdoptPage from "./pages/LandingPage/AdoptPage.js";
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
      <Switch>
        <Route path="/petadoptionform">
          <PetAdoptionForm />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/adopt">
          <AdoptPage />
        </Route>
        <Route exact path="/dog">
          <DogPage />
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
