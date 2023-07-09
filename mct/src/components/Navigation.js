import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Box, Flex } from '@chakra-ui/react';

const Navigation = () => {
  const { logged, setLogged,setUser} = useContext(UserContext)
  return (
    <Box p={"9px"} borderBottom={"1px solid grey"} bg={"teal"}>
      <Flex justify={"space-around"} flexWrap={"wrap"}>
        
        <Box color={"#f5f5f5"}>

          <Link to={logged ? "/polling-tab" : "/"}>Polling</Link>
        </Box>
        <Box color={"#f5f5f5"}>
          <Link to={logged ? "/results-tab" : "/"}>Results</Link>
        </Box>
        <Box color={"#fff"}>
          <Link to="/">{
            logged && <button onClick={()=>{
              setLogged(false)
              setUser("")
            }}>Logout</button> 
          }</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation;
