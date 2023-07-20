import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    addRemoveLoader: false,
    progressToDate: {
      loading: true,
      records: [],
      totalPccGainForTheWeek: 0,
      totalXpGainForTheWeek: 0,
    },
    byPosition: {
      loading: true,
      records: [],
      week: null,
    },
    lineUpLoading: true,
    defensiveLineUpPlayers: [],
    offensiveLineUpPlayers: [],
  },
  reducers: {
    playerSetState: (state, { payload }) => {
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

export const { playerSetState } = playerSlice.actions;

export default playerSlice.reducer;
