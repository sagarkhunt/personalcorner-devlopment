import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSetState } from "../store/auth/auth.slice";
import { disconnectMegicWallet } from "../utils/contract";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    dispatch(
      authSetState([
        { key: "authToken", value: null },
        { key: "user", value: null },
        { key: "role", value: null },
        { key: "public_key", value: null },
      ])
    );
    disconnectMegicWallet();
    navigate("/");
  }, [navigate, dispatch]);

  return <Fragment />;
};

export default Logout;
