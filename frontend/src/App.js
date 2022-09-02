import GlobalStyles from "./styles/global/Global.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes/themes.styles";
import Layout from "./components/layout/Layout.component";
import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Header />
          <Footer />
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default App;
