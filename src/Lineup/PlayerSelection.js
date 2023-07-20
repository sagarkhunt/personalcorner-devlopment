import React, { useMemo, useState } from "react";
import { Row, Col, Button, Card, Tooltip } from "react-bootstrap";

// import infoImage from "../assets/images/infoImage.png";
import icBall from "../assets/images/icBall.png";
// import NFT_TRANS from "../assets/images/NFT_TRANS.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useDispatch, useSelector } from "react-redux";
import { playerSetState } from "../store/player/player.slice";
import { fomatNumberToCompact } from "../utils/fomatNumber";
import { toast } from "react-toastify";
import { getPostionFullname } from "../utils/nfl";
import { addRemovePlayerToLineUp } from "../store/player/player.fetch";
import { statesByPosition } from "../utils/stateByPosition";
import { getImageByTier } from "../utils/tier";

const PlayerSelection = ({ changeActiveTab, removePlayerToLineUp }) => {
  const dispatch = useDispatch();
  const { byPosition, defensiveLineUpPlayers, offensiveLineUpPlayers } =
    useSelector((state) => state.player);

  const [nft, setNft] = useState(null);

  const states = useMemo(() => {
    if (nft && nft.player) {
      return statesByPosition(nft.player.Position);
    }
    return [];
  }, [nft]);

  const defensivePlayers = useMemo(() => {
    if (!byPosition.loading) {
      const p = byPosition.records.find((r) => r._id === "DEF");
      if (p) return p.players;
    }
    return [];
  }, [byPosition]);

  const offensivePlayers = useMemo(() => {
    if (!byPosition.loading) {
      const p = byPosition.records.find((r) => r._id === "OFF");
      if (p) return p.players;
    }
    return [];
  }, [byPosition]);

  const onSuccess = (key, value) => {
    dispatch(playerSetState({ key, value }));
  };

  const selectCurrentNft = (_nft) => {
    if (window.innerWidth <= 1440) {
      window.scrollTo(0, 0);
    }
    if (nft && nft._id === _nft._id) {
      setNft(null);
    } else {
      setNft(_nft);
    }
  };

  const addPlayerToLineUp = (nft) => {
    if (nft.player.PositionCategory === "DEF") {
      const defensivePlayers = [...defensiveLineUpPlayers];
      if (defensivePlayers.length >= 4) {
        toast.error("You can not select more then 4 defensive players.");
      } else {
        defensivePlayers.push(nft);
        dispatch(
          addRemovePlayerToLineUp({
            id: nft._id,
            action: "add",
            onSuccess: () => {
              changeActiveTab("LineupSection");
              onSuccess("defensiveLineUpPlayers", defensivePlayers);
            },
          })
        );
      }
    } else {
      const offensivePlayers = [...offensiveLineUpPlayers];
      if (offensivePlayers.length >= 4) {
        toast.error("You can not select more then 4 offensive players.");
      } else {
        offensivePlayers.push(nft);
        dispatch(
          addRemovePlayerToLineUp({
            id: nft._id,
            action: "add",
            onSuccess: () => {
              changeActiveTab("LineupSection");
              onSuccess("offensiveLineUpPlayers", offensivePlayers);
            },
          })
        );
      }
    }
  };

  // const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   if (open === false) {
  //     setTimeout(() => {
  //       setOpen(!open);
  //     }, 1000);
  //   }
  // }, [open]);
  // const getActiveCard = (i) => {
  //   var header = document.getElementById("infoData");
  //   var activeCards = header.getElementsByClassName("active");
  //   activeCards.length > 0 && activeCards[0].classList.remove("active");
  //   console.log(document.getElementById(i));
  //   document.getElementById(i).classList.add("active");
  // };
  // const playerSelectFunc = () => {
  //   const playerList = document.getElementById("playerList");
  //   const selectedPlayer = document.getElementById("selectedPlayer");
  //   if (window.screen.width <= 768) {
  //     if (selectedPlayer.classList.contains("defHideMax768")) {
  //       selectedPlayer.classList.remove("defHideMax768");
  //       playerList.classList.add("defHideMax768");
  //     } else {
  //       playerList.classList.remove("defHideMax768");
  //       selectedPlayer.classList.add("defHideMax768");
  //     }
  //   }
  // };

  const playerSelected = useMemo(() => {
    if (nft) {
      if (nft.player.PositionCategory === "DEF") {
        const selected = defensiveLineUpPlayers.find((p) => p._id === nft._id);
        if (selected) return true;
      } else {
        const selected = offensiveLineUpPlayers.find((p) => p._id === nft._id);
        if (selected) return true;
      }
    }

    return false;
  }, [nft, offensiveLineUpPlayers, defensiveLineUpPlayers]);

  return (
    <div>
      <Row className="mt-4 lineUpPage">
        <Col
          xxl={7}
          xl={12}
          className="playerList playerListPos"
          id="playerList"
        >
          <div className="w-100 mb-5">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-0 joy_1">DEFENSIVE PLAYERS</h3>
              {/* <div>
                <Form.Select aria-label="Default select example">
                  <option>Filter By: All</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div> */}
            </div>
            <hr />
            <Row className="mt-4 listingAreaMobile">
              {defensivePlayers.length === 0 ? (
                <h4 className="text-white">No defensive players available.</h4>
              ) : null}
              {defensivePlayers.map((item, i) => (
                <Col
                  xxl={3}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  className="mb-3 col"
                  key={i}
                >
                  <Card
                    role="button"
                    onClick={() => selectCurrentNft(item)}
                    //   setState({
                    //     ...state,
                    //     stepIndex: state.stepIndex + 1,
                    //   });
                    //   playerSelectFunc();
                    // }}
                    className={`info-card joyStep${i + 1}_1`}
                  >
                    <div className="info-img">{getImageByTier(item.tier)}</div>
                    <div className="info-Number">
                      {item.playerState ? item.playerState.Level : 0}
                    </div>
                    <div className="info-card-img">
                      <Card.Img className="img-fluid" src={item.imageUrl} />
                    </div>
                    <div className="info-card-body">
                      <Card.Body className="p-2 d-flex justify-content-between">
                        <div>
                          <Card.Title className="mb-0 info-card-title">
                            {item.name}
                          </Card.Title>
                          <div className="m-0 card-textNew">
                            <div className="info-card-body-text align-items-center">
                              <div className="me-1">
                                <img src={icBall} alt="" />
                              </div>
                              <div className="inner-text-info">
                                {getPostionFullname(item.player.Position)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="playerLabel">
                          {item.player.Position}
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              ))}
              {/* <Col xxl={3} xl={4} lg={4} md={4} sm={4} className="mb-3 col">
                  <div className="playerNotAvailable">
                    <Button className="btn addBtn joy_2">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7555 3.15944C13.3289 3.16611 12.9223 3.34177 12.6251 3.64788C12.3287 3.95306 12.1651 4.36303 12.1699 4.78829V11.85H5.10829C4.89623 11.8475 4.68576 11.887 4.48895 11.966C4.29088 12.0456 4.1106 12.1638 3.9586 12.3137C3.8066 12.4635 3.6859 12.6421 3.60351 12.839C3.52113 13.036 3.4787 13.2473 3.4787 13.4608C3.4787 13.6742 3.52113 13.8856 3.60351 14.0825C3.6859 14.2794 3.8066 14.458 3.9586 14.6079C4.1106 14.7577 4.29088 14.8759 4.48895 14.9555C4.68576 15.0346 4.89623 15.074 5.10829 15.0715H12.1699V22.1332C12.1675 22.3452 12.2069 22.5557 12.286 22.7525C12.3656 22.9506 12.4837 23.1309 12.6336 23.2829C12.7835 23.4349 12.9621 23.5556 13.159 23.638C13.3559 23.7203 13.5672 23.7628 13.7807 23.7628C13.9942 23.7628 14.2055 23.7203 14.4024 23.638C14.5993 23.5556 14.7779 23.4349 14.9278 23.2829C15.0777 23.1309 15.1958 22.9506 15.2754 22.7525C15.3545 22.5557 15.3939 22.3453 15.3915 22.1333V15.0715H22.4531C22.6652 15.074 22.8757 15.0346 23.0725 14.9555C23.2705 14.8759 23.4508 14.7577 23.6028 14.6079C23.7548 14.458 23.8755 14.2794 23.9579 14.0825C24.0403 13.8856 24.0827 13.6742 24.0827 13.4608C24.0827 13.2473 24.0403 13.036 23.9579 12.839C23.8755 12.6421 23.7548 12.4635 23.6028 12.3137C23.4508 12.1638 23.2705 12.0456 23.0725 11.966C22.8757 11.887 22.6652 11.8475 22.4531 11.85H15.3915V4.7882C15.3939 4.57405 15.3536 4.36156 15.2729 4.16315C15.1916 3.96352 15.0712 3.78221 14.9187 3.62996C14.7661 3.47772 14.5846 3.35763 14.3848 3.27681C14.185 3.19598 13.971 3.15607 13.7555 3.15944L13.7638 3.68568L13.7555 3.15944Z"
                          fill="#91CAF1"
                          stroke="#91CAF1"
                          strokeWidth="1.05261"
                        />
                      </svg>
                    </Button>
                    <div>
                      <img
                        src={playerNotAvailableImg}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </Col> */}
            </Row>
          </div>

          <div className="w-100 mb-5">
            <div className="d-flex justify-content-between align-items-center joy_3">
              <h3 className="mb-0">OFFENSIVE PLAYERS</h3>
              {/* <div>
                <Form.Select aria-label="Default select example">
                  <option>Filter By: All</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div> */}
            </div>
            <hr />
            <Row className="mt-4 listingAreaMobile">
              {offensivePlayers.length === 0 ? (
                <h4 className="text-white">No offensive players available.</h4>
              ) : null}
              {offensivePlayers.map((item, i) => (
                <Col
                  xxl={3}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  className="mb-3 col"
                  key={i}
                >
                  <Card
                    role="button"
                    onClick={() => selectCurrentNft(item)}
                    className={`info-card joyStep${i + 1}_1`}
                  >
                    <div className="info-img">{getImageByTier(item.tier)}</div>
                    <div className="info-Number">
                      {item.playerState ? item.playerState.Level : 0}
                    </div>
                    <div className="info-card-img">
                      <Card.Img className="img-fluid" src={item.imageUrl} />
                    </div>
                    <div className="info-card-body">
                      <Card.Body className="p-2 d-flex justify-content-between">
                        <div>
                          <Card.Title className="mb-0 info-card-title">
                            {item.name}
                          </Card.Title>
                          <div className="m-0 card-textNew">
                            <div className="info-card-body-text align-items-center">
                              <div className="me-1">
                                <img src={icBall} alt="" />
                              </div>
                              <div className="inner-text-info">
                                {getPostionFullname(item.player.Position)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="playerLabel">
                          {item.player.Position}
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col
          xxl={5}
          xl={12}
          className="selectedPlayer selectedPlayerPos order-sm-first order-first order-xxl-last"
          id="selectedPlayer"
        >
          {nft ? (
            <div className="w-100 playerStatsDetails positionSticky">
              <a onClick={() => setNft(null)} className="btnBack768Max mb-3">
                Back to Player Selection
              </a>
              <div className="playerPic">
                <img src={nft.imageUrl} className="img-fluid" alt="" />
              </div>
              <div
                role="button"
                // onClick={() => {
                //   setState({
                //     ...state,
                //     stepIndex: state.stepIndex + 1,
                //     itemSelect: { ...state.itemSelect, joy_1: true },
                //   });
                //   changeActiveTab("LineupSection");
                // }}
                className="playerDetails joyStep_2 mb-3"
              >
                <div className="heading">
                  {nft.player.PositionCategory === "DEF"
                    ? "DEFENSIVE"
                    : "OFFENSIVE"}{" "}
                  PLAYER STATS
                </div>
                <div className="details d-block">
                  <div className="row">
                    <div className="col-auto playerPic">
                      <img className="img-fluid" src={nft.imageUrl} alt="" />
                    </div>
                    <div className="col ms-2">
                      <h2 className="mb-0">{nft.name}</h2>
                      {/* <p className="mb-0">
                        <span>Position:</span> Linebacker
                      </p> */}
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
                <div className="playerItems">
                  {states.map((_state, index) => (
                    <div className="d-flex align-items-center" key={index}>
                      <OverlayTrigger
                        key={"top"}
                        placement={"top"}
                        overlay={
                          <Tooltip
                            id={`tooltip-${"top"}`}
                            className="toolTipCustom"
                          >
                            {_state.fullName}
                          </Tooltip>
                        }
                      >
                        <div className="text-center">
                          {/* <svg
                              width="39"
                              height="34"
                              viewBox="0 0 39 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.2953 0.207225C4.87435 0.213805 4.4732 0.387128 4.17991 0.689154C3.88661 0.991179 3.72512 1.39723 3.73089 1.81819V4.99668C3.73387 4.78608 3.69496 4.577 3.61643 4.38157C3.5379 4.18615 3.42131 4.00828 3.27344 3.8583C3.12557 3.70832 2.94937 3.58923 2.75507 3.50795C2.56078 3.42666 2.35226 3.3848 2.14165 3.3848C1.93103 3.3848 1.72252 3.42666 1.52822 3.50795C1.33393 3.58923 1.15772 3.70832 1.00985 3.8583C0.861982 4.00828 0.745394 4.18615 0.666864 4.38157C0.588333 4.577 0.549427 4.78608 0.552405 4.99668V20.8891C0.549427 21.0997 0.588333 21.3088 0.666864 21.5042C0.745394 21.6996 0.861982 21.8775 1.00985 22.0275C1.15772 22.1774 1.33393 22.2965 1.52822 22.3778C1.72252 22.4591 1.93103 22.501 2.14165 22.501C2.35226 22.501 2.56078 22.4591 2.75507 22.3778C2.94937 22.2965 3.12557 22.1774 3.27344 22.0275C3.42131 21.8775 3.5379 21.6996 3.61643 21.5042C3.69496 21.3088 3.73387 21.0997 3.73089 20.8891V24.0676C3.72791 24.2782 3.76682 24.4873 3.84535 24.6827C3.92388 24.8781 4.04046 25.056 4.18833 25.206C4.33621 25.3559 4.51241 25.475 4.7067 25.5563C4.901 25.6376 5.10951 25.6794 5.32013 25.6794C5.53074 25.6794 5.73926 25.6376 5.93355 25.5563C6.12785 25.475 6.30405 25.3559 6.45192 25.206C6.59979 25.056 6.71638 24.8781 6.79491 24.6827C6.87344 24.4873 6.91235 24.2782 6.90937 24.0676V14.5321H8.49861V14.6594C8.49861 18.971 12.4153 21.1205 14.5576 21.9755L13.2819 31.8089C13.169 32.6798 13.7798 33.4763 14.6507 33.5875C14.7222 33.597 14.7872 33.5751 14.8587 33.5751L14.8556 33.603H25.9741H25.9772C26.0455 33.603 26.1152 33.597 26.1851 33.5875C27.056 33.4763 27.6684 32.6798 27.554 31.8089L26.2876 22.0438C27.5465 21.4181 28.6135 20.1346 28.9973 18.4338C29.1074 18.2088 29.1627 17.961 29.1587 17.7106V17.0774V14.5321H32.3372V24.0676C32.3343 24.2782 32.3732 24.4873 32.4517 24.6827C32.5302 24.8781 32.6468 25.056 32.7947 25.206C32.9426 25.3559 33.1188 25.475 33.313 25.5563C33.5073 25.6376 33.7159 25.6794 33.9265 25.6794C34.1371 25.6794 34.3456 25.6376 34.5399 25.5563C34.7342 25.475 34.9104 25.3559 35.0583 25.206C35.2061 25.056 35.3227 24.8781 35.4013 24.6827C35.4798 24.4873 35.5187 24.2782 35.5157 24.0676V20.8891C35.5127 21.0997 35.5516 21.3088 35.6302 21.5042C35.7087 21.6996 35.8253 21.8775 35.9732 22.0275C36.121 22.1774 36.2972 22.2965 36.4915 22.3778C36.6858 22.4591 36.8943 22.501 37.105 22.501C37.3156 22.501 37.5241 22.4591 37.7184 22.3778C37.9127 22.2965 38.0889 22.1774 38.2368 22.0275C38.3846 21.8775 38.5012 21.6996 38.5797 21.5042C38.6583 21.3088 38.6972 21.0997 38.6942 20.8891V4.99668C38.6972 4.78608 38.6583 4.577 38.5797 4.38157C38.5012 4.18615 38.3846 4.00828 38.2368 3.8583C38.0889 3.70832 37.9127 3.58923 37.7184 3.50795C37.5241 3.42666 37.3156 3.3848 37.105 3.3848C36.8943 3.3848 36.6858 3.42666 36.4915 3.50795C36.2972 3.58923 36.121 3.70832 35.9732 3.8583C35.8253 4.00828 35.7087 4.18615 35.6302 4.38157C35.5516 4.577 35.5127 4.78608 35.5157 4.99668V1.81819C35.5186 1.60557 35.4788 1.39452 35.3987 1.19755C35.3186 1.00058 35.1998 0.821692 35.0493 0.671475C34.8988 0.521258 34.7196 0.402769 34.5225 0.323025C34.3254 0.243281 34.1143 0.203904 33.9016 0.207225C33.4807 0.213805 33.0796 0.387128 32.7863 0.689154C32.493 0.991179 32.3315 1.39723 32.3372 1.81819V11.3536H29.1587V8.17516V4.99668C29.1617 4.78405 29.1219 4.57301 29.0418 4.37604C28.9616 4.17906 28.8428 4.00017 28.6923 3.84996C28.5418 3.69974 28.3627 3.58125 28.1655 3.50151C27.9684 3.42176 27.7573 3.38239 27.5447 3.38571C27.1237 3.39229 26.7226 3.56561 26.4293 3.86764C26.136 4.16966 25.9745 4.57571 25.9803 4.99668V6.58592H24.391V4.99668C24.3939 4.78405 24.3542 4.57301 24.274 4.37604C24.1939 4.17906 24.0751 4.00017 23.9246 3.84996C23.7741 3.69974 23.5949 3.58125 23.3978 3.50151C23.2007 3.42176 22.9896 3.38239 22.777 3.38571C22.356 3.39229 21.9549 3.56561 21.6616 3.86764C21.3683 4.16966 21.2068 4.57571 21.2125 4.99668V6.58592H19.6233V4.99668C19.6262 4.78405 19.5864 4.57301 19.5063 4.37604C19.4262 4.17906 19.3074 4.00017 19.1568 3.84996C19.0063 3.69974 18.8272 3.58125 18.6301 3.50151C18.433 3.42176 18.2218 3.38239 18.0092 3.38571C17.5883 3.39229 17.1871 3.56561 16.8938 3.86764C16.6005 4.16966 16.4391 4.57571 16.4448 4.99668V6.58592H14.8556V4.99668C14.8585 4.78405 14.8187 4.57301 14.7386 4.37604C14.6585 4.17906 14.5396 4.00017 14.3891 3.84996C14.2386 3.69974 14.0595 3.58125 13.8624 3.50151C13.6652 3.42176 13.4541 3.38239 13.2415 3.38571C12.8206 3.39229 12.4194 3.56561 12.1261 3.86764C11.8328 4.16966 11.6713 4.57571 11.6771 4.99668V11.3536H6.90937V1.81819C6.91228 1.60557 6.8725 1.39452 6.79238 1.19755C6.71225 1.00058 6.59342 0.821692 6.44291 0.671475C6.29241 0.521258 6.11329 0.402769 5.91616 0.323025C5.71904 0.243281 5.50792 0.203904 5.2953 0.207225Z"
                                fill="#C7CBCC"
                                fillOpacity="0.61"
                              />
                            </svg> */}
                          <span className="ms-0 font34White">
                            {nft.playerStateBySeason &&
                            nft.playerStateBySeason[_state.key]
                              ? nft.playerStateBySeason[_state.key]
                              : 0}
                          </span>
                          <div className="text-white">{_state.fullName}</div>
                        </div>
                      </OverlayTrigger>
                    </div>
                  ))}

                  {/* <div className="d-flex align-items-center">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          className="toolTipCustom"
                        >
                          Passes Defended
                        </Tooltip>
                      }
                    >
                      <div className="d-flex align-items-center">
                        <svg
                          width="33"
                          height="34"
                          viewBox="0 0 33 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1487 0.230469C9.23523 0.230469 7.17557 2.46812 7.17557 7.38205V10.6971L1.2842 16.5885C0.986161 16.8865 0.818685 17.2907 0.818604 17.7121V22.4798H3.99709V18.3702L7.17557 15.1917V20.8906C7.17557 21.7679 7.88596 22.4798 8.76481 22.4798H13.5325C14.4114 22.4798 15.1218 21.7679 15.1218 20.8906V7.38205C15.1218 2.46812 13.0621 0.230469 11.1487 0.230469ZM22.2734 0.230469C20.3599 0.230469 18.3003 2.46812 18.3003 7.38205V20.8906C18.3003 21.7679 19.0107 22.4798 19.8895 22.4798H24.6572C25.5361 22.4798 26.2465 21.7679 26.2465 20.8906V15.1917L29.4249 18.3702V22.4798H32.6034V17.7121C32.6033 17.2907 32.4359 16.8865 32.1378 16.5885L26.2465 10.6971V7.38205C26.2465 2.46812 24.1868 0.230469 22.2734 0.230469ZM11.1487 25.6583C9.83278 25.6583 8.76481 26.7263 8.76481 28.0422C8.76481 29.6314 11.1487 33.6045 11.1487 33.6045C11.1487 33.6045 13.5325 29.6314 13.5325 28.0422C13.5325 26.7263 12.4646 25.6583 11.1487 25.6583ZM22.2734 25.6583C20.9575 25.6583 19.8895 26.7263 19.8895 28.0422C19.8895 29.6314 22.2734 33.6045 22.2734 33.6045C22.2734 33.6045 24.6572 29.6314 24.6572 28.0422C24.6572 26.7263 23.5893 25.6583 22.2734 25.6583Z"
                            fill="#C7CBCC"
                            fillOpacity="0.61"
                          />
                        </svg>
                        <span className="ms-2 font34White">
                          {nft.playerStateBySeason
                            ? nft.playerStateBySeason.PassesDefended
                            : 0}
                        </span>
                      </div>
                    </OverlayTrigger>
                  </div>
                  <div className="d-flex align-items-center">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          className="toolTipCustom"
                        >
                          Tackles
                        </Tooltip>
                      }
                    >
                      <div className="d-flex align-items-center">
                        <svg
                          width="30"
                          height="36"
                          viewBox="0 0 30 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5093 1.21555L2.3846 6.15968C1.23558 6.66983 0.496582 7.80772 0.496582 9.06481V16.5342C0.496582 28.978 10.7297 34.7883 14.7998 35.6051C18.8698 34.7883 29.1029 28.978 29.1029 16.5342V9.06481C29.1029 7.80931 28.3639 6.66983 27.2149 6.15968L16.0902 1.21555C15.2686 0.850025 14.3309 0.850025 13.5093 1.21555Z"
                            fill="#C7CBCC"
                            fillOpacity="0.61"
                          />
                        </svg>
                        <span className="ms-2 font34White">
                          {nft.playerStateBySeason
                            ? nft.playerStateBySeason.Tackles
                            : 0}
                        </span>
                      </div>
                    </OverlayTrigger>
                  </div>
                  <div className="d-flex align-items-center">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          className="toolTipCustom"
                        >
                          Forced Fumbles
                        </Tooltip>
                      }
                    >
                      <div className="d-flex align-items-center">
                        <svg
                          width="33"
                          height="33"
                          viewBox="0 0 33 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.6507 2.4232L30.6031 2.37552C26.5346 -1.53401 14.949 -0.167261 7.68619 6.95254C2.33045 12.4195 -1.84925 24.8633 3.15686 29.8535C4.5395 31.252 7.09818 32.0149 10.1654 32.0149C15.1238 32.0149 21.3855 29.9965 26.0737 25.3083C33.2412 18.1408 34.5921 6.53934 30.6507 2.4232ZM23.5786 15.7887L21.3219 18.0454L19.2718 15.9794L16.7449 18.5063L18.8109 20.5564L16.5542 22.8132L14.504 20.7472L11.6593 23.6078L9.40258 21.3511L12.2632 18.5063L10.1972 16.4562L12.4539 14.1995L14.504 16.2655L17.0309 13.7386L14.9649 11.6885L17.2216 9.43176L19.2718 11.4978L22.1165 8.63714L24.3732 10.8939L21.5126 13.7386L23.5786 15.7887Z"
                            fill="#C7CBCC"
                            fillOpacity="0.61"
                          />
                        </svg>
                        <span className="ms-2 font34White">
                          {nft.playerStateBySeason
                            ? nft.playerStateBySeason.FumblesForced
                            : 0}
                        </span>
                      </div>
                    </OverlayTrigger>
                  </div>
                  <div className="d-flex align-items-center">
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          className="toolTipCustom"
                        >
                          Touchdowns
                        </Tooltip>
                      }
                    >
                      <div className="d-flex align-items-center">
                        <svg
                          width="24"
                          height="32"
                          viewBox="0 0 24 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.1471 14.5338H15.1544L16.7436 1.18418C16.9026 0.389561 15.949 -0.0872113 15.3133 0.548485L1.01014 16.1231C0.53337 16.7587 0.851219 17.7123 1.64584 17.7123H8.79743V31.0619C8.6385 31.8565 9.59205 32.3333 10.2277 31.6976L22.9417 16.1231C23.4184 15.4874 22.9417 14.5338 22.1471 14.5338Z"
                            fill="#C7CBCC"
                            fillOpacity="0.61"
                          />
                        </svg>
                        <span className="ms-2 font34White">
                          {nft.playerStateBySeason
                            ? nft.playerStateBySeason.Touchdowns
                            : 0}
                        </span>
                      </div>
                    </OverlayTrigger>
                  </div> */}
                </div>

                {!playerSelected ? (
                  <Button
                    className="btn btnYellow w-100 justify-content-center"
                    onClick={() => addPlayerToLineUp(nft)}
                  >
                    ASSIGN PLAYER TO LINE-UP
                  </Button>
                ) : (
                  <Button
                    className="btn btnYellow w-100 justify-content-center"
                    onClick={() => removePlayerToLineUp(nft)}
                  >
                    CHANGE PLAYER
                  </Button>
                )}

                {/* <Button className="btn btnYellow w-100 justify-content-center">
                  ASSIGN PLAYER TO LINE-UP
                </Button> */}
              </div>
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default PlayerSelection;
