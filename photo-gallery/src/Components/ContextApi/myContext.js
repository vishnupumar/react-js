import { createContext, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const [images, setImages] = useState({});
  const [searched, setSearched] = useState("water");
  const [pageNum, setPageNum] = useState(1);
  const imagesApi = process.env.REACT_APP_IMAGE_API;

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${imagesApi}&query=${searched}&page=${pageNum}`
      )
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log("error while fetching images");
      });
  };
  
  return (
    <myContext.Provider
      value={{
        images,
        searched,
        setSearched,
        setPageNum,
        pageNum,
        fetchImages,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
