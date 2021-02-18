import "tailwindcss/tailwind.css";

import Layout from './../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout main={<Component {...pageProps} />} />
}

export default MyApp
