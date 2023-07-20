import AxiosRequest from "../../AxiosRequest";
import { toast } from "react-toastify";
import { userSetState } from "./user.slice";

export const createUser =
  (values, setSubmitting, navigate) => async (dispatch) => {
    try {
      setSubmitting(true);
      const { data } = await AxiosRequest.post("admin/user", values);
      toast.success(data.message);
      navigate("/admin/users");
    } catch (error) {
      toast.error(error.response.data.message);
      setSubmitting(false);
    }
  };

export const getUsers = (params) => async (dispatch) => {
  try {
    dispatch(userSetState([{ key: "users.loading", value: true }]));
    const { data } = await AxiosRequest.get("admin/user", { params });
    dispatch(
      userSetState([
        { key: "users.loading", value: false },
        { key: "users.current", value: data.data.current },
        { key: "users.from", value: data.data.from },
        { key: "users.pages", value: data.data.pages },
        { key: "users.records", value: data.data.records },
        { key: "users.to", value: data.data.to },
        { key: "users.total", value: data.data.total },
        { key: "users.adminUsers", value: data.data.adminUsers },
        { key: "users.activeUsers", value: data.data.activeUsers },
      ])
    );
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const verifyUuid = async (values, navigate) => {
  try {
    const { message, data } = await AxiosRequest.post(
      "/admin/user/verifyUuid",
      values
    );
    toast.success("Create Password Successfully");
    if (data?.data?.type == "user") {
      navigate("/login");
    } else {
      navigate("/admin/login");
    }
  } catch (error) {
    navigate("/admin/login");
    toast.error(error.response?.data?.message);
  }
};
