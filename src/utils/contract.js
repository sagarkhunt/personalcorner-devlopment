/* eslint-disable eqeqeq */
import { ethers } from "ethers";
import { Magic } from "magic-sdk";
import Web3 from "web3";
import { ImmutableXClient } from "@imtbl/imx-sdk";
import { uploadFile } from "./pinata";
import asset from "../abi/Asset.json";
import { MetadataTypes } from "@imtbl/imx-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import {
  Config,
  createStarkSigner,
  generateLegacyStarkPrivateKey,
  ImmutableX,
} from "@imtbl/core-sdk";
import { collectionFetch } from "../store/collection/collection.fetch";
import {
  checkUserOffchainRegistration,
  depositAmount,
  getBalance,
  registerUserOnchain,
} from "./registrationContract";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const registrationContractAddress =
  process.env.REACT_APP_REGISTRATION_CONTRACT_ADDRESS;
const starkContractAddress = process.env.REACT_APP_STARK_CONTRACT_ADDRESS;

const customNodeOptions = {
  rpcUrl: process.env.REACT_APP_RPC_URL,
  chainId: process.env.REACT_APP_CHAINID,
};

let userMagic = new Magic(process.env.REACT_APP_MAGIC_LINK_PUBLIC_KEY, {
  network: customNodeOptions,
  locale: "en_US",
  extensions: [new ConnectExtension()],
});

const userProvider = new ethers.providers.Web3Provider(
  userMagic.rpcProvider,
  process.env.REACT_APP_NETWORK
);

let magic = new Magic(process.env.REACT_APP_ADMIN_MAGIC_LINK_PUBLIC_KEY, {
  network: customNodeOptions,
});
const provider = new ethers.providers.Web3Provider(
  magic.rpcProvider,
  process.env.REACT_APP_NETWORK
);

export const connectUserWallet = async (email) => {
  try {
    const web3 = new Web3(userMagic.rpcProvider);
    await userMagic.auth.loginWithEmailOTP({ email });

    const signer = userProvider.getSigner();
    //public key
    const account = await web3.eth.getAccounts();

    const digest = ethers.utils.hashMessage("Test");
    const signMessage = await signer.signMessage("Test");

    const unCompressedpublickey = ethers.utils.recoverPublicKey(
      digest,
      signMessage
    );

    localStorage.setItem("publicKey", account[0]);
    localStorage.setItem("unCompressedPublickey", unCompressedpublickey);

    console.log("publicKey", account[0]);
    console.log("uncompressedpublicKey", unCompressedpublickey);
    return {
      publickey: account[0],
    };
  } catch (error) {
    console.log("connect wallet error", error);
  }
};

export const showMagicLinkWallet = async () => {
  const walletInfo = await userMagic.connect.getWalletInfo();
  const walletType = walletInfo.walletType;
  console.log("walletType", walletType);
  if (walletType === "magic") {
    await userMagic.connect.showWallet();
  }
};
export const connectAdminWallet = async (email) => {
  try {
    const web3 = new Web3(magic.rpcProvider);
    await magic.auth.loginWithEmailOTP({ email });
    const signer = provider.getSigner();
    //public key
    const account = await web3.eth.getAccounts();

    const digest = ethers.utils.hashMessage("Test");
    const signMessage = await signer.signMessage("Test");

    const unCompressedpublickey = ethers.utils.recoverPublicKey(
      digest,
      signMessage
    );

    localStorage.setItem("publicKey", account[0]);
    localStorage.setItem("unCompressedPublickey", unCompressedpublickey);

    console.log("publicKey", account[0]);
    console.log("uncompressedpublicKey", unCompressedpublickey);
    return {
      publickey: account[0],
    };
  } catch (error) {
    console.log("connect wallet error", error);
  }
};

