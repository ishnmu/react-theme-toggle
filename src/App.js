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
        <Toggle onClick={toggleTheme} theme={theme} />
        <h1>{theme.toUpperCase()}</h1>
        <footer>
          <small>
            <b>Credits</b>
          </small>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            {`Inspired by `}
            <a
              href="https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/"
              title="css-tricks-article"
            >
              css-tricks article
            </a>
            {` from `}
            <a
              href="https://css-tricks.com/author/maksakymenko/"
              title="Maks Akymenko"
            >
              Maks Akymenko
            </a>
          </div>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
