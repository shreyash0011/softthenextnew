import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "page-section/Components/custom.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" type="image/x-icon" href="/softthenext.png" />
        <title>Soft The Next</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
