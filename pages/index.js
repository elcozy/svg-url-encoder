import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useState, useEffect } from "react";
import Content from "../components/content";

export default function Home({}) {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const bgGetLight = localStorage.getItem("bgLightTheme");
    setIsLight(bgGetLight === "true");
    console.log(bgGetLight, isLight);
  }, []);

  useEffect(() => {
    localStorage.setItem("bgLightTheme", isLight);
  }, [isLight]);
  console.log(isLight);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Content isLight={isLight} setIsLight={setIsLight} />
    </Layout>
  );
}
