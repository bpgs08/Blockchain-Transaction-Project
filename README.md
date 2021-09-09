# Blockchain Transactions Project

## Getting started

```
cd Blockchain-Transaction-Project
npm install
npm start
```

Then open `http://localhost:3100/` to see the app.

## Loom Preview

https://www.loom.com/share/4e6784742e0941f197a746ec81f4fc3e

## Features
- NextJS
- React 
- Styled Components
- Mobile Responsiveness
- React Table 
- Sorting (Sorting by Coin and by Custodial or Non Custodial)
- Filtering (Filtering by Search Bar)


## Overview

Build a React application that uses the mocked endpoints in this repo to fetch and display all of a users transactions
(BTC, ETH, Custodial/Fiat) in a single list with descending chronological order.

## Requirements

- Add ability for user to search/filter and sort their transaction list.
- Display, at minimum, the following info on each transaction --> To, From, Amount (Fiat), Amount (Crypto), Date, Status,
  Transaction Type, Coin(s) in Transaction
- Crypto amounts should be represented in terms of Bitcoin/Ether with precision to 8 decimal places. For example `74927492` sats
  should be displayed as `0.74927492` and `3019313120320400000` wei should be displayed as `3.01931312`.

## Notes on API

- A transaction can be one of the following types: `buy`, `sell`, `sent`, `received`.
- A transaction can be in either of the following states: `PENDING`, `CONFIRMED`.
- The `amount` response in the BTC and ETH endpoints are expressed in their respective base units (Sats and Wei). You will
  need to do some Math to correctly display the amounts in UI.
- Custodial transactions use `createdAt` and non-custodial transactions use `insertedAt` as their respective timestamps.

