import AxiosRequest from "../../AxiosRequest";
import { toast } from "react-toastify";
import { authSetState } from "./auth.slice";
import { v4 as uuidv4 } from "uuid";
import * as mime from "mime-types";
import axios from "axios";
import { disconnectMegicWallet } from "../../utils/contract";

export const login =
  (values, setSubmitting, navigate, redirectUrl) => async (dispatch) => {
    try {
      const { data } = await AxiosRequest.post("auth/login", values);
      dispatch(
        authSetState([
          { key: "authToken", value: data.data.token },
          { key: "user", value: data.data.user },
          { key: "Pcc", value: data.data.user.Pcc },
          { key: "Xp", value: data.data.user.Xp },
          { key: "role", value: "user" },
        ])
      );
      localStorage.setItem("authToken", data.data.token);
      localStorage.setItem("role", "user");
      localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success(data.message);
      if (redirectUrl) {
        navigate(redirectUrl, { replace: true });
      } else {
        navigate("/PlayerLineUp");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setSubmitting(false);
    }
  };

export const adminLogin =
  (values, setSubmitting, navigate) => async (dispatch) => {
    try {
      const { data } = await AxiosRequest.post("admin/auth/login", values);
      dispatch(
        authSetState([
          { key: "authToken", value: data.data.token },
          { key: "user", value: data.data.user },
          { key: "role", value: data.data.user.type },
        ])
      );
      localStorage.setItem("authToken", data.data.token);
      localStorage.setItem("role", data.data.user.type);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success(data.message);
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
      setSubmitting(false);
    }
  };

export const signUp = (values, setSubmitting, navigate) => async (dispatch) => {
  try {
    const { data } = await AxiosRequest.post("auth/signUp", values);
    dispatch(
      authSetState([
        {
          key: "authToken",
          value: data.data.token,
        },
        {
          key: "user",
          value: data.data.user,
        },
      ])
    );
    localStorage.setItem("authToken", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));
    toast.success(data.message);
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
    setSubmitting(false);
  }
};

export const getAuthProfile = () => async (dispatch) => {
  try {
    dispatch(authSetState({ key: "auth_loader", value: true }));
    const { data } = await AxiosRequest.get("auth/profile");
    dispatch(
      authSetState([
        { key: "user", value: data.data },
        { key: "role", value: data.data.type },
        { key: "Xp", value: data.data.Xp },
        { key: "Pcc", value: data.data.Pcc },
        { key: "auth_loader", value: false },
      ])
    );
    localStorage.setItem("user", JSON.stringify(data.data));
  } catch (error) {
    toast.error(error.response.data.message);
    localStorage.clear();
    window.location.reload();
  }
};

export const socialSignUp = (values, navigate) => async (dispatch) => {
  try {
    dispatch(authSetState({ key: "social_loader", value: true }));
    const { data } = await AxiosRequest.post("auth/social-register", values);
    dispatch(
      authSetState([
        { key: "authToken", value: data.data.token },
        { key: "user", value: data.data.user },
        { key: "social_loader", value: false },
      ])
    );
    localStorage.setItem("authToken", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));
    toast.success(data.message);
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(authSetState({ key: "social_loader", value: false }));
  }
};

export const socialLogin = (values, navigate) => async (dispatch) => {
  try {
    dispatch(authSetState({ key: "social_loader", value: true }));
    const { data } = await AxiosRequest.post("auth/social-login", values);
    dispatch(
      authSetState([
        { key: "authToken", value: data.data.token },
        { key: "user", value: data.data.user },
        { key: "social_loader", value: false },
      ])
    );
    localStorage.setItem("authToken", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));
    toast.success(data.message);
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(authSetState({ key: "social_loader", value: false }));
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    const { data } = await AxiosRequest.get(`auth/${userId}`);

    dispatch(authSetState([{ key: "user", value: data.user }]));
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateUserProfile =
  (userId, values, setIsLoading) => async (dispatch) => {
    try {
      setIsLoading(true);
      const { data } = await AxiosRequest.post(
        `auth/${userId}/profile`,
        values
      );

      dispatch(authSetState([{ key: "user", value: data.data.user }]));
      localStorage.setItem("user", JSON.stringify(data.data.user));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
export const forgotPassword = async (values, setSubmitting, navigate) => {
  try {
    const { data } = await AxiosRequest.post("auth/forgot-password", values);

    console.log("data", data);
    navigate("/VerifyEmail", {
      state: { email: data.data.email, id: data.data._id },
    });
  } catch (error) {
    toast.error(error.response.data.message);
    setSubmitting(false);
  }
};
export const verifyOtp = async (values, setSubmitting, navigate) => {
  try {
    const { data } = await AxiosRequest.post("auth/verify-otp", values);

    toast.success(data.message);
    navigate("/ResetPassword", {
      state: { email: data.data.email, id: data.data._id },
    });
  } catch (error) {
    toast.error(error.response.data.message);
    setSubmitting(false);
  }
};

export const resetPassword = async (values, setSubmitting, navigate) => {
  try {
    const { data } = await AxiosRequest.post("auth/reset-password", values);
    toast.success(data.message);
    navigate("/login", { replace: true });
  } catch (error) {
    toast.error(error.response.data.message);
    setSubmitting(false);
  }
};

export const reSendOtp = async (values) => {
  try {
    const { data } = await AxiosRequest.post("auth/forgot-password", values);

    toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const logout = async () => async (dispatch) => {
  try {
    dispatch(
      authSetState([
        { key: "authToken", value: null },
        { key: "user", value: null },
        { key: "role", value: null },
        { key: "public_key", value: null },
      ])
    );
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("publicKey");
    disconnectMegicWallet();
    toast.success("logout successfully");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const connectWalletWithMagicLink =
  (userId, publicKey) => async (dispatch) => {
    try {
      console.log("userId", userId);
      console.log("publicKey", publicKey);
      await AxiosRequest.post("auth/connect-wallet", {
        userId: userId,
        walletAddress: publicKey,
      });
      dispatch(authSetState([{ key: "public_key", value: publicKey }]));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const disConnectWallet = () => async (dispatch) => {
  try {
    dispatch(authSetState([{ key: "public_key", value: null }]));
    localStorage.removeItem("publicKey");
    toast.success("disconnect wallet");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const uploadImageWithSignUrl = async (file) => {
  const ext = mime.extension(file.type);
  const { data } = await AxiosRequest.post("auth/get-signed-url", {
    file: `profile/${uuidv4()}.${ext}`,
    contentType: file.type,
  });
  const axiosInstance = axios.create();
  await axiosInstance.put(data.data.signedUrl, file, {
    headers: { "Content-Type": file.type },
  });

  return data.data.url;
};

export const sendChangePasswordEmail = async (userId, email) => {
  try {
    await AxiosRequest.get(`auth/change-password-email/${userId}`);
    toast.success(`change password email sent on ${email}`);
  } catch (error) {}
};
