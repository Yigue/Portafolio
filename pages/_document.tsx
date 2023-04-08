import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react';
import { ModeContext } from '../src/context/ModeContext';
export default function Document() {
 

  return (
    <Html lang="es" className=" ">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
