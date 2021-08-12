import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/LandingPage/HomePage.js";
import { BrowserRouter as Route, Switch } from "react-router-dom";
// import Header from './pages/Header.js'

import DogPage from "./pages/LandingPage/DogPage.js";
import AdoptPage from "./pages/LandingPage/AdoptPage.js";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Switch>
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
