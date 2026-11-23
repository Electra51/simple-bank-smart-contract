# Simple Bank Smart Contract

A beginner-friendly Ethereum smart contract built with Solidity and Hardhat. This project demonstrates basic banking operations such as depositing Ether, withdrawing Ether, and checking a user's balance.

## Features

- Deposit Ether into the smart contract
- Withdraw deposited Ether
- Check the caller's balance
- Balance tracking using Solidity mapping
- Deploy using Hardhat

## Tech Stack

- Solidity
- Hardhat
- JavaScript
- Ethers.js

## Smart Contract

The `SimpleBank.sol` contract includes:

- `deposit()` — Deposits Ether into the contract.
- `withdraw(uint256 amount)` — Withdraws Ether from the caller's balance.
- `getBalance()` — Returns the caller's recorded balance.

## Project Structure

```text
simple-bank-smart-contract/
├── contracts/
│   └── SimpleBank.sol
├── scripts/
│   └── deploy.js
├── test/
├── hardhat.config.js
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Electra51/simple-bank-smart-contract.git
cd simple-bank-smart-contract
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the contract

```bash
npx hardhat compile
```

### 4. Start a local blockchain

```bash
npx hardhat node
```

Keep this terminal running.

### 5. Deploy the contract

Open another terminal:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Learning Objectives

- Solidity basics
- Smart contract development
- Mapping and address
- `msg.sender` and `msg.value`
- Payable functions
- Ether transfers using `call`
- Contract deployment using Hardhat

## Disclaimer

This project is for educational purposes only. It has not been audited and is not intended for production use.
