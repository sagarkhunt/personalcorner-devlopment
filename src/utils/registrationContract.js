import { JsonRpcProvider } from "@ethersproject/providers";
import { Config, Contracts, ImmutableX } from "@imtbl/core-sdk";
import { toast } from "react-toastify";

export const checkUserOffchainRegistration = async (ethSigner) => {
  try {
    // TODO: Move to production API once ready (using Goerli / Sandbox right now)
    const response = await fetch(
      `https://api.sandbox.x.immutable.com/v1/users/${await ethSigner.getAddress()}`
    );

    if (!response.ok) {
      if (response.status === 404) return false;
      throw "[Error] Status code: " + response.status;
    }

    const { accounts } = await response.json();
    if (!accounts) return false;

    return true;
  } catch (err) {
    console.error("Error trying to check off-chain registration");
    throw err;
  }
};

const checkUserOnchainRegistration = async (starkSigner) => {
  const provider = new JsonRpcProvider(process.env.REACT_APP_RPC_URL);
  const contract = Contracts.Registration.connect(
    process.env.REACT_APP_REGISTRATION_CONTRACT_ADDRESS,
    provider
  );

  try {
    return await contract.isRegistered(starkSigner.getAddress());
  } catch (err) {
    if (err.reason === "USER_UNREGISTERED") {
      return false;
    }

    throw err;
  }
};

const getOperatorSignature = async ({ ethSigner, starkSigner }) => {
  try {
    // TODO: Move to production API once ready (using Goerli / Sandbox right now)
    const response = await fetch(
      `https://api.sandbox.x.immutable.com/v1/signable-registration`,
      {
        method: "POST",
        body: JSON.stringify({
          ether_key: await ethSigner.getAddress(),
          stark_key: starkSigner.getAddress(),
        }),
      }
    );

    if (!response.ok) throw "[Error]  Status code: " + response.status;

    const { operator_signature } = await response.json();
    return operator_signature;
  } catch (err) {
    console.error("Error trying to get operator signature");
    throw err;
  }
};

export const registerUserOnchain = async ({ ethSigner, starkSigner }) => {
  console.log("Attempting to register eth/stark link", {
    ether_key: await ethSigner.getAddress(),
    stark_key: starkSigner.getAddress(),
  });

  if (!(await checkUserOffchainRegistration(ethSigner)))
    throw "User is not registered off-chain";
  if (await checkUserOnchainRegistration(starkSigner))
    return { hash: "", registered: true };

  const balance = (await ethSigner.getBalance()).toString();
  if (balance === "0") {
    toast.error("Insufficient L1 balance: " + balance);
    throw "Insufficient L1 balance: " + balance;
  }
  console.log("Current L1 balance (wei):", balance);

  const contract = Contracts.Core.connect(
    process.env.REACT_APP_STARK_CONTRACT_ADDRESS,
    ethSigner
  );
  const operator_signature = await getOperatorSignature({
    ethSigner,
    starkSigner,
  });

  const tx = await contract.registerUser(
    await ethSigner.getAddress(),
    starkSigner.getAddress(),
    operator_signature,
    { gasPrice: "100000000000" }
  );
  console.log(`Waiting for L1 transaction (${tx.hash})`);
  await tx.wait();
  console.log(
    `L1 transaction complete (${tx.hash}) (${tx.confirmations} confirms)`
  );

  // you may check for success using the provider yourself
  return tx;
};

export const depositAmount = async (client, signer, amount) => {
  try {
    const deposit = await client.deposit(signer, {
      type: "ETH",
      amount: amount,
    });
    console.log("deposit", deposit);
    return deposit;
  } catch (err) {
    console.log("deposit error", err);
  }
};

export const getBalance = async (client, publicKey) => {
  try {
    const balance = await client.listBalances({
      owner: publicKey,
    });

    return balance;
  } catch (err) {
    console.log("get balance err", err);
  }
};

export const getStarkKey = async () => {
  try {
    // const config = Config.SANDBOX; // Or PRODUCTION
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const client = new ImmutableX(config);

    const response = await client.getUser(
      "0x0a1084d033db4b102789046315b5c02f4b4b1b8a"
    );

    console.log("response", response);
  } catch (err) {
    console.log("err", err);
  }
};
