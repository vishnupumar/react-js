import { Box,Center,Flex,Image, Text } from "@chakra-ui/react";
import react, { useContext, useEffect } from "react";
import { myContext } from "../ContextApi/Context";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { fetchSingleMovie, singleMovie } = useContext(myContext);
  const { id } = useParams();

  useEffect(() => {
    fetchSingleMovie(id);
  }, []);
  return (
    <Box bg={"#3d3d3d"}>
    {
        singleMovie.Response === "True" && 
        <Center>
      <Flex flexWrap={{base:"wrap",md:"inherit"}} justifyContent={"center"} alignItems={"start"}>
        <Box width={{base:"50%",md:"100%"}} m={{base:"10px",md:"30px"}}>
          <Image
            src={singleMovie.Poster}
            alt={singleMovie.Type}
            height={{base:"400px",md:"300px",xs:"250px"}}
            width={{base:"450px",md:"400px",sm:"300px"}}
            shadow={"dark-lg"}
            m={"0 auto"}
          />
        </Box>
        <Box width={{base:"50%",md:"100%"}} m={{base:"10px",md:"30px 30px 30px 0"}} color={"#fff"}>
          <Text fontSize={{base:"2xl",md:"1xl"}}>{singleMovie.Title}</Text>
          <Text fontSize={{base:"small",md:"md"}} color={"lightgray"} >{singleMovie.Year}</Text>
          <Text fontSize={{base:"small",md:"md"}} color={"lightgreen"} >imdbRating : {singleMovie.imdbRating}</Text>
          <Text fontSize={{base:"small",md:"md"}}>imdbVotes : {singleMovie.imdbVotes}</Text>
          <Text fontSize={{base:"small",md:"md"}}>Length : {singleMovie.Runtime}</Text>
          <Text fontSize={{base:"small",md:"md"}} color={"lightblue"} >Plot : {singleMovie.Plot}</Text>
          <Text fontSize={{base:"small",md:"md"}}>Actors : {singleMovie.Actors}</Text>
          <Text fontSize={{base:"small",md:"md"}}>Writer : {singleMovie.Writer}</Text>
          <Text fontSize={{base:"small",md:"md"}} color={"lightgreen"}>Director : {singleMovie.Director}</Text>
          <Text fontSize={{base:"small",md:"md"}}>Genre : {singleMovie.Genre}</Text>
          <Text fontSize={{base:"small",md:"md"}}>Released : {singleMovie.Released}</Text>
          <Text fontSize={{base:"small",md:"md"}}>Language : {singleMovie.Language}</Text>
            {singleMovie.Ratings.map((ele)=>{
                return <Box>
                    <Text fontSize={{base:"small",md:"md"}} color={"lightgreen"}>{ele.Source}</Text>
                    <Text fontSize={{base:"small",md:"md"}}>{ele.Value}</Text>
                </Box>
            })}
        </Box>
      </Flex>
      </Center>
    }
    </Box>
  );
};
