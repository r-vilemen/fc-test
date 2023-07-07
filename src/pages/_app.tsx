import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
