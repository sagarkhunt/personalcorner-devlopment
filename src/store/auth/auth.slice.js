import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const authToken = () => {
  try {
    return localStorage.getItem("authToken");
  } catch (error) {
    return null;
  }
};

// const user = () => {
//   try {
//     const _user = localStorage.getItem("user");
//     if (_user) {
//       return JSON.parse(_user);
//     }
//   } catch (error) {
//     return null;
//   }
// };

const role = () => {
  try {
    const role = localStorage.getItem("role");
    return role || null;
  } catch (error) {
    return null;
  }
};

const publicKey = () => {
  try {
    const publicKey = localStorage.getItem("publicKey");
    return publicKey || null;
  } catch (error) {
    return null;
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: authToken(),
    user: null,
    role: role(),
    social_loader: false,
    public_key: publicKey(),
    auth_loader: false,
    Pcc: 0,
    Xp: 0,
  },
  reducers: {
    authSetState: (state, { payload }) => {
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

export const { authSetState } = authSlice.actions;

export default authSlice.reducer;
