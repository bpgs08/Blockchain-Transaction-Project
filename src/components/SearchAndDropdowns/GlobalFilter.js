import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "regenerator-runtime/runtime";
import styled from "styled-components";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);

  return (
    <HomePageSearchInput
      value={value || ""}
      placeholder="Search your transaction, an address or a block"
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};

const HomePageSearchInput = styled.input`
  touch-action: manipulation;
  border: none;
  display: flex;
  flex: 1 1 0%;
  margin: 0px 10px 0px 0px;
  font-size: 18px;
  overflow: visible;
  &:focus {
    outline: none;
  }
`;

export default GlobalFilter;
