import React, { useState, useEffect } from "react";
import DropdownContainer from "./DropdownContainer";

const TransactionDropdown = ({ setFilter }) => {
  const [transaction, setTransaction] = useState("noFilter");

  useEffect(() => {
    if (transaction === "noFilter") {
      setFilter("isCustodial", "");
    } else if (transaction === "custodial") {
      setFilter("isCustodial", "true");
    } else if (transaction === "nonCustodial") {
      setFilter("isCustodial", "false");
    }
  }, [transaction, setTransaction]);

  return (
    <DropdownContainer>
      <select onChange={(e) => setTransaction(e.target.value)}>
        <option value="noFilter">All Transactions</option>
        <option value="custodial">Custodial</option>
        <option value="nonCustodial">Non Custodial</option>
      </select>
    </DropdownContainer>
  );
};

export default TransactionDropdown;