export const mintNfts = async (data, setSubmitting) => {
  try {
    console.log("data", data);
    let publickey = localStorage.getItem("publicKey");
    let unCompressedPublickey = localStorage.getItem("unCompressedPublickey");
    console.log("publickey", publickey);
    console.log("uncompressed public key", unCompressedPublickey);
    const web3 = new Web3(magic.rpcProvider);
    const signer = provider.getSigner();
    console.log("signer public key", await signer.getAddress());

    //balance
    const balance = await provider.getBalance(publickey);
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(`balance: ${balanceInEth} ETH`);

    //create asset contract
    let contractAddress;
    const params = [publickey, "personalconrner", "PC", starkContractAddress];
    const payload = {
      arguments: params,
      data: asset.bytecode.toString(),
    };
    const contract = await new web3.eth.Contract(asset.abi);
    await contract
      .deploy(payload)
      .send({ from: publickey })
      .on("receipt", async (receipt) => {
        let contractdetail = receipt;
        console.log("asset receipt:", contractdetail);
        contractAddress = contractdetail.contractAddress;
      });

    //creating project
    const user = await ImmutableXClient.build({
      publicApiUrl: "https://api.sandbox.x.immutable.com/v1",
      starkContractAddress: starkContractAddress,
      registrationContractAddress: registrationContractAddress,
      // gasLimit: "7000000",
      // gasPrice: "40000000000",
      signer,
      enableDebug: true,
    });

    //register user

    let existingUser;
    let newUser;
    try {
      // Fetching existing user
      existingUser = await user.getUser({
        user: user.address,
      });
    } catch {
      try {
        // If user doesnt exist, create user
        newUser = await user.registerImx({
          etherKey: user.address,
          starkPublicKey: user.starkPublicKey,
        });
      } catch (error) {
        console.log("err", error);
      }
    }

    if (existingUser) {
      console.log("User already exists", existingUser);
    } else {
      console.log("User has been created", newUser);
    }

    const projectParams = {
      name: "Personal Corner",
      company_name: "Personal Corner",
      contact_email: process.env.REACT_APP_MINTING_EMAIL,
    };

    const project = await user.createProject(projectParams);

    console.log("ProjectId", project.id);
    const metadataObj = {
      name: data["nfttitle"],
      description: data["nftdescription"],
      image_url: data["image"],
      level: data["level"],
      collection: data["collection"],
    };
    const uploadfileData = await uploadFile(
      metadataObj,
      data["quantity"],
      data["collectionname"]
    );

    console.log("upload file data", uploadfileData);
    //create collection

    const collectionParams = {
      name: data["collectionname"],
      description: data["collectiondescription"],
      contract_address: contractAddress,
      owner_public_key: unCompressedPublickey,
      icon_url: data["image"],
      metadata_api_url: `https://gateway.pinata.cloud/ipfs/${uploadfileData}`,
      collection_image_url: data["image"],
      project_id: parseInt(project.id, 10),
    };
    console.log("collection param", collectionParams);
    let collection = await user.createCollection(collectionParams);

    console.log("collection", collection);
    // add meta data
    const param = {
      metadata: [
        {
          name: "name",
          type: MetadataTypes.Text,
        },
        {
          name: "description",
          type: MetadataTypes.Text,
        },
        {
          name: "image_url",
          type: MetadataTypes.Text,
        },
        {
          name: "level",
          type: MetadataTypes.Text,
        },
        {
          name: "collection",
          type: MetadataTypes.Text,
        },
      ],
    };

    await user.addMetadataSchemaToCollection(contractAddress, param);
    const mint_data = await bulkMint(
      signer,
      registrationContractAddress,
      contractAddress,
      data["quantity"],
      data["ethereumprice"],
      publickey
    );

    const apiRequest = {
      collectionName: data["collectionname"],
      collectionDescription: data["collectiondescription"],
      collectionContractAddress: contractAddress,
      owner: publickey,
      imageUrl: data["image"],
      projectId: project.id,
      nftName: data["nfttitle"],
      nftDescription: data["nftdescription"],
      nftImageUrl: data["image"],
      ethereumPrice: Number(data["ethereumprice"]),
      usdPrice: Number(data["priceusd"]),
      pccCoin: Number(data["pcccoin"]),
      isSale: data["sale"] == "1" ? true : false,
      startDate: data["startdate"],
      endDate: data["enddate"],
      saleEthereumPrice: Number(data["saleprice"]),
      saleUsdPrice: Number(data["usdprice"]),
      nftDetails: mint_data,
      quantity: Number(data["quantity"]),
      playerStats: data["playerstats"],
      category: data["category"],
      tier: data["tier"],
      G: data["G"],
      playerId: data["playerId"],
      GS: data["GS"],
      Number: data["Number"],
      Position: data["Position"],
      Rec: data["Rec"],
      YBC: data["YBC"],
      YDS: data["YDS"],
      nftCollection: data["collection"],
      level: data["level"],
      currency: data["currency"],
      oldCollection: data["oldCollection"],
      // attributes: [
      //   {
      //     key: "category",
      //     value: data["category"],
      //   },
      //   {
      //     key: "collection",
      //     value: data["collection"],
      //   },
      //   {
      //     key: "level",
      //     value: data["level"],
      //   },
      //   {
      //     key: "currency",
      //     value: data["currency"],
      //   },
      // ],
    };

    collectionFetch(apiRequest, setSubmitting);
  } catch (error) {
    console.log("mint nfts", error);
    setSubmitting(false);
  }
};

