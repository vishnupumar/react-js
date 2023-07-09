import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../users";
import { UserContext } from "../context/UserContext";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const LoginForm = () => {
  const { setLogged,setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    const user = users.filter((user) => {
      setUser(userName)
      return user.username === userName
    });
    if (user.length === 0) {
      alert("No user found ");
      return;
    } else {
      if (user[0].password !== password) {
        alert("Incorrect Password");
        return;
      }
      setIsLoggedIn(true);
      setTimeout(() => {
        alert("Login successfully!");
        setLogged(true);
        navigate("/polling-tab");
      }, 500);
      setIsLoggedIn(false);
    }
  };

  return (
    <Flex justify={"center"} align={"center"}  height={"93vh"}>
      <Box
        width={{ base: "200px", sm: "400px" }}
        m={"0 auto"}
        p={"10px"}
        border={"1px solid #b7b9bd"}
        borderRadius={"10px"}
      >
        <Box textAlign={"center"}>
          <Text fontSize={{base:"1xl",sm:"2xl",md:"3xl"}} fontWeight={"400"}>LOGIN</Text>
        </Box>
        <Input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          m={"10px 0"}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          m={"10px 0"}
          required
        />
        <Button
          className="loginBtn"
          onClick={login}
          width={"100%"}
          size={"sm"}
          colorScheme="blue"
          m={"10px 0"}
        >
          {isLoggedIn ? "Login in..." : "Login"}
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginForm;
