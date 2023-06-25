import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './Components/Header/Navbar';
import { Main } from './Components/Main/Main';

function App() {
  return (
    <Box>
      <Navbar />
      <Main />
    </Box>
  );
}

export default App;