export const bulkMint = async (
  signer,
  registrationContractAddress,
  assetContractAddress,
  quantity,
  ethereumprice,
  publickey
) => {
  try {
    const BULK_MINT_MAX = 50;
    const wallet = publickey;
    console.log("wallet", wallet);
    console.log("signer public key", await signer.getAddress());
    const number = Number(quantity);

    if (number >= Number(BULK_MINT_MAX))
      throw new Error(
        `tried to mint too many tokens. Maximum ${BULK_MINT_MAX}`
      );

    const tokenId = parseInt("1", 10);

    const minter = await ImmutableXClient.build({
      publicApiUrl: "https://api.sandbox.x.immutable.com/v1",
      starkContractAddress: starkContractAddress,
      registrationContractAddress: registrationContractAddress,
      // gasLimit: "7000000",
      // gasPrice: "40000000000",
      signer,
      enableDebug: true,
    });

    console.log("MINTER REGISTRATION");
    const registerImxResult = await minter.registerImx({
      etherKey: minter.address.toLowerCase(),
      starkPublicKey: minter.starkPublicKey,
    });

    if (registerImxResult.tx_hash === "") {
      console.log("Minter registered, continuing...");
    } else {
      console.log("Waiting for minter registration...");
      await waitForTransaction(registerImxResult.tx_hash);
    }

    console.log(`OFF-CHAIN MINT ${number} NFTS`);

    const tokens = Array.from({ length: number }, (_, i) => i).map((i) => ({
      id: (tokenId + i).toString(),
      blueprint: "onchain-metadata",
    }));
    console.log("tokens", tokens);
    console.log("assetContract address", assetContractAddress);
    const payload = [
      {
        contractAddress: assetContractAddress,
        users: [
          {
            etherKey: wallet.toLowerCase(),
            tokens,
          },
        ],
      },
    ];

    const result = await minter.mintV2(payload);
    console.log("mint result", result);

    //refresh meta data
    const token_ids = result.results.map((item) => {
      return item.token_id;
    });
    refreshMetaData(signer, assetContractAddress, token_ids);

    const mint_response = [];
    //create order
    console.log("token result", result.results);
    for (const token of result.results) {
      const orderId = await createOrder(
        signer,
        assetContractAddress,
        token.token_id,
        ethereumprice
      );
      mint_response.push({
        tokenId: token.token_id,
        tokenAddress: token.contract_address,
        txId: token.tx_id,
        orderId: orderId,
      });
    }
    return mint_response;
  } catch (err) {
    console.log("minting error", err);
  }
};

const waitForTransaction = async (txId, provider) => {
  try {
    console.log("Waiting for transaction", {
      txId,
      etherscanLink: `https://goerli.etherscan.io/tx/${txId}`,
      alchemyLink: `https://dashboard.alchemyapi.io/mempool/eth-goerli/tx/${txId}`,
    });
    const receipt = await provider.waitForTransaction(txId);
    if (receipt.status === 0) {
      throw new Error("Transaction rejected");
    }
    console.log(`Transaction Mined: ${receipt.blockNumber}`);
    return receipt;
  } catch (err) {
    console.log("wait for transaction err : ", err);
  }
};

