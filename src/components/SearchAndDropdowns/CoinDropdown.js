import React, { useState, useEffect } from "react";
import DropdownContainer from "./DropdownContainer";

const CoinDropdown = ({ setFilter, marginRight }) => {
  const [coin, setCoin] = useState("noFilter");

  useEffect(() => {
    if (coin === "noFilter") {
      setFilter("coin", "");
    } else if (coin === "BTC") {
      setFilter("coin", "BTC");
    } else if (coin === "ETH") {
      setFilter("coin", "ETH");
    } else if (coin === "USD") {
      setFilter("coin", "USD");
    }
  }, [coin, setCoin, setFilter]);

  return (
    <DropdownContainer marginRight={marginRight}>
      <select onChange={(e) => setCoin(e.target.value)}>
        <option value="noFilter">All Coins</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="USD">USD</option>
      </select>
    </DropdownContainer>
  );
};

export default CoinDropdown;
