import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://angarpro.com/" />
        <meta
          name="Description"
          content="Сайт компании АнгарПро. Проектирование, производство и строительство быстровозводимых зданий."
        />
        <link
          rel="icon"
          href="https://angarpro.com/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://angarpro.com/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://angarpro.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://angarpro.com/favicon-16x16.png"
        />
        <link rel="manifest" href={"/site.webmanifest"} />
        <link
          rel="mask-icon"
          href="https://angarpro.com/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <title>{"АнгарПро - строительство быстровозводимых зданий"}</title>
        <link
          rel="stylesheet"
          href={"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"}
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </Provider>
  );
}
