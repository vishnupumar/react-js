import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get("https://fakestoreapi.com/products", {signal,})
      .then((res) => {
          setAllData(res.data);
          setState(res.data);
      })
      .catch((err) => {
        console.log("error while fetching data", err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const searchData = (name) => {
    setState(
      allData.filter((res) => {
        const val = res.title.toLowerCase();
        return val.includes(name)
      })
    );
  };

  return (
    <myContext.Provider value={{ state, searchData }}>
      {children}
    </myContext.Provider>
  );
};
