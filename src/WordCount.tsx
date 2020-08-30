import { WordContext } from "./storeProvider";
import { FunctionComponent } from "react";
import classes from "./styles/Home.module.css";

type WordCountProps = {
  shorthand?: boolean;
};

const WordCount: FunctionComponent<WordCountProps> = (props) => {
  const { shorthand = false } = props;
  return (
    <WordContext.Consumer>
      {(data) => {
        return (
          <p
            className={
              shorthand === false ? classes.description : classes.headerCount
            }
          >
            {
              Object.keys(data.words)
                .map((word) => data.words[word])
                .filter((w) => w === true).length
            }{" "}
            {shorthand === false
              ? ` out of 150 have been acknolwedged!`
              : `/ 150`}
          </p>
        );
      }}
    </WordContext.Consumer>
  );
};

export default WordCount;
