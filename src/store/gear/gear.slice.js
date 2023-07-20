import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const gearSlice = createSlice({
  name: "gear",
  initialState: {
    gears: {
      loading: true,
      current: 1,
      pages: 0,
      total: 0,
      records: [],
      from: 0,
      to: 0,
      trashCounts: 0,
    },
    gearCategories: {
      loading: true,
      current: 1,
      pages: 0,
      total: 0,
      records: [],
      from: 0,
      to: 0,
    },
    gearAllCategories: {
      loading: true,
      records: [],
    },
    allPlayers: {
      loading: true,
      records: [],
    },
  },
  reducers: {
    gearSetState: (state, { payload }) => {
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

export const { gearSetState } = gearSlice.actions;

export default gearSlice.reducer;
