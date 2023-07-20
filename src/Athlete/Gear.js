import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "./common/Header";
// --images --
import gearBuyIcon from "../assets/images/gearBuyIcon.svg";
import ic_sergeant from "../assets/images/ic_sergeant.png";
import gearTextIcon from "../assets/images/gearTextIcon.png";
import gearIcon from "../assets/images/gearIcon.png";
import gearImage1 from "../assets/images/gearImage1.png";
import gearImage2 from "../assets/images/gearImage2.png";
import gearImage3 from "../assets/images/gearImage3.png";
import gearImage4 from "../assets/images/gearImage4.png";
import gearImage5 from "../assets/images/gearImage5.png";
import gearImage6 from "../assets/images/gearImage6.png";
import { useSelector } from "react-redux";
import { getPlayerGear } from "../store/collection/collection.fetch";

const Gear = ({ playerId }) => {
  const [gearItems, setGearItems] = useState([]);
  const collectionInfo = useSelector(
    (_state) => _state.collection.collectionInfo
  );

  useEffect(() => {
    getPlayerGear(playerId).then((res) => {
      console.log("res", res);
      setGearItems(res.gear);
      console.log("collectionInfo", collectionInfo);
    });
  }, [playerId]);
  // const gearItems = [
  //   {
  //     id: 1,
  //     imgae1: gearIcon,
  //     image2: gearImage1,
  //     name: "SIGNED REPLICA HELMET",
  //     price: "2500 PCC Per Ticket",
  //   },
  //   {
  //     id: 2,
  //     imgae1: gearIcon,
  //     image2: gearImage2,
  //     name: "SIGNED REPLICA HELMET",
  //     price: "2500 PCC Per Ticket",
  //   },
  //   {
  //     id: 3,
  //     imgae1: gearIcon,
  //     image2: gearImage3,
  //     name: "SIGNED GAME BALL",
  //     price: "1000 PCC Per Ticket",
  //   },
  //   {
  //     id: 4,
  //     imgae1: gearIcon,
  //     image2: gearImage4,
  //     name: "SIGNED REPLICA JERSEY",
  //     price: "1500 PCC Per Ticket",
  //   },
  //   {
  //     id: 5,
  //     imgae1: gearIcon,
  //     image2: gearImage5,
  //     name: "OFFICIAL DIGGS MERCH",
  //     price: "1000 PCC Per Ticket",
  //   },
  //   {
  //     id: 6,
  //     imgae1: gearIcon,
  //     image2: gearImage6,
  //     name: "SIGNED MINI HELMET",
  //     price: "750 PCC Per Ticket",
  //   },
  // ];

  const [index, setIndex] = useState(0);

  const getActiveCard = (i) => {
    var header = document.getElementById("gearItems");
    var activeCards = header.getElementsByClassName("active");
    activeCards.length > 0 && activeCards[0].classList.remove("active");
    document.getElementById(i).classList.add("active");
  };

  return (
    <>
      <div className="LayoutBG athleteSection">
        <Container fluid>
          {gearItems.length == 0 ? (
            <span
              className="w-100 d-flex align-item-center justify-content-center"
              style={{
                padding: "25px",
                color: "white",
                fontSize: "35px",
              }}
            >
              No Gear Available
            </span>
          ) : (
            <Row className="mt-4">
              <Col xxl={7} xl={6}>
                <div className="gearLeftSideMain">
                  <div className="d-flex align-items-center mb-2">
                    <div>
                      <img
                        src={
                          collectionInfo.data && collectionInfo.data.imageUrl
                        }
                        alt="nftImage"
                        style={{
                          backgroundColor: "blueviolet",
                          borderRadius: "4rem",
                          width: "3rem",
                        }}
                      />
                    </div>
                    <div
                      className="font54White ms-4"
                      style={{
                        textTransform: "uppercase",
                      }}
                    >
                      {collectionInfo.data.name} GEAR
                    </div>
                  </div>
                  <div className="font32light" style={{ fontStyle: "normal" }}>
                    <div>{collectionInfo.data.category}</div>
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

                  <Row id="gearItems" className="mt-4 listingAreaMobile">
                    {gearItems.length > 0 &&
                      gearItems.map((item, index) => {
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
                              <div className="gear-img">
                                <img src={gearIcon} />
                              </div>
                              <div className="gear-card-img">
                                <Card.Img
                                  className="img-fluid gearImage"
                                  src={item.imageUrl}
                                />
                              </div>
                              <div
                                className="info-card-body"
                                onClick={() => setIndex(index)}
                              >
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
                                        {gearItems[index].price}
                                        {`${gearItems[index].pccCoin} PCC Per Ticket`}
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
              {gearItems.length > 0 && (
                <Col xxl={5} xl={6}>
                  <div className="gearRightSideMain">
                    <div className="gearHelmet">
                      <img
                        src={gearItems[index]?.imageUrl}
                        className="img-fluid utilitiesBigImage"
                      />
                    </div>
                    <div className="geartextName">
                      {gearItems[index]?.category.name}
                    </div>
                    <div className="gearTextDetails mb-3">
                      {gearItems[index]?.name}
                    </div>
                    <div className="gearDetails">
                      <div>
                        <div className="mb-2 textDetails">Price</div>
                        <div className="priceDetails">
                          {`${gearItems[index]?.pccCoin} PCC Per Ticket`}
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 textDetails">TICKETS REMANING</div>
                        <div className="priceDetails">
                          {gearItems[index]?.remainingStockQuantity}/{" "}
                          {gearItems[index]?.stockQuantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default Gear;
