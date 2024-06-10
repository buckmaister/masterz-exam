# MasterZxSolana Bootcamp Exam Submission

This repository contains the submission for the MasterZxSolana Bootcamp exam. The objective is to create a native token on the Solana blockchain using the tools and methods covered in the Bootcamp.

## Exam Objective:
Create a native token on Solana utilizing the tools and methodologies discussed in the Bootcamp.

### Steps to Complete the MasterZxSolana Bootcamp Exam:

1. **Create a New Wallet: `keygen.ts`**
2. **Perform an Airdrop to Interact with Solana: `airdrop.ts`**
3. **Create a Mint and Mint Fungible Tokens: `spl_init.ts` & `spl_mint.ts`**
4. **Transfer These Tokens to a New Wallet: `spl_transfer.ts`**

## Solution:

### Step 1: Create a New Wallet
To create a new wallet, run the following command:
```sh
yarn keygen
```
This command will prompt you to save the secret key in a JSON file. It is crucial to save this file as it will be used in subsequent steps.

### Step 2: Perform an Airdrop
Next, perform an airdrop to fund the newly created wallet with SOL:
```sh
yarn airdrop 5
```
This command will credit 5 SOL to the newly created wallet.

### Step 3: Create and Mint Tokens
Create a mint with the following command:
```sh
yarn createMint
```
You will receive an address for the mint, for example:
```
8gouj9JkbUEVfdUXqSS1htxjQr7yWVos76CxsybKZSu
```
Now mint tokens using the command:
```sh
yarn mintToken
```
You should see an output similar to:
```
Associated Token Account: 3XXd3GZShn5pejevfctrm4BiUiPtw5k1zHCPs3DiYTaW
Minted 10000000 to 3XXd3GZShn5pejevfctrm4BiUiPtw5k1zHCPs3DiYTaW
```
You can verify the transaction on the Solana block explorer:
[View Transaction](https://explorer.solana.com/address/3XXd3GZShn5pejevfctrm4BiUiPtw5k1zHCPs3DiYTaW?cluster=devnet)

### Step 4: Transfer Tokens
Finally, transfer the tokens to a new wallet using the following command:
```sh
yarn transfer
```
The command will display output similar to:
```
To: 7dqZ384mDZY6iKKGGEJqfBuoncb7bc7WGce1cAiPJNB2
Associated Token Account: BYH7CFYS6M6NmYFumDJYSi2LKSevy7GMdcpVkCT1J2zh
Amount in ATA: 0
Transferred 3000000 from 3XXd3GZShn5pejevfctrm4BiUiPtw5k1zHCPs3DiYTaW to BYH7CFYS6M6NmYFumDJYSi2LKSevy7GMdcpVkCT1J2zh
```
You can verify the transfer of 3 SOL on the Solana block explorer:
[View Transfer](https://explorer.solana.com/address/BYH7CFYS6M6NmYFumDJYSi2LKSevy7GMdcpVkCT1J2zh?cluster=devnet)

## Repository Contents
- `keygen.ts`: Script to generate a new wallet.
- `airdrop.ts`: Script to perform an airdrop of SOL to the wallet.
- `spl_init.ts`: Script to initialize a mint.
- `spl_mint.ts`: Script to mint tokens to the associated token account.
- `spl_transfer.ts`: Script to transfer minted tokens to another wallet.
