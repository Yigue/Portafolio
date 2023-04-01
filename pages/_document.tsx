import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react';
import { ModeContext } from './context/ModeContext';

export default function Document() {
 

  return (
    <Html lang="en" className="bg-white dark:bg-neutral-900   scroll-smooth ">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
