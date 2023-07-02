import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Main/Home";
import { Products } from "./Components/Main/Products";
import { About } from "./Components/Main/About";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((storeData) => {
    return storeData;
  });
  return (
    <Box>
      {data.themeMode === "dark" ? (
        <Text fontSize={"sm"} textAlign={"center"}>I have changed theme to dark</Text>
      ) : data.themeMode === "light" ? (
        <Text fontSize={"sm"} textAlign={"center"}>I have changed theme to light</Text>
      ) : (
        ""
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  );
}

export default App;
