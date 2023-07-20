import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collections: {
      loading: true,
      current: 0,
      total: 0,
      from: 0,
      pages: 0,
      to: 0,
      records: [],
    },
    newCollections: {
      loading: true,
      current: 0,
      from: 0,
      pages: 0,
      records: [],
      to: 0,
      total: 0,
    },
    collectionInfo: {
      loading: true,
      data: null,
    },
    userCollectionLoading: true,
    userCollection: [],
    allCollections: {
      loading: true,
      records: [],
    },
    topCollections: {
      loading: true,
      records: [],
    },
  },
  reducers: {
    collectionSetState: (state, { payload }) => {
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

export const { collectionSetState } = collectionSlice.actions;

export default collectionSlice.reducer;
