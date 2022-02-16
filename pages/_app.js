import { NextUIProvider } from '@nextui-org/react';
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
