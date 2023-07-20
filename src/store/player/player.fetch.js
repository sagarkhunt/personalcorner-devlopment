import AxiosRequest from "../../AxiosRequest";
import { toast } from "react-toastify";
import { playerSetState } from "./player.slice";

export const getPlayersProgressToDate = () => async (dispatch) => {
  try {
    dispatch(playerSetState([{ key: "progressToDate.loading", value: true }]));
    const { data } = await AxiosRequest.get("players/progress-to-date");
    dispatch(
      playerSetState([
        { key: "progressToDate.loading", value: false },
        { key: "progressToDate.records", value: data.data.records },
        {
          key: "progressToDate.totalPccGainForTheWeek",
          value: data.data.totalPccGainForTheWeek,
        },
        {
          key: "progressToDate.totalXpGainForTheWeek",
          value: data.data.totalXpGainForTheWeek,
        },
      ])
    );
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getPlayersByPosition = () => async (dispatch) => {
  try {
    dispatch(playerSetState([{ key: "byPosition.loading", value: true }]));
    const { data } = await AxiosRequest.get("players/by-position");
    dispatch(
      playerSetState([
        { key: "byPosition.loading", value: false },
        { key: "byPosition.records", value: data.data.players },
        { key: "byPosition.week", value: data.data.week },
      ])
    );
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(
      playerSetState([
        { key: "byPosition.loading", value: false },
        { key: "byPosition.records", value: [] },
        { key: "byPosition.week", value: null },
      ])
    );
  }
};

export const addRemovePlayerToLineUp =
  ({ id, action, onSuccess }) =>
  async (dispatch) => {
    try {
      dispatch(playerSetState({ key: "addRemoveLoader", value: true }));
      const { data } = await AxiosRequest.post(
        `players/line-up/${id}/${action}`
      );
      toast.success(data.message);
      if (typeof onSuccess === "function") onSuccess();
      dispatch(playerSetState({ key: "addRemoveLoader", value: false }));
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(playerSetState({ key: "addRemoveLoader", value: false }));
    }
  };

export const getCurrentLineUp = () => async (dispatch) => {
  try {
    dispatch(playerSetState([{ key: "lineUpLoading", value: true }]));
    const { data } = await AxiosRequest.get("players/line-up");
    const defensiveLineUpPlayers = data.data.filter(
      (d) => d.player.PositionCategory === "DEF"
    );
    const offensiveLineUpPlayers = data.data.filter(
      (d) => d.player.PositionCategory === "OFF"
    );

    dispatch(
      playerSetState([
        { key: "defensiveLineUpPlayers", value: defensiveLineUpPlayers },
        { key: "offensiveLineUpPlayers", value: offensiveLineUpPlayers },
        { key: "lineUpLoading", value: false },
      ])
    );
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(
      playerSetState([
        { key: "defensiveLineUpPlayers", value: [] },
        { key: "offensiveLineUpPlayers", value: [] },
        { key: "lineUpLoading", value: false },
      ])
    );
  }
};
