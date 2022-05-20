import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Inventory Management System</title>
        <meta name="description" content="Come to us for your inventory tracking" />
        <meta property='og:title' content='No other way to track your inventory better' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout