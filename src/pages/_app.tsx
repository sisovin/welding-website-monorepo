import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <Script
        src="https://cdn.example.com/script.js"
        strategy="beforeInteractive"
      />
    </Provider>
  );
}

export default MyApp;
