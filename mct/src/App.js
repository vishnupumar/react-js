import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PollingTab from './components/PollingTab';
import ResultsTab from './components/ResultsTab';
import Navigation from './components/Navigation';
import { ChakraProvider } from '@chakra-ui/react';
import { UserContext } from './context/UserContext';

const App = () => {
  const {logged} = useContext(UserContext)

  return (
    <ChakraProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path={"/polling-tab"} element={logged ? <PollingTab /> : <Navigate to={"/"} />} />
          <Route path={"/results-tab"} element={logged ? <ResultsTab /> : <Navigate to={"/"} />} />
        </Routes>
      </ChakraProvider>
  );
};

export default App;
