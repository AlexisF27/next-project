
import NavBar from "./components/navBar/NavBar"
import NotePad from "./components/notePad/NotePad";
import Search from "./components/search/Search";
import { theme } from './utils/Themes/theme';
import { ThemeProvider} from "@mui/material"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Search />
        <NotePad/>

      </ThemeProvider>
    </>
  )
}

export default App