export const refreshMetaData = async (
  signer,
  collectionContractAddress,
  token_ids
) => {
  try {
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const client = new ImmutableX(config);
    const request = {
      collection_address: collectionContractAddress,
      token_ids: token_ids,
    };
    const createMetadataRefereshResponse = await client.createMetadataRefresh(
      signer,
      request
    );

    console.log(
      "create metadata refersh response ",
      createMetadataRefereshResponse
    );
    return createMetadataRefereshResponse.refresh_id;
  } catch (err) {
    console.log("refresh meta data err", err);
  }
};

export const createOrder = async (signer, tokenAddress, tokenId, eth) => {
  try {
    console.log("tokenAddress", tokenAddress);
    console.log("tokenId", tokenId);
    console.log("eth", eth);
    // const config = Config.SANDBOX;
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const client = new ImmutableX(config);
    const starkPrivateKey = await generateLegacyStarkPrivateKey(signer);
    const starkSigner = createStarkSigner(starkPrivateKey);
    console.log("starkPrivateKey", starkPrivateKey);
    console.log("starkSigner", starkSigner);
    const amountWei = Web3.utils.toWei(String(eth), "ether");
    const orderResponse = await client.createOrder(
      {
        ethSigner: signer,
        starkSigner: starkSigner,
      },
      {
        buy: {
          amount: amountWei,
          type: "ETH",
        },
        sell: {
          amount: 1,
          tokenAddress: tokenAddress.toLowerCase(),
          tokenId: tokenId,
          type: "ERC721",
        },
      }
    );
    console.log("create order", orderResponse);

    return orderResponse.order_id;
  } catch (err) {
    console.log("create order error : ", err);
  }
};

export const getBalances = async (public_key) => {
  try {
    const balance = await provider.getBalance(public_key);
    const balanceInEth = ethers.utils.formatEther(balance);
    return balanceInEth;
  } catch (err) {
    console.log("get balances err : ", err);
  }
};

export const createTradeWithOrderId = async (orderId, public_key) => {
  try {
    console.log("orderId", orderId);
    console.log("public_key", public_key);
    console.log("balance", await getBalances(public_key));
    const signer = userProvider.getSigner();
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const user = new ImmutableX(config);

    // const user = await ImmutableXClient.build({
    //   publicApiUrl: "https://api.sandbox.x.immutable.com/v1",
    //   starkContractAddress: process.env.REACT_APP_STARK_CONTRACT_ADDRESS,
    //   registrationContractAddress:
    //     process.env.REACT_APP_REGISTRATION_CONTRACT_ADDRESS,
    //   gasLimit: "7000000",
    //   gasPrice: "40000000000",
    //   signer,
    //   enableDebug: true,
    // });

    const starkPrivateKey = await generateLegacyStarkPrivateKey(signer);
    const starkSigner = createStarkSigner(starkPrivateKey);
    console.log("starkPrivateKey", starkPrivateKey);
    console.log("starkSigner", starkSigner);

    //register user

    // let existingUser;
    // let newUser;
    // try {
    //   // Fetching existing user
    //   existingUser = await user.getUser({
    //     user: user.address,
    //   });
    // } catch {
    //   try {
    //     // If user doesnt exist, create user
    //     newUser = await user.registerImx({
    //       etherKey: user.address,
    //       starkPublicKey: user.starkPublicKey,
    //     });
    //   } catch (error) {
    //     console.log("register Imx error", error);
    //   }
    // }

    // if (existingUser) {
    //   console.log("User already exists");
    // } else {
    //   console.log("User has been created");
    // }

    //deposite amount

    const depositRequest = {
      type: "ETH",
      amount: "50000000000000000",
    };

    const deposit = await user.deposit(
      signer,
      JSON.parse(JSON.stringify(depositRequest))
    );

    // const deposit = await user.deposit({
    //   user: public_key,
    //   token: {
    //     type: ETHTokenType.ETH,
    //     data: {
    //       decimals: 500000000,
    //     },
    //   },
    // });

    console.log("deposit", deposit);
    //using api

    // const depositDetails = {
    //   amount: "0.001",
    //   token: {
    //     type: "ETH",
    //     data: {
    //       decimals: 18,
    //     },
    //   },
    //   user: public_key, // Public L1 Ethereum address
    // };

    // axios("https://api.sandbox.x.immutable.com/v1/signable-deposit-details", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: JSON.stringify(depositDetails),
    // })
    //   .then((response) => {
    //     console.log("deposit", response);
    //   })
    //   .catch((err) => {
    //     console.error("deposit err", err);
    //   });

    // console.log("deposit", deposit);

    //create trade
    // const traderesponse = await user.createTrade(
    //   {
    //     ethSigner: signer,
    //     starkSigner: starkSigner,
    //   },
    //   {
    //     order_id: Number(orderId),
    //     user: public_key,
    //   }
    // );

    // console.log("traderesponse", traderesponse);
  } catch (err) {
    console.log("create Trade error :", err);
  }
};

