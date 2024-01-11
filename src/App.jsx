import NavBar from "./components/navBar/NavBar"
import NotePad from "./components/notePad/NotePad";
import Search from "./components/search/Search";
import { ThemeProvider } from "@mui/material"
import { theme } from './utils/Themes/theme';
import { useState } from 'react';

function App() {

  const [inputSearch, setInputSearch] = useState('');

  const handleSearch = (movieInput) => {

    setInputSearch(movieInput);
  };

  return (
    <>
      <ThemeProvider theme={theme}>  
        <NavBar />
        <Search handleSearch={handleSearch}/>
        <NotePad inputSearch={inputSearch}/>
      </ThemeProvider>
    </>
  )
}

export default App
