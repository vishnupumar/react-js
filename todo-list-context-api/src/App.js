import './App.css';
import ContextProvider from './Components/ContextApi/ContextApi';
import { TodoApp } from './Components/TodoApp/TodoApp';
import { ChakraProvider, Flex } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ContextProvider>
        <Flex backgroundColor="grey" justifyContent="center" height="100vh">
            <TodoApp />
        </Flex>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
