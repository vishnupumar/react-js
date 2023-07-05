import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Main/Home';
import { Products } from './Components/Main/Products';
import { Cart } from './Components/Main/Cart';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/products' element={<Products /> } />
          <Route path='/cart' element={<Cart /> } />
        </Routes>
    </div>
  );
}

export default App;
