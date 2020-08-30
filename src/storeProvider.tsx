import React, { createContext, useState, useEffect } from "react";

export const WordContext = createContext(undefined);

const WordContextProvider = (props) => {
  const [words, setWord] = useState({});

  const updateWord = (word) => {
    const val = words[word.English] || false;
    setWord({
      ...words,
      ...{
        [word.English]: !val,
      },
    });
  };

  return (
    <WordContext.Provider value={{ words, updateWord }}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContextProvider;
