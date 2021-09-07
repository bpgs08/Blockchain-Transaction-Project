const formatTransactionData = (standardData, exchangeRate) => {
  return standardData?.reduce((array, transaction) => {
    if ("coin" in transaction) {
      array.push({
        coin: transaction.coin,
        from: transaction.from,
        to: transaction.to,
        amountInCrypto: transaction.amount / 100000000,
        amountInFiat: (transaction.amount / 100000000) * exchangeRate.BTC,
        date: transaction.insertedAt * 1000,
        state: transaction.state,
        type: transaction.type,
        isCustodial: false,
      });
    } else if ("erc20" in transaction) {
      array.push({
        coin: "ETH",
        from: transaction.from,
        to: transaction.to,
        amountInCrypto: transaction.amount / 1000000000000000000,
        amountInFiat:
          (transaction.amount / 1000000000000000000) * exchangeRate.ETH,
        date: transaction.insertedAt * 1000,
        state: transaction.state,
        type: transaction.type,
        isCustodial: false,
      });
    } else if ("pair" in transaction) {
      const splitPair = transaction.pair.split("-");
      const from = splitPair[0];
      const to = splitPair[1];
      let coin = (from !== "USD" && from) || (to !== "USD" && to);
      let amountInCrypto;
      if (coin === "BTC") {
        amountInCrypto = transaction.fiatValue / exchangeRate.BTC;
      } else if (coin === "ETH") {
        amountInCrypto = transaction.fiatValue / exchangeRate.ETH;
      }

      array.push({
        coin: transaction.pair,
        from,
        to,
        amountInCrypto,
        amountInFiat: transaction.fiatValue,
        date: Date.parse(transaction.createdAt),
        state: transaction.state,
        type: transaction.type,
        isCustodial: true,
      });
    }
    return array;
  }, []);
};

export const formatDateCell = (date) =>
  new Date(date).toLocaleString("en-US", {
    day: "numeric", // numeric, 2-digit
    year: "numeric", // numeric, 2-digit
    month: "short", // numeric, 2-digit, long, short, narrow
    hour: "numeric", // numeric, 2-digit
    minute: "numeric", // numeric, 2-digit
  });

export const CurrencyCell = (currencyType, amount) => (
  <div>
    {amount} {""}
    {currencyType}
  </div>
);

export const TruncateTransactionCell = (value) => (
  <div>{value.length > 17 ? value.substr(0, 17) + "..." : value}</div>
);

export default formatTransactionData;
