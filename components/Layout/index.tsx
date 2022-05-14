import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PageTitle } from "../../types/enums";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
  isLoading?: boolean;
}

const Layout = ({ children, title, isLoading }: ILayoutProps) => {
  return (
    <div className="min-h-100 pt-32 px-8 md:px-32 dark:bg-gray-600">
      <Head>
        <title className="capitalize">{title}</title>
        <meta name="description" content="Pokedex created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-center justify-center py-5 mb-10">
        <h1 className="text-6xl dark:text-white capitalize">{title}</h1>

        {title !== PageTitle.Home && !isLoading ? (
          <Link href="/">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 dark:text-slate-300 hover:text-slate-200 focus:outline-none font-medium p-2.5 text-center inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </button>
          </Link>
        ) : null}
      </header>

      <div className="container mx-auto min-h-screen">{children}</div>

      <footer className="flex p-8 justify-center items-center dark:text-white">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with &nbsp;🤟&nbsp; &amp; Next.js
        </a>
      </footer>
    </div>
  );
};

export default Layout;
