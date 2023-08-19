import { GlobalStyle } from './GlobalStyle/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './GlobalStyle/themes/defaultTheme';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Home/>
        <GlobalStyle/>
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
