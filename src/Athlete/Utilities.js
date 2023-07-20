import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Header from "../Athlete/common/Header";
// -- images --
import ic_sergeant from "../assets/images/ic_sergeant.png";
import nftUtility1 from "../assets/images/Dynamic NFT.svg";
import nftUtility2 from "../assets/images/Athlete Connect.svg";
import nftUtility3 from "../assets/images/Raffle.svg";
import nftBigUtility3 from "../assets/images/Raffle.png";
import nftBigUtility2 from "../assets/images/helmet.png";
import nftBigUtility1 from "../assets/images/Dynamic NFT.png";
import gearTextIcon from "../assets/images/gearTextIcon.png";

const Utilities = () => {
  const utilitiesItem = [
    {
      id: 1,
      image: nftUtility1,
      name: "DYNAMIC NFT",
      bigImage: nftBigUtility1,
    },
    {
      id: 2,
      image: nftUtility2,
      name: "ATHLETE CONNECT",
      bigImage: nftBigUtility2,
    },
    {
      id: 3,
      image: nftUtility3,
      name: "RAFFLE UNLOCK",
      bigImage: nftBigUtility3,
    },
  ];

  const [index, setIndex] = useState(0);

  const getActiveCard = (i) => {
    var header = document.getElementById("utilities");
    var activeCards = header.getElementsByClassName("active");
    activeCards.length > 0 && activeCards[0].classList.remove("active");
    console.log(document.getElementById(i));
    document.getElementById(i).classList.add("active");
  };

  return (
    <>
      <div className="LayoutBG athleteSection">
        <Container fluid>
          <Col xxl={7} xl={12}>
            <Header />
          </Col>
          <Row className="mt-4">
            <Col xxl={7} xl={12}>
              <div className="gearLeftSideMain">
                <div className="d-flex align-items-center mt-3 mb-2">
                  <div>
                    <img src={ic_sergeant} />
                  </div>
                  <div className="font54White ms-4">NFT UTILITIES</div>
                </div>
                <div className="font32light" style={{ fontStyle: "normal" }}>
                  <div>Series 1 Collection</div>
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
                    <div className="font32white">Athlete items</div>
                  </div>
                </div>
                <hr />
                <Row id="utilities" className="mt-4 listingAreaMobile">
                  {utilitiesItem &&
                    utilitiesItem.map((item, index) => {
                      return (
                        <Col
                          xxl={4}
                          xl={4}
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-3"
                          key={index}
                        >
                          <Card
                            id={index}
                            className="info-card"
                            onClick={() => {
                              setIndex(index);
                              getActiveCard(index);
                            }}
                          >
                            <div className="utilities-card-img">
                              <Card.Img
                                className="img-fluid gearImage"
                                src={item.image}
                              />
                            </div>
                            <div className="info-card-body">
                              <Card.Body>
                                <Card.Title className="mb-2 gear-card-title">
                                  {item.name}
                                </Card.Title>
                                <Card.Text className="p-1 m-0 card-textNew">
                                  <div className="gear-card-body-text">
                                    <div className="me-1">
                                      <img src={gearTextIcon} />
                                    </div>
                                    <div className="inner-text">
                                      2500 PCC Per Ticket
                                    </div>
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </div>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </Col>
            <Col xxl={5} xl={6}>
              <div className="utilitiedRightSide">
                <div className="gearHelmet">
                  <img
                    src={utilitiesItem[index].bigImage}
                    className="img-fluid"
                  />
                </div>
                <div className="utilitiesTextName">
                  {utilitiesItem[index].name}
                </div>
                <div className="utilitiesTextDetails mb-3">
                  Unlock Raffles based on in-game performance providing the
                  chance to win exclusive memorabilia and experiences.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Utilities;
