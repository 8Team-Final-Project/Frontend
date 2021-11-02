import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";

const GlobalThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