export const disconnectMegicWallet = async () => {
  try {
    await magic.user.logout();
  } catch (err) {
    console.log("disconnet MagicWallet", err);
  }
};

// export const deposit = async (publicKey) => {
//   try {
//     const config = Config.SANDBOX; // Or PRODUCTION
//     const ethNetwork = "goerli"; // Or 'mainnet'
//     const client = new ImmutableX(config);
//     // Create Ethereum signer

//     const web3 = new Web3(userMagic.rpcProvider);
//     const provider = new AlchemyProvider(
//       ethNetwork,
//       "v9adX15-jhcpYii9o6D5YG1EyyJtvuOt"
//     ); // make sure this is set in your environment variables.
//     let l1Wallet;

//     //l1Wallet = Wallet.createRandom(); // create random wallet
//     // l1Wallet = new Wallet(
//     //   "40ac81906da978866fd7a60cf523ab6c82a3b917386cb3f0c412c3cd5851cbce"
//     // );
//     // Create eth signer
//     // const ethSigner = l1Wallet.connect(provider);

//     // const ethSigner = userProvider.getSigner();

//     // console.log("ethSigner", ethSigner);

//     console.log("L1 wallet address: ", (await web3.eth.getAccounts())[0]);

//     // Create Stark signer
//     const starkPrivateKey = await generateLegacyStarkPrivateKey(web3);
//     const starkSigner = createStarkSigner(starkPrivateKey);
//     console.log("l2 signer: ", starkSigner.getAddress());

//     // register off chain
//     await client.registerOffchain(web3);

//     // register on chain
//     const response = await client.usersApi.getSignableRegistration({
//       getSignableRegistrationRequest: {
//         ether_key: (await web3.eth.getAccounts())[0],
//         stark_key: await starkSigner.getAddress(),
//       },
//     });
//     console.log("response ", response.data);

//     const balancebeforeresponse = await client.listBalances({
//       owner: publicKey,
//     });

//     console.log("before balance", balancebeforeresponse);

//     // deposit funds
//     const amount = {
//       amount: "10000000000000000", //0.01eth
//       type: "ETH",
//     };

//     const deposit = await client.deposit(web3, amount);

//     const balanceresponse = await client.listBalances({
//       owner: publicKey,
//     });

//     console.log("balance", balanceresponse);
//     console.log(deposit.data);
//   } catch (err) {
//     console.log("deposit error ", err);
//   }
// };

// // const checkUserOffchainRegistration = async (ethSigner) => {
// //   try {
// //     // TODO: Move to production API once ready (using Goerli / Sandbox right now)
// //     const response = await fetch(
// //       `https://api.sandbox.x.immutable.com/v1/users/${await ethSigner.getAddress()}`
// //     );

// //     if (!response.ok) {
// //       if (response.status === 404) return false;
// //       throw "[Error] Status code: " + response.status;
// //     }

// //     const { accounts } = await response.json();
// //     if (!accounts) return false;

// //     return true;
// //   } catch (err) {
// //     console.error("Error trying to check off-chain registration");
// //     throw err;
// //   }
// // };

// // const checkUserOnchainRegistration = async (starkSigner) => {
// //   const provider = new JsonRpcProvider(process.env.REACT_APP_RPC_URL);
// //   const contract = Contracts.Registration.connect(
// //     process.env.REACT_APP_REGISTRATION_CONTRACT_ADDRESS,
// //     provider
// //   );

