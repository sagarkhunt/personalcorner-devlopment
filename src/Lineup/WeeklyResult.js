import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPlayersProgressToDate } from "../store/player/player.fetch";
import {
  fomatNumberToStandard,
  fomatNumberToCompact,
} from "../utils/fomatNumber";
import Spinner from "react-bootstrap/Spinner";
import { playerSetState } from "../store/player/player.slice";
import moment from "moment";
import Countdown, { zeroPad } from "react-countdown";
import { statesByPosition } from "../utils/stateByPosition";

const WeeklyResult = ({ activeTab }) => {
  const dispatch = useDispatch();
  const { progressToDate, byPosition } = useSelector((state) => state.player);

  const [nft, selectNft] = useState(null);

  const states = useMemo(() => {
    if (nft && nft.player) {
      return statesByPosition(nft.player.Position);
    }
    return [];
  }, [nft]);

  const nflTotal = useMemo(() => {
    if (nft && nft.playerStateBySeason) {
      let total = 0;
      for (const _state of states) {
        total = total + Number(nft.playerStateBySeason[_state.key] || 0);
      }
      return total;
    }
    return 0;
  }, [states, nft]);

  useEffect(() => {
    let intervalId = null;
    if (activeTab === "WeeklyResult") {
      selectNft(null);
      dispatch(getPlayersProgressToDate());
    }

    intervalId = setInterval(async () => {
      console.log("INTERVALID", intervalId);
      if (activeTab === "WeeklyResult") {
        selectNft(null);
        dispatch(getPlayersProgressToDate());
      }
    }, 180000);
    return () => {
      if (intervalId) clearInterval(intervalId);
      dispatch(
        playerSetState([
          { key: "progressToDate.loading", value: true },
          { key: "progressToDate.records", value: [] },
          { key: "progressToDate.totalPccGainForTheWeek", value: 0 },
          { key: "progressToDate.totalXpGainForTheWeek", value: 0 },
        ])
      );
    };
  }, [dispatch, activeTab]);

  // const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   if (open === false) {
  //     setTimeout(() => {
  //       setOpen(!open);
  //     }, 1000);
  //   }
  // }, [open]);

  return (
    <div>
      <Row className="mt-4 lineUpPage">
        <Col xxl={7} xl={12} className="mb-5" id="weeklyList">
          <div className="table-responsive WeeklyResultTable">
            <Table hover>
              <thead>
                <tr>
                  <th className="minWidth">ATHLETE NAME AND POS</th>
                  <th style={{ minWidth: "300px" }}>
                    {byPosition.week
                      ? `WEEK ${byPosition.week.Week}`
                      : "CURRENT SEASON"}{" "}
                    XP GAIN
                  </th>
                  <th>
                    {byPosition.week
                      ? `WEEK ${byPosition.week.Week}`
                      : "CURRENT SEASON"}{" "}
                    PCC GAIN
                  </th>
                </tr>
              </thead>
              <tbody>
                {progressToDate.loading ? (
                  <tr>
                    <td colSpan={3}>
                      <div className="text-center">
                        <Spinner animation="border" variant="light" />
                      </div>
                    </td>
                  </tr>
                ) : null}
                {progressToDate.records.map((record, index) => {
                  return (
                    <tr
                      key={index}
                      className="cursor-pointer"
                      onClick={() => selectNft(record)}
                    >
                      <td>
                        <div className="detailColumn">
                          <div className="me-2 img bg1">
                            <img src={record.imageUrl} alt={record.name} />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              {record.name}{" "}
                              <span
                                style={{ fontSize: "20px", color: "#C0E3FC" }}
                              >
                                {record.latestGame
                                  ? `${record.latestGame.Team} - `
                                  : null}
                                <span style={{ color: "#fff" }}>
                                  {record.player.Position}
                                </span>
                              </span>
                            </h4>
                            <p className="mb-0">
                              {record.latestGame &&
                              record.latestGame.DateTime &&
                              moment(record.latestGame.DateTime).isBefore(
                                moment()
                              ) &&
                              record.gameInfo &&
                              record.gameInfo.IsGameOver === false ? (
                                <span
                                  className="me-1"
                                  style={{ color: "#A1FFC0" }}
                                >
                                  Live
                                </span>
                              ) : null}
                              {record.latestGame ? (
                                <Fragment>
                                  {`${record.latestGame.Score} - ${record.latestGame.OpponentScore} vs ${record.latestGame.Opponent}`}
                                  <svg
                                    className="mx-1"
                                    width="4"
                                    height="5"
                                    viewBox="0 0 4 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2.0131"
                                      cy="2.2714"
                                      r="1.78312"
                                      fill="#C0E3FC"
                                    />
                                  </svg>
                                </Fragment>
                              ) : null}

                              {record.category ? (
                                <Fragment>{record.category}</Fragment>
                              ) : null}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <svg
                          width="41"
                          height="40"
                          viewBox="0 0 41 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="40"
                            height="40"
                            transform="translate(0.75)"
                            fill="#9BDAFE"
                          />
                          <path
                            d="M28.5275 18.8885C28.5275 18.2218 28.083 17.7773 27.4163 17.7773H21.8608V8.3329C21.8608 7.99957 21.6386 7.77734 21.3052 7.77734C21.083 7.77734 20.8608 7.88845 20.8608 8.11068L14.1941 20.6662C14.083 20.7773 14.083 20.8885 14.083 21.1107C14.083 21.7773 14.5275 22.2218 15.1941 22.2218H20.7497V31.6662C20.7497 31.9996 20.9719 32.2218 21.3052 32.2218C21.5275 32.2218 21.7497 32.1107 21.7497 31.8885L28.3052 19.444C28.4163 19.2218 28.5275 19.1107 28.5275 18.8885Z"
                            fill="#1D2529"
                          />
                        </svg>
                        <span className="font28 ms-2">
                          {record.playerState
                            ? fomatNumberToStandard(record.playerState.Points)
                            : "TBD"}
                        </span>
                      </td>
                      <td>
                        <span className="title">
                          <svg
                            className="me-2"
                            width="41"
                            height="40"
                            viewBox="0 0 41 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              transform="translate(0.75)"
                              fill="#FEF49B"
                            />
                            <path
                              d="M28.5809 26.2004C28.0822 26.8586 27.4739 27.4769 26.7559 28.0553C26.0379 28.6238 25.2201 29.0925 24.3026 29.4615C23.3852 29.8205 22.3829 30 21.2959 30C19.9496 30 18.7529 29.7507 17.7058 29.2521C16.6686 28.7435 15.796 28.0354 15.088 27.1279C14.3799 26.2104 13.8414 25.1384 13.4724 23.9117C13.1034 22.6751 12.9189 21.3338 12.9189 19.8878C12.9189 18.003 13.2381 16.3176 13.8763 14.8317C14.5245 13.3358 15.462 12.1591 16.6886 11.3014C17.9252 10.4338 19.436 10 21.2211 10C22.6871 10 24.0434 10.3141 25.2899 10.9424C26.5365 11.5707 27.5038 12.4882 28.1919 13.6948C27.9526 13.9541 27.6385 14.2483 27.2495 14.5774C26.8606 14.8965 26.4617 15.2057 26.0528 15.5049C25.6539 15.7941 25.3099 16.0284 25.0207 16.2079C24.9708 16.0883 24.8611 15.8938 24.6916 15.6245C24.532 15.3453 24.3026 15.0611 24.0035 14.7719C23.7143 14.4727 23.3403 14.2184 22.8815 14.009C22.4328 13.7996 21.8943 13.6948 21.266 13.6948C20.7275 13.6948 20.2239 13.8245 19.7551 14.0838C19.2964 14.3431 18.8925 14.727 18.5435 15.2356C18.2044 15.7442 17.9352 16.3675 17.7357 17.1055C17.5462 17.8335 17.4515 18.6712 17.4515 19.6185C17.4515 20.4662 17.5362 21.264 17.7058 22.012C17.8753 22.7599 18.1196 23.4181 18.4388 23.9865C18.7679 24.555 19.1668 24.9988 19.6355 25.3179C20.1042 25.627 20.6327 25.7816 21.2211 25.7816C21.8594 25.7816 22.4477 25.6569 22.9863 25.4076C23.5248 25.1583 24.0134 24.8442 24.4522 24.4652C24.891 24.0763 25.28 23.6774 25.619 23.2685C25.9381 23.4779 26.2922 23.7572 26.6811 24.1062C27.07 24.4453 27.434 24.8043 27.7731 25.1832C28.1221 25.5522 28.3914 25.8913 28.5809 26.2004Z"
                              fill="#1D2529"
                            />
                          </svg>
                          <span className="font28 ms-2">
                            {record.playerState
                              ? fomatNumberToStandard(record.playerState.Reward)
                              : "TBD"}
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {!progressToDate.loading &&
                progressToDate.records.length === 0 ? (
                  <tr>
                    <td colSpan={3}>
                      <div className="text-center">
                        <h4 className="text-white">No players available.</h4>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </Table>
          </div>
        </Col>

        {nft ? (
          <Col xxl={5} xl={12} className="mb-5 selectedPlayer">
            <a onClick={() => selectNft(null)} className="mb-3 btnBack768Max">
              Back to Weekly Result
            </a>
            <div className="w-100 playerStatsDetails">
              <div className="playerPic">
                <img src={nft.imageUrl} className="img-fluid" alt={nft.name} />
              </div>
              <div className="playerDetails">
                <div className="heading">WEEK {byPosition.week.Week} STATS</div>
                <div className="details d-block">
                  <div className="row">
                    <div className="col-auto playerPic">
                      <img
                        className="img-fluid"
                        src={nft.imageUrl}
                        alt={nft.name}
                      />
                    </div>
                    <div className="col ms-2">
                      <h2 className="mb-0">
                        {nft.name} - {nft.player.Position}
                      </h2>
                      <div className="row mt-1">
                        <div className="d-flex col align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="35"
                              height="35"
                              transform="translate(0.88031 0.855469)"
                              fill="#9BDAFE"
                            />
                            <path
                              d="M25.1858 17.3843C25.1858 16.801 24.7969 16.4121 24.2136 16.4121H19.3525V8.14822C19.3525 7.85655 19.158 7.66211 18.8664 7.66211C18.6719 7.66211 18.4775 7.75933 18.4775 7.95378L12.6442 18.9399C12.5469 19.0371 12.5469 19.1343 12.5469 19.3288C12.5469 19.9121 12.9358 20.301 13.5192 20.301H18.3803V28.5649C18.3803 28.8566 18.5747 29.051 18.8664 29.051C19.0608 29.051 19.2553 28.9538 19.2553 28.7593L24.9914 17.8704C25.0886 17.676 25.1858 17.5788 25.1858 17.3843Z"
                              fill="#1D2529"
                            />
                          </svg>
                          <span className="font22LightBlue ms-2">
                            Total XP:{" "}
                            {nft.playerState
                              ? fomatNumberToCompact(nft.playerState.Points)
                              : "-"}
                          </span>
                        </div>
                        <div className="d-flex col align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="35"
                              height="35"
                              transform="translate(0.880371 0.855469)"
                              fill="#F6FE9B"
                            />
                            <path
                              d="M26.2112 24.5559C25.7126 25.2141 25.1043 25.8324 24.3863 26.4108C23.6682 26.9793 22.8505 27.448 21.933 27.8169C21.0155 28.176 20.0133 28.3555 18.9263 28.3555C17.58 28.3555 16.3833 28.1062 15.3362 27.6075C14.299 27.0989 13.4264 26.3909 12.7184 25.4834C12.0103 24.5659 11.4718 23.4938 11.1028 22.2672C10.7338 21.0306 10.5493 19.6893 10.5493 18.2433C10.5493 16.3585 10.8684 14.6731 11.5067 13.1872C12.1549 11.6913 13.0923 10.5145 14.319 9.65689C15.5555 8.78928 17.0664 8.35547 18.8515 8.35547C20.3175 8.35547 21.6737 8.66961 22.9203 9.29788C24.1669 9.92615 25.1342 10.8436 25.8223 12.0503C25.583 12.3096 25.2688 12.6038 24.8799 12.9329C24.491 13.252 24.0921 13.5612 23.6832 13.8603C23.2843 14.1495 22.9402 14.3839 22.651 14.5634C22.6012 14.4437 22.4915 14.2493 22.3219 13.98C22.1624 13.7008 21.933 13.4166 21.6338 13.1273C21.3446 12.8282 20.9707 12.5739 20.5119 12.3644C20.0632 12.155 19.5246 12.0503 18.8964 12.0503C18.3578 12.0503 17.8542 12.18 17.3855 12.4392C16.9268 12.6985 16.5229 13.0825 16.1738 13.5911C15.8348 14.0997 15.5655 14.723 15.3661 15.4609C15.1766 16.1889 15.0819 17.0266 15.0819 17.974C15.0819 18.8217 15.1666 19.6195 15.3362 20.3674C15.5057 21.1154 15.75 21.7736 16.0691 22.342C16.3982 22.9104 16.7971 23.3542 17.2658 23.6733C17.7346 23.9825 18.2631 24.1371 18.8515 24.1371C19.4897 24.1371 20.0781 24.0124 20.6166 23.7631C21.1552 23.5138 21.6438 23.1996 22.0826 22.8207C22.5214 22.4318 22.9103 22.0329 23.2494 21.624C23.5685 21.8334 23.9225 22.1126 24.3115 22.4617C24.7004 22.8007 25.0644 23.1598 25.4035 23.5387C25.7525 23.9077 26.0218 24.2468 26.2112 24.5559Z"
                              fill="#1D2529"
                            />
                          </svg>
                          <span className="font22LightYellow ms-2">
                            Total PCC:{" "}
                            {nft.playerState
                              ? fomatNumberToCompact(nft.playerState.Reward)
                              : "-"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="statsTable">
                  <div className="table-responsive">
                    <Table>
                      <thead>
                        <tr>
                          <th>TOT</th>
                          {states.map((_state, index) => (
                            <th key={index}>{_state.fullName}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{nflTotal}</td>
                          {states.map((_state, index) => (
                            <td key={index}>
                              {nft.playerStateBySeason &&
                              nft.playerStateBySeason[_state.key]
                                ? fomatNumberToCompact(
                                    nft.playerStateBySeason[_state.key]
                                  )
                                : 0}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ) : (
          <Col xxl={5} xl={12} className="weeklyResultRight">
            <div className="partOne mb-3">
              <h2>MATCH WEEK ENDS IN</h2>
              <p>
                PCC AND XP GAIN WILL BE ADDED TO WALLET BY END OF MATCH WEEK
              </p>
              <div className="mt-3 d-flex align-items-center font56Dark">
                <svg
                  className="me-3"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.7332 4.82227L43.1999 0.822266L55.4665 11.2223L51.9999 15.2223L39.7332 4.82227ZM0.533203 11.2223L12.7999 0.822266L16.2665 4.82227L3.99987 15.2223L0.533203 11.2223ZM27.9999 7.48893C14.6665 7.48893 3.99987 18.1556 3.99987 31.4889C3.99987 44.8223 14.6665 55.4889 27.9999 55.4889C41.3332 55.4889 51.9999 44.8223 51.9999 31.4889C51.9999 18.1556 41.3332 7.48893 27.9999 7.48893ZM37.5999 39.2223L26.9332 33.8889C25.8665 33.3556 25.3332 32.5556 25.3332 31.4889V18.1556H30.6665V29.8889L39.9999 34.4223L37.5999 39.2223Z"
                    fill="#0F3A3D"
                  />
                </svg>
                {/* 4D:20H:12M */}
                {/* {moment(byPosition.week.endDate).format('')} */}
                {byPosition.week ? (
                  <Countdown
                    date={moment(byPosition.week.endDate).toDate()}
                    renderer={({
                      hours,
                      minutes,
                      seconds,
                      completed,
                      days,
                    }) => {
                      if (completed) {
                        // Render a completed state
                        return "-";
                      } else {
                        // Render a countdown
                        return (
                          <span>
                            {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:
                            {zeroPad(seconds)}
                          </span>
                        );
                      }
                    }}
                  />
                ) : (
                  "-"
                )}
              </div>
            </div>
            <div className="partTwo mb-3">
              <h2>TOTAL XP GAIN FOR THE WEEK</h2>
              <p>ALL LINE-UP PLAYERS XP ACCUMULATED DURING MATCH WEEK</p>
              <div className="mt-3 d-flex align-items-center font56Dark">
                <svg
                  className="me-3"
                  width="35"
                  height="60"
                  viewBox="0 0 35 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6667 27.1549C34.6667 25.5549 33.6 24.4883 32 24.4883H18.6667V1.82161C18.6667 1.02161 18.1333 0.488281 17.3333 0.488281C16.8 0.488281 16.2667 0.754948 16.2667 1.28828L0.266666 31.4216C-2.58287e-07 31.6883 0 31.9549 0 32.4883C0 34.0883 1.06667 35.1549 2.66667 35.1549H16V57.8216C16 58.6216 16.5333 59.1549 17.3333 59.1549C17.8667 59.1549 18.4 58.8883 18.4 58.3549L34.1333 28.4883C34.4 27.9549 34.6667 27.6883 34.6667 27.1549Z"
                    fill="#1280BE"
                  />
                </svg>
                {fomatNumberToStandard(progressToDate.totalXpGainForTheWeek)}
              </div>
            </div>
            <div className="partThree mb-3">
              <h2>TOTAL PCC GAIN FOR THE WEEK</h2>
              <p>ALL LINE-UP PLAYERS PCC GAIN ACCUMULATED DURING MATCH WEEK</p>
              <div className="mt-3 d-flex align-items-center font56Dark">
                <svg
                  className="me-3"
                  width="64"
                  height="65"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.125 0.822266C14.5378 0.822266 0 15.1098 0 32.6973C0 50.2848 14.5378 64.8223 32.125 64.8223C49.7122 64.8223 64 50.2848 64 32.6973C64 15.1098 49.7122 0.822266 32.125 0.822266Z"
                    fill="#D3BD0D"
                  />
                  <path
                    d="M32.125 8.32227C18.6997 8.32227 7.5 19.2721 7.5 32.6973C7.5 46.1224 18.6997 57.3223 32.125 57.3223C45.5503 57.3223 56.5 46.1224 56.5 32.6973C56.5 19.2721 45.5503 8.32227 32.125 8.32227Z"
                    fill="#F9EF9B"
                  />
                  <path
                    d="M43.0675 41.5874C42.3628 42.5176 41.5031 43.3915 40.4883 44.2089C39.4735 45.0123 38.3178 45.6747 37.0211 46.1962C35.7245 46.7036 34.308 46.9573 32.7717 46.9573C30.869 46.9573 29.1777 46.6049 27.6978 45.9002C26.232 45.1814 24.9988 44.1807 23.9981 42.8982C22.9974 41.6015 22.2363 40.0864 21.7148 38.3528C21.1934 36.6051 20.9326 34.7095 20.9326 32.6658C20.9326 30.002 21.3836 27.6201 22.2857 25.52C23.2018 23.4059 24.5266 21.7428 26.2602 20.5307C28.0079 19.3045 30.1432 18.6914 32.666 18.6914C34.7379 18.6914 36.6547 19.1354 38.4165 20.0233C40.1782 20.9112 41.5454 22.2079 42.5179 23.9133C42.1796 24.2798 41.7356 24.6955 41.186 25.1606C40.6363 25.6117 40.0725 26.0486 39.4947 26.4714C38.9309 26.8801 38.4446 27.2113 38.0359 27.465C37.9654 27.2959 37.8104 27.0211 37.5708 26.6405C37.3453 26.2459 37.0211 25.8442 36.5983 25.4355C36.1896 25.0127 35.661 24.6532 35.0127 24.3573C34.3785 24.0613 33.6174 23.9133 32.7295 23.9133C31.9684 23.9133 31.2566 24.0965 30.5942 24.463C29.9459 24.8294 29.375 25.3721 28.8817 26.0909C28.4025 26.8097 28.022 27.6905 27.7401 28.7335C27.4723 29.7624 27.3384 30.9463 27.3384 32.2853C27.3384 33.4833 27.4582 34.6108 27.6978 35.6679C27.9374 36.7249 28.2827 37.6551 28.7338 38.4585C29.1989 39.2619 29.7626 39.8891 30.4251 40.3401C31.0875 40.777 31.8345 40.9955 32.666 40.9955C33.5681 40.9955 34.3996 40.8193 35.1607 40.4669C35.9218 40.1146 36.6124 39.6706 37.2325 39.135C37.8527 38.5854 38.4024 38.0216 38.8816 37.4437C39.3326 37.7397 39.8329 38.1343 40.3826 38.6276C40.9323 39.1068 41.4467 39.6142 41.9259 40.1498C42.4192 40.6713 42.7998 41.1505 43.0675 41.5874Z"
                    fill="#D3BD0D"
                  />
                </svg>
                {fomatNumberToStandard(progressToDate.totalPccGainForTheWeek)}
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default WeeklyResult;
