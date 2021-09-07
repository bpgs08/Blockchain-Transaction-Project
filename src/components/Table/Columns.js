import {
  formatDateCell,
  CurrencyCell,
  TruncateTransactionCell,
} from "../../utils/formatTransactionData";

export const COLUMNS = [
  {
    Header: "Coin",
    Footer: "Coin",
    accessor: "coin",
  },
  {
    Header: "Date",
    Footer: "Date",
    accessor: "date",
    Cell: ({ value }) => formatDateCell(value),
  },
  {
    Header: "Amount In Crypto",
    Footer: "Amount In Crypto",
    accessor: "amountInCrypto",
    Cell: (props) => {
      let coin;
      if (props.row.values.coin.includes("ETH")) {
        coin = "ETH";
      } else if (props.row.values.coin.includes("BTC")) {
        coin = "BTC";
      }
      return CurrencyCell(
        coin,
        parseFloat(props.row.values.amountInCrypto).toFixed(8)
      );
    },
  },
  {
    Header: "Amount In Fiat",
    Footer: "Amount In Fiat",
    accessor: "amountInFiat",
    Cell: (props) =>
      CurrencyCell("USD", parseFloat(props.row.values.amountInFiat).toFixed(2)),
  },
  {
    Header: "From",
    Footer: "From",
    accessor: "from",
    Cell: ({ value }) => TruncateTransactionCell(value),
  },
  {
    Header: "To",
    Footer: "To",
    accessor: "to",
    Cell: ({ value }) => TruncateTransactionCell(value),
  },
  {
    Header: "Type",
    Footer: "Type",
    accessor: "type",
    Cell: ({ value }) => value.toUpperCase(),
  },
  {
    Header: "State",
    Footer: "State",
    accessor: "state",
  },
  {
    Header: "Is Custodial",
    Footer: "Is Custodial",
    accessor: "isCustodial",
    Cell: ({ value }) => `${value}`,
    show: false,
  },
];

export default COLUMNS;
