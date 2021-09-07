import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS } from "./Columns";
import formatTransactionData from "../../utils/formatTransactionData";
import styled from "styled-components";
import GlobalFilter from "../SearchAndDropdowns/GlobalFilter";
import CoinDropdown from "../SearchAndDropdowns/CoinDropdown";
import TransactionDropdown from "../SearchAndDropdowns/TransactionDropdown";
import HomePageSearch from "../HomepageHeader/HomePageSearch";
import { media, colors } from "../../utils/theme";

const SortingTable = ({ transactions, prices }) => {
  const columns = React.useMemo(() => COLUMNS, []);

  const data = useMemo(
    () => formatTransactionData(transactions, prices),
    [transactions, prices]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setFilter,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ["isCustodial"],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;
  return (
    <>
      <HomePageSearch>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <DesktopOptionsWrapper>
          <CoinDropdown setFilter={setFilter} marginRight />
          <TransactionDropdown setFilter={setFilter} />
        </DesktopOptionsWrapper>
      </HomePageSearch>
      <MobileOptionsWrapper>
        <CoinDropdown setFilter={setFilter} marginRight />
        <TransactionDropdown setFilter={setFilter} />
      </MobileOptionsWrapper>
      <TableContainer {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <TableHeader
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </TableHeader>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow data-label={row.values} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableData
                      data-label={cell.column.Header}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </TableData>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
        <TableFoot>
          {footerGroups.map((footerGroup) => (
            <TableRow {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <TableFooter {...column.getFooterProps()}>
                  {column.render("Footer")}
                </TableFooter>
              ))}
            </TableRow>
          ))}
        </TableFoot>
      </TableContainer>
    </>
  );
};

const DesktopOptionsWrapper = styled.div`
  display: flex;
  ${media.tablet`
    display: none;
  `}
`;

const MobileOptionsWrapper = styled.div`
  justify-content: center;
  margin: 0 40px 40px 40px;
  font-size: 14px;
  display: none;
  ${media.tablet`
    display: flex;
  `}
`;

const TableHead = styled.thead``;

const TableFoot = styled.thead``;

const TableContainer = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 10px 0px;
  border-radius: 10px;
  font-size: 14px;
  max-width: 1400px;
  margin: 0 auto 400px auto;
  ${media.larger`
    border: 0;
    box-shadow: unset;
    ${TableFoot}, ${TableHead} {
      display: none;
    }
    font-size: 16px;
  `}
`;

const TableHeader = styled.th`
  padding: 1.625em;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${media.larger`
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `}
`;

const TableFooter = styled.td`
  padding: 1.625em;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  ${media.larger`
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `}
`;

const TableData = styled.td`
  padding: 1.625em;
  text-align: center;
  ${media.larger`
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      border-bottom: 0;
    }
  `}
`;

const TableRow = styled.tr`
  background-color: ${colors.white2};
  border: 1px solid #ddd;
  padding: 0.35em;
  ${media.larger`
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
    margin: 0 40px 40px 40px;
  `}
`;

export default SortingTable;
