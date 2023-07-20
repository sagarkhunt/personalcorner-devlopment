import { toast } from "react-toastify";
import AxiosRequest from "../../AxiosRequest";
import { nftSetState } from "./nft.slice";

export const fetchCollectionNfts = (id, params) => async (dispatch) => {
  try {
    dispatch(nftSetState([{ key: "nfts.loading", value: true }]));
    const { data } = await AxiosRequest.get(`/collections/${id}/nfts`, {
      params,
    });
    dispatch(
      nftSetState([
        { key: "nfts.loading", value: false },
        { key: "nfts.current", value: data.data.current },
        { key: "nfts.from", value: data.data.from },
        { key: "nfts.pages", value: data.data.pages },
        { key: "nfts.records", value: data.data.records },
        { key: "nfts.to", value: data.data.to },
        { key: "nfts.total", value: data.data.total },
      ])
    );
  } catch (error) {
    dispatch(
      nftSetState([
        { key: "nfts.loading", value: false },
        { key: "nfts.current", value: 0 },
        { key: "nfts.from", value: 0 },
        { key: "nfts.pages", value: 0 },
        { key: "nfts.records", value: [] },
        { key: "nfts.to", value: 0 },
        { key: "nfts.total", value: 0 },
      ])
    );
    toast.error(error.response.data.message);
  }
};

export const fetchCollectionNftsTiers = (id) => async (dispatch) => {
  try {
    dispatch(nftSetState({ key: "nfts.loading", value: true }));
    const { data } = await AxiosRequest.get(`/collections/${id}/nfts/tiers`);
    dispatch(
      nftSetState([
        { key: "nftsTiers.loading", value: false },
        { key: "nftsTiers.records", value: data.data },
      ])
    );
  } catch (error) {
    dispatch(
      nftSetState([
        { key: "nftsTiers.loading", value: false },
        { key: "nftsTiers.records", value: [] },
      ])
    );
    toast.error(error.response.data.message);
  }
};
