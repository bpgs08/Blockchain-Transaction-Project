import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import styledNormalize from "styled-normalize";
import App from "next/app";

import Layout from "components/Navigation/Layout";
import theme from "utils/theme";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    font-family: 'Inter',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, router, store } = this.props;
    const title = "Blockchain.com";
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={title} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component router={router} {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
