import { Keypair } from "@solana/web3.js";
import * as fs from 'fs';

const keypair = Keypair.generate();

console.log(
  `You have generated your new wallet: ${keypair.publicKey.toBase58()}`
);

// Ask the user if they want to save the secret key to a JSON file
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Do you want to save the secret key to a JSON file named "wallet.json"? (yes/no): ', (answer: string) => {
  if (answer.toLowerCase() === 'yes') {
    const walletData = {
      publicKey: keypair.publicKey.toBase58(),
      secretKey: Array.from(keypair.secretKey)
    };

    fs.writeFileSync('wallet.json', `[${keypair.secretKey}]`);
    console.log('The secret key has been saved to "wallet.json".');
  } else {
    console.log('The secret key has not been saved.');
  }
  
  readline.close();
});
