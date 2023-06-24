import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from './components/Main/MovieDetails';

function App() {
  return (
    <Box backgroundColor={"#3d3d3d"} height={"100vh"}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie-details/:id' element={<MovieDetails />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
