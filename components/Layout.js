import React from "react";
import Head from "next/Head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="descritpion" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ | Find the hotest party",
  description: "Find the latest dj and other events",
  keywords: "music, dj, events",
};
export default Layout;
