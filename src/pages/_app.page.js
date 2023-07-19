import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "styled-components";
config.autoAddCss = false;

import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyle";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
};

export default MyApp;
