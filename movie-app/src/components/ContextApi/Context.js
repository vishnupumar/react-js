import { createContext, useState } from "react";
import axios from "axios";
import { movies } from "../../db";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [moviesData, setMoviesData] = useState(movies);
  const [searchedMovie, setSearchedMovie] = useState("harry potter");
  const [singleMovie,setSingleMovie] = useState({});
  const [pagination, setPagination] = useState(1);
  const ratingApi = process.env.REACT_APP_RATING_API
  const baseUrl = `https://www.omdbapi.com/?apikey=${ratingApi}`;

  const fetchSingleMovie = (id)=>{
    axios.get(`${baseUrl}&i=${id}`)
    .then((res)=>{
      setSingleMovie(res.data)
    }).catch((err)=>{
      alert("movie details not fetched.")
    })
  }

  const fetchMovies = (url) => {
    axios
      .get(`${baseUrl}&s=${url}`)
      .then((res) => {
        setMoviesData(res.data);
        setPagination(1);
      })
      .catch((err) => {
        alert("Cannot fetch movies");
      });
  };
  const fetchWithPages = (pageNum) => {
    axios
      .get(`${baseUrl}&s=${searchedMovie}&page=${pageNum}`)
      .then((res) => {
        setMoviesData(res.data);
      })
      .catch((err) => {
        alert("Cannot fetch movies");
      });
  };

  return (
    <myContext.Provider
      value={{
        fetchMovies,
        moviesData,
        setSearchedMovie,
        fetchWithPages,
        pagination,
        setPagination,
        fetchSingleMovie,
        singleMovie
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
