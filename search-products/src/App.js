import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import { Home } from "./Components/Main/Home";
import { ContextProvider } from "./Components/ContextApi/Context";
import { Routes, Route } from "react-router-dom";
import { About } from "./Components/Main/About";

function App() {
  return (
    <div className="App">
    <ContextProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        
      </ContextProvider>
    </div>
  );
}

export default App;
