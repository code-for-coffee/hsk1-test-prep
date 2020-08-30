import "../styles/globals.css";
import WordContextProvider from "../storeProvider";

function HSKApp({ Component, pageProps }) {
  return (
    <WordContextProvider>
      <Component {...pageProps} />
    </WordContextProvider>
  );
}

export default HSKApp;
