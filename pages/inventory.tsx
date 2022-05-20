import Head from "next/head"
import { SFullPage, SPageTitle } from "../components/styled"

const Inventory = () => {
  return (
    <SFullPage>
      <Head>
        <title>Inventory - Inventory Management System</title>
        <meta name="description" content="The cart page, that shows all items to be purchased" />
        <meta property="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SPageTitle>Inventory</SPageTitle>
    </SFullPage>
  )
}

export default Inventory