// //   try {
// //     return await contract.isRegistered(starkSigner.getAddress());
// //   } catch (err) {
// //     if (err.reason === "USER_UNREGISTERED") {
// //       return false;
// //     }

// //     throw err;
// //   }
// // };

// // const getOperatorSignature = async ({ ethSigner, starkSigner }) => {
// //   try {
// //     // TODO: Move to production API once ready (using Goerli / Sandbox right now)
// //     const response = await fetch(
// //       `https://api.sandbox.x.immutable.com/v1/signable-registration`,
// //       {
// //         method: "POST",
// //         body: JSON.stringify({
// //           ether_key: await ethSigner.getAddress(),
// //           stark_key: starkSigner.getAddress(),
// //         }),
// //       }
// //     );

// //     if (!response.ok) throw "[Error]  Status code: " + response.status;

// //     const { operator_signature } = await response.json();
// //     return operator_signature;
// //   } catch (err) {
// //     console.error("Error trying to get operator signature");
// //     throw err;
// //   }
// // };

// // const registerUserOnchain = async ({ ethSigner, starkSigner }) => {
// //   console.log("Attempting to register eth/stark link", {
// //     ether_key: await ethSigner.getAddress(),
// //     stark_key: starkSigner.getAddress(),
// //   });

// //   if (!(await checkUserOffchainRegistration(ethSigner)))
// //     throw "User is not registered off-chain";
// //   if (await checkUserOnchainRegistration(starkSigner))
// //     return { hash: "", registered: true };

// //   const balance = (await ethSigner.getBalance()).toString();
// //   if (balance === "0") throw "Insufficient L1 balance: " + balance;
// //   console.log("Current L1 balance (wei):", balance);

// //   const contract = Contracts.Core.connect(
// //     process.env.REACT_APP_STARK_CONTRACT_ADDRESS,
// //     ethSigner
// //   );
// //   const operator_signature = await getOperatorSignature({
// //     ethSigner,
// //     starkSigner,
// //   });

// //   const tx = await contract.registerUser(
// //     await ethSigner.getAddress(),
// //     starkSigner.getAddress(),
// //     operator_signature
// //   );
// //   console.log(`Waiting for L1 transaction (${tx.hash})`);
// //   await tx.wait();
// //   console.log(
// //     `L1 transaction complete (${tx.hash}) (${tx.confirmations} confirms)`
// //   );

// //   // you may check for success using the provider yourself
// //   return tx;
// // };

// export const deposit_new = async () => {
//   try {
//     // userProvider is a reference from your code
//     const config = Config.SANDBOX; // Or PRODUCTION
//     const ethNetwork = "goerli"; // Or 'mainnet'
//     const client = new ImmutableX(config);
//     const signer = userProvider.getSigner();
//     const starkPrivateKey = await generateLegacyStarkPrivateKey(signer);
//     const starkSigner = createStarkSigner(starkPrivateKey);

//     const { hash, registered, ...tx } = await registerUserOnchain({
//       ethSigner: signer,
//       starkSigner,
//     });
//     if (hash === "") {
//       if (!registered) {
//         console.error("Transaction invalid", tx);
//         throw "Transaction invalid";
//       }
//     }
//     console.log("User registration transaction:", hash);

//     const deposit = await client.deposit(signer, {
//       type: "ETH",
//       amount: "50000000000000000",
//     });
//     console.log("deposit", deposit);
//     console.log("signer public key", await signer.getAddress());
//     const publicKey = await signer.getAddress();
//     const balancebeforeresponse = await client.listBalances({
//       owner: publicKey,
//     });

//     console.log("balancebeforeresponse", balancebeforeresponse);

//     //create trade
//     // const traderesponse = await client.createTrade(
//     //   {
//     //     ethSigner: signer,
//     //     starkSigner: starkSigner,
//     //   },
//     //   {
//     //     order_id: Number(250912),
//     //     user: publicKey,
//     //   }
//     // );

//     // console.log("traderesponse", traderesponse);
//   } catch (err) {
//     console.log("deposite new ", err);
//   }
// };

