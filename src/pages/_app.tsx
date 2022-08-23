import type { AppProps } from "next/app";
import { GlobalStyles } from "../constants/globalStyles";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
