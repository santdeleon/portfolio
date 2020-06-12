import React, { useState } from "react";
import { Switch, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import Particles from "particlesjs";

import "./App.css";

import Layout from "./components/Layout";
import Contact from "./pages/Contact";

import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <div className="rainbow-top"></div>
        <GlobalStyles />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Layout
                toggleTheme={toggleTheme}
                theme={theme}
                particles={Particles}
              />
            )}
          />

          <Route
            path="/contact"
            render={props => (
              <Contact
                toggleTheme={toggleTheme}
                theme={theme}
                particles={Particles}
              />
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
