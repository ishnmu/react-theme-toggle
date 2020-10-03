import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle/Toggle";

const detectTheme = () => {
  const persistedTheme = localStorage.getItem("theme");
  if (persistedTheme) {
    return persistedTheme;
  }
  localStorage.setItem("theme", "light");
  return "light";
};

function App() {
  const [theme, setTheme] = useState(detectTheme);
  console.info("::theme", theme);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const toggleTheme = () => (theme === "light" ? setDark() : setLight());
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
