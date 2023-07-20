import { toast } from "react-toastify";
import AxiosRequest from "../../AxiosRequest";
import { gearSetState } from "./gear.slice";

export const getGears = (params) => async (dispatch) => {
  try {
    dispatch(gearSetState({ key: "gears.loading", value: true }));
    const { data } = await AxiosRequest.get(`admin/collection/gearList`, {
      params: params,
    });
    dispatch(
      gearSetState([
        { key: "gears.loading", value: false },
        { key: "gears.current", value: data.data.current },
        { key: "gears.from", value: data.data.from },
        { key: "gears.pages", value: data.data.pages },
        { key: "gears.records", value: data.data.records },
        { key: "gears.to", value: data.data.to },
        { key: "gears.total", value: data.data.total },
        { key: "gears.trashCounts", value: data.data.trashCounts },
      ])
    );
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(
      gearSetState([
        { key: "gears.loading", value: false },
        { key: "gears.current", value: 0 },
        { key: "gears.from", value: 0 },
        { key: "gears.pages", value: 0 },
        { key: "gears.records", value: [] },
        { key: "gears.to", value: 0 },
        { key: "gears.total", value: 0 },
        { key: "gears.trashCounts", value: 0 },
      ])
    );
  }
};

export const getGearCategory = (params) => async (dispatch) => {
  try {
    dispatch(gearSetState({ key: "gearCategories.loading", value: true }));
    const { data } = await AxiosRequest.get(`/admin/gearCategory`, {
      params: params,
    });
    dispatch(
      gearSetState([
        { key: "gearCategories.loading", value: false },
        { key: "gearCategories.current", value: data.data.current },
        { key: "gearCategories.from", value: data.data.from },
        { key: "gearCategories.pages", value: data.data.pages },
        { key: "gearCategories.records", value: data.data.records },
        { key: "gearCategories.to", value: data.data.to },
        { key: "gearCategories.total", value: data.data.total },
      ])
    );
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(
      gearSetState([
        { key: "gearCategories.loading", value: false },
        { key: "gearCategories.current", value: 0 },
        { key: "gearCategories.from", value: 0 },
        { key: "gearCategories.pages", value: 0 },
        { key: "gearCategories.records", value: [] },
        { key: "gearCategories.to", value: 0 },
        { key: "gearCategories.total", value: 0 },
      ])
    );
  }
};

export const getAllGearCategory = () => async (dispatch) => {
  try {
    dispatch(gearSetState({ key: "gearAllCategories.loading", value: true }));
    const { data } = await AxiosRequest.get(`/admin/gearCategory/all`);
    dispatch(
      gearSetState([
        { key: "gearAllCategories.loading", value: false },
        { key: "gearAllCategories.records", value: data.data },
      ])
    );
  } catch (error) {
    dispatch(
      gearSetState([
        { key: "gearAllCategories.loading", value: false },
        { key: "gearAllCategories.records", value: [] },
      ])
    );
    toast.error(error.response.data.message);
  }
};

export const getAllCollectionPlayers = () => async (dispatch) => {
  try {
    dispatch(gearSetState({ key: "allPlayers.loading", value: true }));
    const { data } = await AxiosRequest.get(`admin/collection/playerList`);
    dispatch(
      gearSetState([
        { key: "allPlayers.loading", value: false },
        { key: "allPlayers.records", value: data.data },
      ])
    );
  } catch (error) {
    dispatch(
      gearSetState([
        { key: "allPlayers.loading", value: false },
        { key: "allPlayers.records", value: [] },
      ])
    );
    toast.error(error.response.data.message);
  }
};
