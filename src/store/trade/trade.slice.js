import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const tradeSlice = createSlice({
  name: "trade",
  initialState: {
    trade: [],
  },
  reducers: {
    tradeSetState: (state, { payload }) => {
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

export const { tradeSetState } = tradeSlice.actions;
export default tradeSlice.reducer;
