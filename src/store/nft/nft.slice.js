import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const nftSlice = createSlice({
  name: "nft",
  initialState: {
    nfts: {
      loading: true,
      current: 0,
      total: 0,
      records: [],
    },
    nftsTiers: {
      loading: true,
      records: [],
    },
  },
  reducers: {
    nftSetState: (state, { payload }) => {
      if (Array.isArray(payload)) {
        for (const obj of payload) {
          _.set(state, obj.key, obj.value);
        }
      } else {
        _.set(state, payload.key, payload.value);
      }
    },
  },
});

export const { nftSetState } = nftSlice.actions;

export default nftSlice.reducer;
