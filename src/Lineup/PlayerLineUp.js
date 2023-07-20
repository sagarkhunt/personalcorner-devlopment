/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab, Spinner } from "react-bootstrap";
import Header from "../Marketplace/common/Header";
import Modal from "react-bootstrap/Modal";

import PlayerSelection from "../Lineup/PlayerSelection";
import LineupSection from "../Lineup/LineupSection";
import GameRulesSelection from "../Lineup/GameRulesSelection";
import WeeklyResult from "./WeeklyResult";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import {
  addRemovePlayerToLineUp,
  getCurrentLineUp,
  getPlayersByPosition,
} from "../store/player/player.fetch";
import { playerSetState } from "../store/player/player.slice";
import { useDispatch, useSelector } from "react-redux";

const PlayerLineUp = () => {
  const [activeTab, setActiveTab] = useState("playerSelection");
  const dispatch = useDispatch();

  const {
    lineUpLoading,
    byPosition,
    defensiveLineUpPlayers,
    offensiveLineUpPlayers,
    addRemoveLoader,
  } = useSelector((state) => state.player);

  const changeActiveTab = (tab) => setActiveTab(tab);
  const [state, setState] = useState({
    run: true,
    stepIndex: 0,
    steps: [],
  });

  useEffect(() => {
    dispatch(getPlayersByPosition());
    dispatch(getCurrentLineUp());

    return () => {
      dispatch(
        playerSetState([
          { key: "byPosition.loading", value: true },
          { key: "byPosition.records", value: [] },
          { key: "lineUpLoading", value: true },
          { key: "defensiveLineUpPlayers", value: [] },
          { key: "offensiveLineUpPlayers", value: [] },
        ])
      );
    };
  }, [dispatch]);

  const onSuccess = (key, value) => {
    dispatch(playerSetState({ key, value }));
  };

  const removePlayerToLineUp = (nft) => {
    if (nft.player.PositionCategory === "DEF") {
      const defensivePlayers = [...defensiveLineUpPlayers];
      const _defensivePlayers = defensivePlayers.filter(
        (d) => d._id !== nft._id
      );
      dispatch(
        addRemovePlayerToLineUp({
          id: nft._id,
          action: "remove",
          onSuccess: () => {
            setActiveTab("playerSelection");
            onSuccess("defensiveLineUpPlayers", _defensivePlayers);
          },
        })
      );
    } else {
      const offensivePlayers = [...offensiveLineUpPlayers];
      const _offensivePlayers = offensivePlayers.filter(
        (d) => d._id !== nft._id
      );
      dispatch(
        addRemovePlayerToLineUp({
          id: nft._id,
          action: "remove",
          onSuccess: () => {
            setActiveTab("playerSelection");
            onSuccess("offensiveLineUpPlayers", _offensivePlayers);
          },
        })
      );
    }
  };

  // useEffect(() => {
  //   setState({
  //     ...state,
  //     run: true,
  //     steps: [
  //       {
  //         content: (
  //           <div className="customTourTooltip">
  //             {/* <h4 className="customTitle">Select Player</h4> */}
  //             <p className="customDetail">
  //               Choose a player from your collection to add them to your line
  //               up.
  //             </p>
  //           </div>
  //         ),
  //         disableBeacon: true, // auto open step 1st tooltip
  //         disableOverlayClose: true,
  //         hideFooter: true,
  //         placement: "bottom",
  //         spotlightClicks: true,
  //         styles: {
  //           options: {
  //             zIndex: 10000,
  //           },
  //         },
  //         target: ".joyStep4_1",
  //         title: "Select Player",
  //       },
  //       {
  //         content: (
  //           <div className="customTourTooltip">
  //             {/* <h4 className="customTitle">Select Player</h4> */}
  //             <p className="customDetail">
  //               Click on the add button to assign selected player to your line
  //               up.
  //             </p>
  //           </div>
  //         ),
  //         disableBeacon: true,
  //         disableOverlayClose: true,
  //         hideFooter: true,
  //         placement: "bottom",
  //         spotlightClicks: true,
  //         styles: {
  //           options: {
  //             zIndex: 10000,
  //           },
  //         },
  //         target: ".joyStep_2",
  //         title: "Assign Player to Lineup",
  //       },
  //       {
  //         content: (
  //           <div className="customTourTooltip">
  //             {/* <h4 className="customTitle">Select Player</h4> */}
  //             <p className="customDetail">
  //               Click on a player card to see player stats and change player.
  //             </p>
  //           </div>
  //         ),
  //         disableBeacon: true,
  //         disableOverlayClose: true,
  //         hideFooter: true,
  //         placement: "bottom",
  //         spotlightClicks: true,
  //         styles: {
  //           options: {
  //             zIndex: 10000,
  //           },
  //         },
  //         target: ".joyStep1_3",
  //         title: "Edit Line-up Player",
  //       },
  //       {
  //         content: (
  //           <div className="customTourTooltip">
  //             {/* <h4 className="customTitle">Select Player</h4> */}
  //             <p className="customDetail">
  //               Click on the yellow button to change player.
  //             </p>
  //           </div>
  //         ),
  //         disableBeacon: true,
  //         disableOverlayClose: true,
  //         hideFooter: true,
  //         placement: "bottom",
  //         spotlightClicks: true,
  //         styles: {
  //           options: {
  //             zIndex: 10000,
  //           },
  //         },
  //         target: ".joyStep_4",
  //         title: "Change Line-up Player",
  //       },
  //     ],
  //   });
  // }, []);

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setState({ ...state, run: false, stepIndex: 0 });
    } else if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      const stepIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      setState({ ...state, stepIndex: stepIndex, run: true });
    }
  };

  return (
    <>
      <Modal
        show={addRemoveLoader}
        centered
        backdrop="static"
        keyboard={false}
        className="loader-model"
      >
        <Modal.Body className="text-center">
          <Spinner animation="border" variant="dark" />
          <p className="mt-2 mb-0">Please wait...</p>
        </Modal.Body>
      </Modal>

      <JoyRide
        steps={state.steps}
        stepIndex={state.stepIndex}
        callback={handleJoyrideCallback}
        continuous={true}
        showProgress={true}
      />
      <div className="LayoutBG athleteSection walletPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <svg
                width="60"
                height="57"
                viewBox="0 0 60 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 0.767578L10.6667 2.18424C8.46883 2.78841 6.698 4.13216 5.50008 5.93425L0.666748 16.7676L6.66675 19.7676L8.66675 15.9342V36.7676C8.66675 38.9655 10.4688 40.7676 12.6667 40.7676H34.0001C34.8438 39.653 35.3334 38.278 35.3334 36.7676V35.4342H32.6667V15.9342L34.6667 19.7676L40.6667 16.7676L35.8334 5.93425C34.6355 4.13216 32.8647 2.78841 30.6667 2.18424L26.6667 0.767578C26.6667 0.767578 25.2709 4.76758 20.6667 4.76758C16.0626 4.76758 14.6667 0.767578 14.6667 0.767578ZM35.3334 35.4342H40.6667V30.1009L48.6667 38.1009L40.6667 46.1009V40.7676H34.0001C32.7813 42.3822 30.8334 43.4342 28.6667 43.4342H27.3334V46.1009H22.0001V40.7676L14.0001 48.7676L22.0001 56.7676V51.4342H27.5834C28.1355 52.9759 29.6042 54.1009 31.3334 54.1009H47.3334C49.5313 54.1009 51.3334 52.2988 51.3334 50.1009V29.2676L53.3334 33.1009L59.3334 30.1009L54.5001 19.2676C53.3022 17.4655 51.5313 16.1217 49.3334 15.5176L45.3334 14.1009C45.3334 14.1009 44.823 15.4655 43.5001 16.6009L44.1667 18.0176L35.3334 22.4342V35.4342Z"
                  fill="#B1E0FE"
                />
              </svg>
              <div className="font54White ms-4">Player Line-up</div>
            </div>
            <p className="titleTextMini">MANAGE YOUR ATHLETE NFT AND LINE-UP</p>
            <Header />
          </div>

          <Row className="mt-4">
            <Col xxl={12} xl={12}>
              {lineUpLoading || byPosition.loading ? (
                <div className="text-center">
                  <Spinner animation="border" variant="light" />
                </div>
              ) : (
                <div className="position-relative tabSideBtnParent">
                  <Tabs
                    className="mb-3 navCustom"
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                  >
                    <Tab eventKey="playerSelection" title="PLAYER SELECTION">
                      <PlayerSelection
                        changeActiveTab={changeActiveTab}
                        state={state}
                        setState={setState}
                        removePlayerToLineUp={removePlayerToLineUp}
                      />
                    </Tab>
                    <Tab eventKey="LineupSection" title="LINE-UP">
                      <LineupSection
                        changeActiveTab={changeActiveTab}
                        state={state}
                        setState={setState}
                        removePlayerToLineUp={removePlayerToLineUp}
                      />
                    </Tab>
                    <Tab eventKey="GameRulesSelection" title="GAME RULES">
                      <GameRulesSelection />
                    </Tab>
                    <Tab eventKey="WeeklyResult" title="WEEKLY RESULT">
                      <WeeklyResult activeTab={activeTab} />
                    </Tab>
                  </Tabs>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PlayerLineUp;
