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
      <main aria-live="polite" role="main">
        <Component {...pageProps} />
      </main>
      <Script
        src="https://cdn.example.com/script.js"
        strategy="beforeInteractive"
      />
    </Provider>
  );
}

export default MyApp;
