import "../styles/globals.css";
import WordContextProvider from "../storeProvider";
import Header from "../Header";

function HSKApp({ Component, pageProps }) {
  return (
    <WordContextProvider>
      <Header />
      <Component {...pageProps} />
    </WordContextProvider>
  );
}

export default HSKApp;
