import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <div className="min-h-100 pt-32 px-32">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pokedex created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto min-h-screen">{children}</div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with 🤟 &amp; Next.js
        </a>
      </footer>
    </div>
  );
};

export default Layout;
