import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";

const PollingTab = () => {
  const { user, allUserData, setAllUserData } = useContext(UserContext);
  const [dishes, setDishes] = useState([]);
  const [rank1, setRank1] = useState(null);
  const [rank2, setRank2] = useState(null);
  const [rank3, setRank3] = useState(null);
  const [loading, setLoading] = useState(true);
  const [votingInProcess, setVotingInProcess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios
        .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        );
      setDishes(response.data);
      let flag = true;
      Object.keys(allUserData).forEach((ele) => {
        if (ele === user) {
          flag = false;
        }
      });

      if (flag) {
        setAllUserData({
          ...allUserData,
          [user]: response.data,
        });
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchDishes();
  }, []);

  // handle rank functions
  const rankOne = (id) => {
    // switch rank between different item
    if (id !== rank2 && id !== rank3) {
      setRank1(id);
    }

    // switch rank within same item
    if (id === rank2) {
      setRank2(null);
      setRank1(id);
    }
    if (id === rank3) {
      setRank3(null);
      setRank1(id);
    }
  };

  const rankTwo = (id) => {
    if (id !== rank1 && id !== rank3) {
      setRank2(id);
    }
    if (id === rank1) {
      setRank1(null);
      setRank2(id);
    }
    if (id === rank3) {
      setRank3(null);
      setRank2(id);
    }
  };

  const rankThree = (id) => {
    if (id !== rank1 && id !== rank2) {
      setRank3(id);
    }
    if (id === rank1) {
      setRank1(null);
      setRank3(id);
    }
    if (id === rank2) {
      setRank2(null);
      setRank3(id);
    }
  };

  // polling dish function
  function updateItem(id, val) {
    let arr = allUserData[user];
    let newItemList = arr.map((item) => {
      if (item.id === id) {
          item.points = val;
      } else {
        if (!item?.points) item.points = 0;
      }
      return item;
    });

    newItemList.sort((a, b) => {
      return parseFloat(b.points) - parseFloat(a.points);
    });
    setAllUserData({
      ...allUserData,
      [user]: newItemList,
    });
  }

  // handle vote button for polling
  const handleVote = () => {
    setVotingInProcess(true);
    updateItem(rank1, 30);
    updateItem(rank2, 20);
    updateItem(rank3, 10);
    setTimeout(() => {
      setVotingInProcess(false);
      navigate("/results-tab");
    }, 1000);
  };
  // const refresh = ()=>{
  //   const resetAllPoints = allUserData[user].map((ele) => {
  //     return {
  //       ...ele,
  //       points: 0,
  //     };
  //   });
  //   setAllUserData({
  //     ...allUserData,
  //     [user]: resetAllPoints,
  //   });
  //   setVoted(false)
  //   console.log(allUserData[user])
  //   console.log(resetAllPoints)
  // }

  return (
    <Box textAlign={"center"} m={"10px"}>
      {rank1 && rank2 && rank3 ? (
          <Button
          className="voteBtn"
          onClick={() => {
            handleVote() 
          }}
          colorScheme="green"
          position={"sticky"}
          top={0}
          zIndex={"1"}
        >
          {votingInProcess ? "Voting..." : "Vote"}
        </Button> 
      ) : (
        loading === false && (
          <Button
            className="voteBtn"
            isDisabled
            colorScheme="green"
            position={"sticky"}
            top={0}
            zIndex={"1"}
          >
            Vote
          </Button>
        )
      )}

      {loading ? (
        <Spinner />
      ) : (
        <Flex flexWrap={"wrap"} p={"20px"} justify={"center"}>
          {dishes.map((dish) => {
            const { id, dishName, description, image } = dish;
            return (
              <Box key={id} className="dishItem" width={"150px"} m={"10px"}>
                <Image src={image} alt="dish-img" width={150} />
                <Text
                  height={"80px"}
                  overflow={"hidden"}
                  fontSize={{ base: "1xl", sm: "2xl" }}
                  fontWeight={"600"}
                  width={150}
                >
                  {dishName}
                </Text>
                <Text width={150} height={"150px"} overflow={"hidden"}>
                  {description}
                </Text>
                <Box className="rank" m={"10px 0"} textAlign={"center"}>
                  <Button
                    onClick={() => rankOne(id)}
                    padding={"15px"}
                    borderRadius={"50%"}
                    bg={rank1 === id ? "blue" : "GrayText"}
                    color={rank1 === id ? "white" : "blackAlpha.600"}
                  >
                    1
                  </Button>
                  <Button
                    onClick={() => rankTwo(id)}
                    padding={"15px"}
                    borderRadius={"50%"}
                    bg={rank2 === id ? "blue" : "GrayText"}
                    color={rank2 === id ? "white" : "blackAlpha.600"}
                  >
                    2
                  </Button>
                  <Button
                    onClick={() => rankThree(id)}
                    padding={"15px"}
                    borderRadius={"50%"}
                    bg={rank3 === id ? "blue" : "GrayText"}
                    color={rank3 === id ? "white" : "blackAlpha.600"}
                  >
                    3
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Flex>
      )}
    </Box>
  );
};
export default PollingTab;
