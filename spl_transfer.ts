import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const mintAddress = "8gouj9JkbUEVfdUXqSS1htxjQr7yWVos76CxsybKZSu";
const mint = new PublicKey(mintAddress);

const fromAtaAddress = "3XXd3GZShn5pejevfctrm4BiUiPtw5k1zHCPs3DiYTaW";
const fromAta = new PublicKey(fromAtaAddress);

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58());

(async () => {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to.publicKey
    );

    const toAta = tokenAccount.address;
    console.log("Associated Token Account: ", toAta.toBase58());

    const amountToAta = tokenAccount.amount;
    console.log("Amount in ATA: ", amountToAta.toString());

    const amount = 3e6;

    await transfer(connection, keypair, fromAta, toAta, keypair, amount);

    console.log(
      "Transferred",
      amount,
      "from",
      fromAta.toBase58(),
      "to",
      toAta.toBase58()
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
