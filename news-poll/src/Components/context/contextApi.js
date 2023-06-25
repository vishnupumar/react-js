import { createContext, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [pageNum, setPageNum] = useState(0);

  const fetchNewsFrequently = () => {
    axios
      .get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNum}`)
      .then((res) => {
        setState(res.data)
      })
      .catch((err) => {
        alert("error While fetching");
      });
  };

  return (
    <myContext.Provider
      value={{ fetchNewsFrequently, state, pageNum, setPageNum }}
    >
      {children}
    </myContext.Provider>
  );
};
