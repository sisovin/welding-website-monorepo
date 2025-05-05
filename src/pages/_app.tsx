import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
