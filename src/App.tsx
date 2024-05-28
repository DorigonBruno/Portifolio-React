import EstiloGlobal, { Container } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import ThemeLight from "./themes/light";
import ThemeDark from "./themes/dark";

function App() {
  const [useDark, setUseDark] = useState(false);

  function tradeTheme() {
    return setUseDark(!useDark);
  }

  return (
    <ThemeProvider theme={useDark ? ThemeDark : ThemeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={tradeTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
