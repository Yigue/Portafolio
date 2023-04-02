import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ModeContext,
  ModeContextProvider,
} from "../src/context/ModeContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModeContextProvider>
      <Component {...pageProps} />
    </ModeContextProvider>
  );
}
