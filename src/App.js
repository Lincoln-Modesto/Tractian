import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme/default';

function App() {
  return (

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home/>
      </ThemeProvider>
  );
}

export default App;
