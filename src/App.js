import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle/Toggle";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle onClick={toggleTheme} />
        <h1>Its a {theme} theme</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
