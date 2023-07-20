import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../Athlete/common/Header";
// -- images --
import cb from "../assets/images/cb.svg";
import bigNFT from "../assets/images/sauceGardnernft.png";
import seasonStat from "../assets/images/seasonStat.svg";
import statsPower from "../assets/images/statsPower.svg";
import statsSpeed from "../assets/images/statsSpeed.svg";
import statsDefense from "../assets/images/statsDefense.svg";
import statsOffense from "../assets/images/statsOffense.svg";
import statsStamina from "../assets/images/statsStamina.svg";
import infoBigImage1 from "../assets/images/infoBigImage1.png";
import ic_sergeant from "../assets/images/ic_sergeant.png";

// -- Season Stats progressbar --
import CProgress from "./common/CProgress";

const Stats = () => {
  return (
    <>
      <div className="LayoutBG athleteSection">
        <Container fluid>
          <Col xxl={7} xl={12}>
            <Header />
          </Col>
          <Row className="mt-4">
            <Col xxl={7} xl={12}>
              <div className="font32white">
                Current Team: <span> New York Jets</span>
              </div>
              <div className="d-flex align-items-center mt-3 mb-2">
                <div>
                  <img src={ic_sergeant} />
                </div>
                <div className="font54White ms-4">SAUCE GARDNER</div>
                <div
                  className="ms-4 "
                  style={{
                    backgroundColor: "#0B95DE",
                    color: "#FFFFFF",
                    fontSize: "24px",
                    padding: "6px 6px 6px 6px",
                    border: "2.44085px solid #9BDAFE",
                  }}
                >
                  CB
                </div>
              </div>
              <div className="font32light" style={{ fontStyle: "normal" }}>
                <div>Height: 6''3</div>
                <div className="seriesDetails">
                  <div className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <circle cx="6" cy="6.5" r="6" fill="#C0E3FC" />
                    </svg>
                  </div>
                  <div className="font32white">Weight: 220 lbs</div>
                </div>
              </div>

              <div className="statMain">
                <div className="heading">
                  <div className="me-3">
                    <img src={seasonStat} alt="seasonStat" />
                  </div>
                  2022 SEASON STATS
                </div>
              </div>

              <Row className="mt-4 mb-4 seasonStateProgress">
                <Col className="col-auto">
                  <div className="icComman icOne">
                    <div className="iconbgPattern"></div>
                    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.47142 0.640849C4.98581 0.648439 4.52306 0.848383 4.18471 1.1968C3.84637 1.54521 3.66008 2.01363 3.66673 2.49925V6.16591C3.67016 5.92298 3.62528 5.68178 3.53469 5.45634C3.4441 5.23089 3.3096 5.0257 3.13902 4.85269C2.96844 4.67968 2.76517 4.5423 2.54104 4.44853C2.3169 4.35476 2.07636 4.30647 1.83339 4.30647C1.59043 4.30647 1.34989 4.35476 1.12575 4.44853C0.901616 4.5423 0.698349 4.67968 0.527768 4.85269C0.357186 5.0257 0.222692 5.23089 0.1321 5.45634C0.0415078 5.68178 -0.00337448 5.92298 6.12771e-05 6.16591V24.4992C-0.00337448 24.7422 0.0415078 24.9834 0.1321 25.2088C0.222692 25.4343 0.357186 25.6395 0.527768 25.8125C0.698349 25.9855 0.901616 26.1229 1.12575 26.2166C1.34989 26.3104 1.59043 26.3587 1.83339 26.3587C2.07636 26.3587 2.3169 26.3104 2.54104 26.2166C2.76517 26.1229 2.96844 25.9855 3.13902 25.8125C3.3096 25.6395 3.4441 25.4343 3.53469 25.2088C3.62528 24.9834 3.67016 24.7422 3.66673 24.4992V28.1659C3.66329 28.4089 3.70817 28.6501 3.79877 28.8755C3.88936 29.1009 4.02385 29.3061 4.19443 29.4791C4.36502 29.6521 4.56828 29.7895 4.79242 29.8833C5.01656 29.9771 5.2571 30.0254 5.50006 30.0254C5.74302 30.0254 5.98356 29.9771 6.2077 29.8833C6.43184 29.7895 6.63511 29.6521 6.80569 29.4791C6.97627 29.3061 7.11076 29.1009 7.20136 28.8755C7.29195 28.6501 7.33683 28.4089 7.3334 28.1659V17.1659H9.16673V17.3127C9.16673 22.2866 13.685 24.7662 16.1563 25.7525L14.6846 37.0963C14.5545 38.1009 15.2591 39.0197 16.2637 39.148C16.3462 39.159 16.4211 39.1337 16.5036 39.1337L16.5001 39.1659H29.3262H29.3298C29.4087 39.1659 29.4891 39.159 29.5697 39.148C30.5744 39.0197 31.2808 38.1009 31.1488 37.0963L29.6879 25.8313C31.1402 25.1095 32.3711 23.6289 32.8139 21.6669C32.9408 21.4073 33.0046 21.1215 33.0001 20.8326V20.1021V17.1659H36.6667V28.1659C36.6633 28.4089 36.7082 28.6501 36.7988 28.8755C36.8894 29.1009 37.0239 29.3061 37.1944 29.4791C37.365 29.6521 37.5683 29.7895 37.7924 29.8833C38.0166 29.9771 38.2571 30.0254 38.5001 30.0254C38.743 30.0254 38.9836 29.9771 39.2077 29.8833C39.4318 29.7895 39.6351 29.6521 39.8057 29.4791C39.9763 29.3061 40.1108 29.1009 40.2014 28.8755C40.292 28.6501 40.3368 28.4089 40.3334 28.1659V24.4992C40.33 24.7422 40.3748 24.9834 40.4654 25.2088C40.556 25.4343 40.6905 25.6395 40.8611 25.8125C41.0317 25.9855 41.2349 26.1229 41.4591 26.2166C41.6832 26.3104 41.9238 26.3587 42.1667 26.3587C42.4097 26.3587 42.6502 26.3104 42.8744 26.2166C43.0985 26.1229 43.3018 25.9855 43.4724 25.8125C43.6429 25.6395 43.7774 25.4343 43.868 25.2088C43.9586 24.9834 44.0035 24.7422 44.0001 24.4992V6.16591C44.0035 5.92298 43.9586 5.68178 43.868 5.45634C43.7774 5.23089 43.6429 5.0257 43.4724 4.85269C43.3018 4.67968 43.0985 4.5423 42.8744 4.44853C42.6502 4.35476 42.4097 4.30647 42.1667 4.30647C41.9238 4.30647 41.6832 4.35476 41.4591 4.44853C41.2349 4.5423 41.0317 4.67968 40.8611 4.85269C40.6905 5.0257 40.556 5.23089 40.4654 5.45634C40.3748 5.68178 40.33 5.92298 40.3334 6.16591V2.49925C40.3368 2.25397 40.2909 2.01051 40.1984 1.78328C40.106 1.55606 39.9689 1.34969 39.7953 1.1764C39.6217 1.00311 39.415 0.866426 39.1876 0.774434C38.9602 0.682443 38.7167 0.637018 38.4714 0.640849C37.9858 0.648439 37.5231 0.848383 37.1847 1.1968C36.8464 1.54521 36.6601 2.01363 36.6667 2.49925V13.4992H33.0001V9.83258V6.16591C33.0034 5.92063 32.9575 5.67717 32.8651 5.44995C32.7727 5.22272 32.6356 5.01636 32.462 4.84307C32.2883 4.66978 32.0817 4.53309 31.8543 4.4411C31.6269 4.34911 31.3834 4.30368 31.1381 4.30752C30.6525 4.31511 30.1897 4.51505 29.8514 4.86346C29.513 5.21188 29.3267 5.6803 29.3334 6.16591V7.99925H27.5001V6.16591C27.5034 5.92063 27.4575 5.67717 27.3651 5.44995C27.2727 5.22272 27.1356 5.01636 26.962 4.84307C26.7883 4.66978 26.5817 4.53309 26.3543 4.4411C26.1269 4.34911 25.8834 4.30368 25.6381 4.30752C25.1525 4.31511 24.6897 4.51505 24.3514 4.86346C24.013 5.21188 23.8267 5.6803 23.8334 6.16591V7.99925H22.0001V6.16591C22.0034 5.92063 21.9575 5.67717 21.8651 5.44995C21.7727 5.22272 21.6356 5.01636 21.462 4.84307C21.2883 4.66978 21.0817 4.53309 20.8543 4.4411C20.6269 4.34911 20.3834 4.30368 20.1381 4.30752C19.6525 4.31511 19.1897 4.51505 18.8514 4.86346C18.513 5.21188 18.3267 5.6803 18.3334 6.16591V7.99925H16.5001V6.16591C16.5034 5.92063 16.4575 5.67717 16.3651 5.44995C16.2727 5.22272 16.1356 5.01636 15.962 4.84307C15.7883 4.66978 15.5817 4.53309 15.3543 4.4411C15.1269 4.34911 14.8834 4.30368 14.6381 4.30752C14.1525 4.31511 13.6897 4.51505 13.3514 4.86346C13.013 5.21188 12.8267 5.6803 12.8334 6.16591V13.4992H7.3334V2.49925C7.33675 2.25397 7.29086 2.01051 7.19843 1.78328C7.106 1.55606 6.96892 1.34969 6.79529 1.1764C6.62167 1.00311 6.41504 0.866426 6.18764 0.774434C5.96024 0.682443 5.71669 0.637018 5.47142 0.640849Z" fill="white" />
                    </svg>
                  </div>
                </Col>
                <Col lg={10} className="seasonName">
                  <div className="seasonStatsName">
                    <div>Interceptions</div>
                    <div className="seasonProgress">90</div>
                  </div>
                  <CProgress progress={40} />
                </Col>
              </Row>
              <Row className="mt-4 mb-4 seasonStateProgress">
                <Col className="col-auto">
                  <div className="icComman icTwo">
                    <div className="iconbgPattern"></div>
                    <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5834 0.666016C10.376 0.666016 8.00002 3.24735 8.00002 8.91602V12.7402L1.2038 19.5365C0.85998 19.8802 0.666781 20.3465 0.666687 20.8327V26.3327H4.33335V21.5918L8.00002 17.9251V24.4993C8.00002 25.5113 8.81952 26.3327 9.83335 26.3327H15.3334C16.3472 26.3327 17.1667 25.5113 17.1667 24.4993V8.91602C17.1667 3.24735 14.7907 0.666016 12.5834 0.666016ZM25.4167 0.666016C23.2094 0.666016 20.8334 3.24735 20.8334 8.91602V24.4993C20.8334 25.5113 21.6529 26.3327 22.6667 26.3327H28.1667C29.1805 26.3327 30 25.5113 30 24.4993V17.9251L33.6667 21.5918V26.3327H37.3334V20.8327C37.3333 20.3465 37.1401 19.8802 36.7962 19.5365L30 12.7402V8.91602C30 3.24735 27.624 0.666016 25.4167 0.666016ZM12.5834 29.9993C11.0654 29.9993 9.83335 31.2313 9.83335 32.7493C9.83335 34.5827 12.5834 39.166 12.5834 39.166C12.5834 39.166 15.3334 34.5827 15.3334 32.7493C15.3334 31.2313 14.1014 29.9993 12.5834 29.9993ZM25.4167 29.9993C23.8987 29.9993 22.6667 31.2313 22.6667 32.7493C22.6667 34.5827 25.4167 39.166 25.4167 39.166C25.4167 39.166 28.1667 34.5827 28.1667 32.7493C28.1667 31.2313 26.9347 29.9993 25.4167 29.9993Z" fill="white" />
                    </svg>
                  </div>
                </Col>
                <Col lg={10} className="seasonName">
                  <div className="seasonStatsName">
                    <div>Passes Defended</div>
                    <div className="seasonProgress">90</div>
                  </div>
                  <CProgress progress={20} />
                </Col>
              </Row>
              <Row className="mt-4 mb-4 seasonStateProgress">
                <Col className="col-auto">
                  <div className="icComman icThree">
                    <div className="iconbgPattern"></div>
                    <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5113 0.495938L2.678 6.19944C1.3525 6.78794 0.5 8.1006 0.5 9.55077V18.1674C0.5 32.5224 12.3048 39.2251 17 40.1674C21.6952 39.2251 33.5 32.5224 33.5 18.1674V9.55077C33.5 8.10244 32.6475 6.78794 31.322 6.19944L18.4887 0.495938C17.5408 0.0742708 16.4592 0.0742708 15.5113 0.495938Z" fill="white" />
                    </svg>
                  </div>
                </Col>
                <Col lg={10} className="seasonName">
                  <div className="seasonStatsName">
                    <div>Tackles</div>
                    <div className="seasonProgress">90</div>
                  </div>
                  <CProgress progress={90} />
                </Col>
              </Row>
              <Row className="mt-4 mb-4 seasonStateProgress">
                <Col className="col-auto">
                  <div className="icComman icFour">
                    <div className="iconbgPattern"></div>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.8767 3.19613L34.8217 3.14113C30.1284 -1.36887 16.7634 0.207798 8.38502 8.42113C2.20669 14.7278 -2.61498 29.0828 3.16002 34.8395C4.75502 36.4528 7.70669 37.3328 11.245 37.3328C16.965 37.3328 24.1884 35.0045 29.5967 29.5961C37.865 21.3278 39.4234 7.94446 34.8767 3.19613ZM26.7184 18.6145L24.115 21.2178L21.75 18.8345L18.835 21.7495L21.2184 24.1145L18.615 26.7178L16.25 24.3345L12.9684 27.6345L10.365 25.0311L13.665 21.7495L11.2817 19.3845L13.885 16.7811L16.25 19.1645L19.165 16.2495L16.7817 13.8845L19.385 11.2811L21.75 13.6645L25.0317 10.3645L27.635 12.9678L24.335 16.2495L26.7184 18.6145Z" fill="white" />
                    </svg>
                  </div>
                </Col>
                <Col lg={10} className="seasonName">
                  <div className="seasonStatsName">
                    <div>Forced Fumbles</div>
                    <div className="seasonProgress">90</div>
                  </div>
                  <CProgress progress={40} />
                </Col>
              </Row>
              <Row className="mt-4 mb-4 seasonStateProgress">
                <Col className="col-auto">
                  <div className="icComman icFive">
                    <div className="iconbgPattern"></div>
                    <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.7334 17.1665H16.6667L18.5 1.76652C18.6834 0.849849 17.5834 0.29985 16.85 1.03318L0.350029 18.9998C-0.199971 19.7332 0.166696 20.8332 1.08336 20.8332H9.33336V36.2332C9.15003 37.1498 10.25 37.6998 10.9834 36.9665L25.65 18.9998C26.2 18.2665 25.65 17.1665 24.7334 17.1665Z" fill="white" />
                    </svg>
                  </div>
                </Col>
                <Col lg={10} className="seasonName">
                  <div className="seasonStatsName">
                    <div>Touchdowns</div>
                    <div className="seasonProgress">90</div>
                  </div>
                  <CProgress progress={70} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="bigNFT">
          <img src={infoBigImage1} className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Stats;
