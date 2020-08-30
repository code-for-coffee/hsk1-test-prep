import React, { createContext, useState, useEffect } from "react";

export const WordContext = createContext(undefined);

const WordContextProvider = (props) => {
  const [words, setWord] = useState({});

  const updateWord = (word) => {
    setWord({
      [word]: true,
    });
  };

  useEffect(() => {}, []);

  return (
    <WordContext.Provider value={{ words, updateWord }}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContextProvider;
