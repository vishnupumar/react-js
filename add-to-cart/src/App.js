import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './Components/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Main/Home';
import { Products } from './Components/Main/Products';
import { Cart } from './Components/Main/Cart';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Box>
  );
}

export default App;
