import { toast } from "react-toastify";
import AxiosRequest from "../../AxiosRequest";
import { tradeSetState } from "./trade.slice";

export const createTrade = async (values) => {
  try {
    const { data } = await AxiosRequest.post("/trade/create-trade", values);
    toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const tradeList = (userId) => async (dispatch) => {
  try {
    const { data } = await AxiosRequest.get(`/trade/${userId}`);
    console.log("data", data);
    dispatch(tradeSetState([{ key: "trade", value: data.data }]));
    toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const checkTrade = async (values) => {
  try {
    const { data } = await AxiosRequest.post(
      "/trade/checkTradeWithUser",
      values
    );
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getPlayertrade = async (playerId) => {
  try {
    const { data } = await AxiosRequest.get(`/trade/${playerId}/players`);

    return data.data.trades;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
