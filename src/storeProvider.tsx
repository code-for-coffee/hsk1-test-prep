import React, { createContext, useState } from "react";

const SESSION_CACHE_KEY = "hsk1_app_state";
export const WordContext = createContext(undefined);

const WordContextProvider = (props) => {
  const [words, setWord] = useState({});

  const updateWord = (word) => {
    const val = words[word.English] || false;
    const nextState = {
      ...words,
      ...{
        [word.English]: !val,
      },
    };
    setWord(nextState);
  };

  return (
    <WordContext.Provider value={{ words, updateWord }}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContextProvider;
