// import { ethers } from "ethers";
// import { Magic } from "magic-sdk";
// import Web3 from "web3";
// import { ImmutableXClient } from "@imtbl/imx-sdk";
// import { uploadFile } from "./pinata";
// import asset from "../abi/Asset.json";
// import { MetadataTypes } from "@imtbl/imx-sdk";
// import { ConnectExtension } from "@magic-ext/connect";
// import {
//   Config,
//   createStarkSigner,
//   generateLegacyStarkPrivateKey,
//   ImmutableX,
// } from "@imtbl/core-sdk";
// import { collectionFetch } from "../store/collection/collection.fetch";

// const registrationContractAddress =
//   process.env.REACT_APP_REGISTRATION_CONTRACT_ADDRESS;
// const starkContractAddress = process.env.REACT_APP_STARK_CONTRACT_ADDRESS;

// const customNodeOptions = {
//   rpcUrl: process.env.REACT_APP_RPC_URL,
//   chainId: process.env.REACT_APP_CHAINID,
// };

// let magic = new Magic(process.env.REACT_APP_MAGIC_LINK_PUBLIC_KEY, {
//   network: customNodeOptions,
//   locale: "en_US",
//   extensions: [new ConnectExtension()],
// });
// const provider = new ethers.providers.Web3Provider(
//   magic.rpcProvider,
//   process.env.REACT_APP_NETWORK
// );

// export const connectUserWallet = async (email) => {
//   try {
//     const web3 = new Web3(magic.rpcProvider);
//     await magic.auth.loginWithEmailOTP({ email });

//     const signer = provider.getSigner();
//     console.log("signer at connect", signer);
//     //public key
//     const account = await web3.eth.getAccounts();

//     const digest = ethers.utils.hashMessage("Test");
//     const signMessage = await signer.signMessage("Test");

//     const unCompressedpublickey = ethers.utils.recoverPublicKey(
//       digest,
//       signMessage
//     );

//     localStorage.setItem("publicKey", account[0]);
//     localStorage.setItem("unCompressedPublickey", unCompressedpublickey);

//     console.log("publicKey", account[0]);
//     console.log("uncompressedpublicKey", unCompressedpublickey);
//     return {
//       publickey: account[0],
//     };
//   } catch (error) {
//     console.log("connect wallet error", error);
//   }
// };

// export const showMagicLinkWallet = async () => {
//   const walletInfo = await magic.connect.getWalletInfo();
//   const walletType = walletInfo.walletType;
//   console.log("walletType", walletType);
//   if (walletType === "magic") {
//     await magic.connect.showWallet();
//   }
// };
