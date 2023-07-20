import axios from "axios";

export const getEthPrice = async () => {
  try {
    const etherScanApiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
    const ethData = await axios.get(
      `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${etherScanApiKey}`
    );
    return {
      usd: ethData.data.result.ethusd,
    };
  } catch (err) {
    console.log("get eth price err : ", err);
  }
};