export const createTradeInImx = async (orderId, amount, publicKey) => {
  try {
    console.log(
      "orderId : ",
      orderId,
      " amount : ",
      amount,
      " publicKey : ",
      publicKey
    );
    // const config = Config.SANDBOX; // Or PRODUCTION
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const client = new ImmutableX(config);
    const signer = userProvider.getSigner();
    const starkPrivateKey = await generateLegacyStarkPrivateKey(signer);
    const starkSigner = createStarkSigner(starkPrivateKey);

    //register user in off chain and on chain
    if (!(await checkUserOffchainRegistration(signer))) {
      try {
        await client.registerOffchain({
          ethSigner: signer,
          starkSigner: starkSigner,
        });
      } catch (err) {
        console.log("register off chain err", err);
      }
    }
    const L1Balance = (await signer.getBalance()).toString();
    if (L1Balance !== "0") {
      const { hash, registered, ...tx } = await registerUserOnchain({
        ethSigner: signer,
        starkSigner,
      });
      console.log("hash", hash, " registered : ", registered);
      if (hash === "") {
        if (!registered) {
          console.error("Transaction invalid", tx);
          toast.error("Transaction invalid");
        }
      }
    } else {
      // toast.error(
      //   "Your L1 balance isn’t enough to purchase that NFT. Please recharge it in our wallet section"
      // );
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your L1 balance isn’t enough to purchase that NFT. Please recharge it in our wallet section",
      });
    }

    const amountWei = Web3.utils.toWei(String(amount), "ether");
    console.log("amountwei", amountWei);

    // const depositeResponse = await depositAmount(client, signer, amountWei);
    // console.log("depositeResponse", depositeResponse);

    const balance = await getBalance(client, publicKey);

    console.log("balanceResponse", balance);

    if (Number(balance?.result[0]?.balance) >= Number(amountWei)) {
      //  create trade
      const traderesponse = await client.createTrade(
        {
          ethSigner: signer,
          starkSigner: starkSigner,
        },
        {
          order_id: Number(orderId),
          user: publicKey,
        }
      );
      console.log("traderesponse", traderesponse);

      const balance1 = await getBalance(client, publicKey);

      console.log("balanceResponse1", balance1);

      return traderesponse.trade_id;
    } else {
      // toast.error(
      //   "Your L2 balance isn’t enough to purchase that NFT. Please recharge it in our wallet section"
      // );

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your L2 balance isn’t enough to purchase that NFT. Please recharge it in our wallet section",
      });
    }
  } catch (err) {
    console.log("createTrade : ", err);
  }
};

export const depositAmountInL2 = async (amount) => {
  try {
    // const config = Config.SANDBOX; // Or PRODUCTION
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const client = new ImmutableX(config);
    const signer = userProvider.getSigner();
    const starkPrivateKey = await generateLegacyStarkPrivateKey(signer);
    const starkSigner = createStarkSigner(starkPrivateKey);

    if (!(await checkUserOffchainRegistration(signer))) {
      try {
        await client.registerOffchain({
          ethSigner: signer,
          starkSigner: starkSigner,
        });
      } catch (err) {
        console.log("register off chain err", err);
      }
    }
    const { hash, registered, ...tx } = await registerUserOnchain({
      ethSigner: signer,
      starkSigner,
    });
    console.log("hash", hash, " registered : ", registered);
    if (hash === "") {
      if (!registered) {
        console.error("Transaction invalid", tx);
        toast.error("Transaction invalid");
      }
    }
    const amountWei = Web3.utils.toWei(String(amount), "ether");
    const res = await depositAmount(client, signer, amountWei);
    return res;
  } catch (err) {
    console.log("deposit amount in L2", err);
  }
};

export const getL2Balance = async (publicKey) => {
  try {
    // const config = Config.SANDBOX; // Or PRODUCTION
    const config =
      process.env.REACT_APP_ENV == "production"
        ? Config.PRODUCTION
        : Config.SANDBOX;
    const client = new ImmutableX(config);
    return await getBalance(client, publicKey);
  } catch (err) {
    console.log("get l2 balance", err);
  }
};
