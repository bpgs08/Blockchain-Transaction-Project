import React from "react";
import SortingTable from "../src/components/Table/SortingTable";
import HomePageHeader from "../src/components/HomepageHeader/HomePageHeader";

const NewHome = ({ transactions, prices }) => (
  <div>
    <HomePageHeader />
    <SortingTable transactions={transactions} prices={prices} />
  </div>
);

export const getStaticProps = async () => {
  const dev = process.env.NODE_ENV !== "production";

  const server = dev ? "http://localhost:3100" : "INSERT_PROD_LINK_HERE";

  const [btcNoncustodialRes, ethNoncustodialRes, custodialRes, pricesRes] =
    await Promise.all([
      fetch(`${server}/api/btc-noncustodial`),
      fetch(`${server}/api/eth-noncustodial`),
      fetch(`${server}/api/custodial`),
      fetch(`${server}/api/prices`),
    ]);
  const [btcNoncustodial, ethNoncustodial, custodial, prices] =
    await Promise.all([
      btcNoncustodialRes.json(),
      ethNoncustodialRes.json(),
      custodialRes.json(),
      pricesRes.json(),
    ]);

  const transactions = [...btcNoncustodial, ...ethNoncustodial, ...custodial];

  return {
    props: { transactions, prices }, // will be passed to the page component as props
  };
};

export default NewHome;
