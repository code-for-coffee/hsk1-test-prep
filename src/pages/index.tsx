import Head from "next/head";
import styles from "../styles/Home.module.css";
import hskDataset from "../../public/hsk1-dataset.json";
import { FunctionComponent, Fragment, useContext } from "react";
import classes from "../styles/Home.module.css";
import { WordContext } from "../storeProvider";
import WordCount from "../WordCount";

type Word = {
  "Hàn Zì": string;
  English: string;
  Pinyin: string;
};

const Home: FunctionComponent = () => {
  const sections = Object.keys(hskDataset);

  const SectionComponents = sections.map((section, j) => {
    const wordsToDisplay = hskDataset[section].map((word: Word, i) => {
      const { words, updateWord } = useContext(WordContext);

      const onInteract = () => {
        console.log(word);
        updateWord(word);
      };
      return (
        <li
          className={
            words[word.English] === true
              ? classes.markedCardItem
              : classes.cardItem
          }
          key={i}
          onClick={onInteract}
        >
          <h1 className={classes.cardTitle}>{word["Hàn Zì"]}</h1>
          <h2 className={classes.cardEnglish}>{word.English}</h2>
          <h3 className={classes.cardPinyin}>{word.Pinyin}</h3>
        </li>
      );
    });
    return (
      <Fragment key={j}>
        <h1 className={classes.title}>{section}</h1>
        <ul className={classes.cards}>{wordsToDisplay}</ul>
      </Fragment>
    );
  });
  return (
    <div>
      <Head>
        <title>HSK1 Test Prep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>HSK1 Test Prep</h1>

        <p className={styles.description}>
          This page is designed to be used as a realtime study guide. After you
          understand a word you should tap it to mark it as learned.
        </p>
        <WordCount />
        {SectionComponents}
      </main>
    </div>
  );
};

export default Home;
