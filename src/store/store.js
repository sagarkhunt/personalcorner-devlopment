import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import collectionSlice from "./collection/collection.slice";
import userSlice from "./user/user.slice";
import nftSlice from "./nft/nft.slice";
import tradeSlice from "./trade/trade.slice";
import playerSlice from "./player/player.slice";
import gearSlice from "./gear/gear.slice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    collection: collectionSlice,
    nft: nftSlice,
    trade: tradeSlice,
    player: playerSlice,
    gear: gearSlice,
  },
});
