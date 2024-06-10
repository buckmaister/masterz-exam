import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const mintAddress = "8gouj9JkbUEVfdUXqSS1htxjQr7yWVos76CxsybKZSu";
const mint = new PublicKey(mintAddress);

(async () => {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );

    const ata = tokenAccount.address;
    console.log("Associated Token Account: ", ata.toBase58());

    const amount = 10e6;

    await mintTo(connection, keypair, mint, ata, keypair.publicKey, amount);

    console.log("Minted", amount, "to", ata.toBase58());
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
