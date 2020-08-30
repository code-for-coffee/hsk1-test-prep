import Head from "next/head";
import styles from "../styles/Home.module.css";
import hskDataset from "../../public/hsk1-dataset.json";
import { FunctionComponent, Fragment } from "react";
import classes from "../styles/Home.module.css";

const Home: FunctionComponent = () => {
  const sections = Object.keys(hskDataset);

  const SectionComponents = sections.map((section, j) => {
    const words = hskDataset[section].map((word, i) => {
      return (
        <li className={classes.cardItem} key={i}>
          <h1>{word["Hàn Zì"]}</h1>
          <h2>{word.English}</h2>
          <h3>{word.Pinyin}</h3>
        </li>
      );
    });
    return (
      <Fragment key={j}>
        <h1 className={classes.title}>{section}</h1>
        <ul className={classes.cards}>{words}</ul>
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
        <h1 className={styles.title}>HSK1 Prep</h1>

        <p className={styles.description}>
          This page is designed to be printed and used as a realtime study
          guide.
        </p>
        {SectionComponents}
      </main>
    </div>
  );
};

export default Home;
