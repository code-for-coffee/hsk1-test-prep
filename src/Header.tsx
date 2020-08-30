import { FunctionComponent, Fragment } from "react";
import WordCount from "./WordCount";

const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <header>
        <h3>HSK1 Test Prep - HSK一测试指南</h3>
        <WordCount shorthand={true} />
      </header>
    </Fragment>
  );
};

export default Header;
