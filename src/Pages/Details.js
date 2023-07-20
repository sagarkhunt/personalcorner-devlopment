import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import Header from "../common/Header";
import Footer from "../common/Footer";
// -- images --
import detailsImg from "../assets/images/detailsImg.png";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import nftList1 from "../assets/images/nftList1.png";
import nftList2 from "../assets/images/nftList2.png";
import nftList3 from "../assets/images/nftList3.png";
import nftList4 from "../assets/images/nftList4.png";
import nftList5 from "../assets/images/nftList5.png";

const Details = () => {
  const nftListData = [
    {
      img: nftList1,
      title: "VON MILLER",
    },
    {
      img: nftList2,
      title: "HOLLYWOOD BROWN",
    },
    {
      img: nftList3,
      title: "TREVON DIGGS",
    },
    {
      img: nftList4,
      title: "MAXX CROSBY",
    },
  ];
  return (
    <>
      <Header />
      <main className="pageMainCommon detailsPage">
        {/* ------- */}
        <section className="detailsPageSectionOne">
          <Container>
            <Row>
              <Col lg={6} md={4} sm={12} className="mb-4">
                <img className="img-fluid imgBorder" src={detailsImg} alt="" />
              </Col>
              <Col lg={6} md={8} sm={12} className="mb-4">
                <div className="m-4 detailsRightPart">
                  <h3 className="smallHeading d-flex justify-content-between">
                    <div>Hollywood Brown</div>
                    <div className="d-flex">
                      <div className="d-flex flex-column align-items-center ms-3">
                        <button className="btn socialBtn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                          >
                            <path
                              id="Icon_awesome-heart"
                              data-name="Icon awesome-heart"
                              d="M14.447,1.956a4.273,4.273,0,0,0-5.831.425L8,3.016l-.616-.634a4.273,4.273,0,0,0-5.831-.425,4.487,4.487,0,0,0-.309,6.5L7.291,14.7a.98.98,0,0,0,1.416,0l6.047-6.244a4.484,4.484,0,0,0-.306-6.5Z"
                              transform="translate(0 -0.999)"
                              fill="#fff"
                            />
                          </svg>
                        </button>
                        <span className="font8White mt-1">3</span>
                      </div>
                      <div className="d-flex flex-column align-items-center ms-3">
                        <button className="btn socialBtn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                          >
                            <path
                              id="Icon_awesome-share-alt"
                              data-name="Icon awesome-share-alt"
                              d="M11,10a2.987,2.987,0,0,0-1.868.653l-3.2-2a3.017,3.017,0,0,0,0-1.3l3.2-2a2.995,2.995,0,1,0-1.06-1.7l-3.2,2a3,3,0,1,0,0,4.694l3.2,2A3,3,0,1,0,11,10Z"
                              fill="#fff"
                            />
                          </svg>
                        </button>
                        <span className="font8White mt-1">Share</span>
                      </div>
                      <div className="d-flex flex-column align-items-center ms-3">
                        <button className="btn socialBtn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                          >
                            <path
                              id="Icon_material-report"
                              data-name="Icon material-report"
                              d="M10.487,2H5.513L2,5.513v4.973L5.513,14h4.973L14,10.487V5.513ZM8,11.533a.867.867,0,1,1,.867-.867A.865.865,0,0,1,8,11.533Zm.667-2.867H7.333v-4H8.667v4Z"
                              transform="translate(-2 -2)"
                              fill="#fff"
                            />
                          </svg>
                        </button>
                        <span className="font8White mt-1">Report</span>
                      </div>
                    </div>
                  </h3>
                  <p className="font16White">Series 1 Collection</p>
                  <p className="font16White fontBold mt-4">
                    Owned By Homeless Person
                  </p>
                  <div className="grayPart mt-4">
                    <div className="title">
                      Sale ends August 23, 2022 at 11:38am GMT+5:30{" "}
                    </div>
                    <div className="details">
                      <div className="row">
                        <div className="col-6 col-md-3">
                          <h4>23</h4>
                          <p>Hours</p>
                        </div>
                        <div className="col-6 col-md-3">
                          <h4>10</h4>
                          <p>Munites</p>
                        </div>
                        <div className="col-6 col-md-3">
                          <h4>15</h4>
                          <p>Seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grayPart mt-4">
                    <div className="title">Current Price</div>
                    <div className="details">
                      <div className="w-100 d-flex">
                        <div className="me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.702"
                            height="28.13"
                            viewBox="0 0 16.702 28.13"
                          >
                            <path
                              id="Icon_awesome-ethereum"
                              data-name="Icon awesome-ethereum"
                              d="M16.947,14.329,8.6,19.427.25,14.329,8.6,0ZM8.6,21.065.25,15.966,8.6,28.13l8.351-12.164L8.6,21.065Z"
                              transform="translate(-0.25)"
                              fill="#c4c4c4"
                            />
                          </svg>
                        </div>
                        <h3 className="coinPrice mb-0">
                          0.045 <span>( $72.33 )</span>
                        </h3>
                      </div>
                      <div className="row mt-4">
                        <div className="col-12 col-md-auto mb-2">
                          <button className="btnBlue w-100 rounded-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.5"
                              height="18"
                              viewBox="0 0 19.5 18"
                              className="me-2"
                            >
                              <g
                                id="Icon_ionic-md-wallet"
                                data-name="Icon ionic-md-wallet"
                                transform="translate(-2.25 -3)"
                              >
                                <path
                                  id="Path_51301"
                                  data-name="Path 51301"
                                  d="M9.5,16V8a2,2,0,0,1,2-2h9.234V5a1.994,1.994,0,0,0-1.983-2H4.313A2.026,2.026,0,0,0,2.25,4.969V19.031A2.026,2.026,0,0,0,4.313,21H18.75a1.991,1.991,0,0,0,1.983-2V18H11.5A2,2,0,0,1,9.5,16Z"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_51302"
                                  data-name="Path 51302"
                                  d="M11.484,8.719v6.563a.752.752,0,0,0,.75.75H21a.752.752,0,0,0,.75-.75V8.719a.752.752,0,0,0-.75-.75H12.234A.752.752,0,0,0,11.484,8.719ZM15.1,13.5a1.5,1.5,0,1,1,1.4-1.4A1.5,1.5,0,0,1,15.1,13.5Z"
                                  fill="#fff"
                                />
                              </g>
                            </svg>
                            Buy Now
                          </button>
                        </div>
                        <div className="col-12 col-md-auto">
                          <button className="btnWhite w-100 rounded-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="me-2"
                            >
                              <path
                                id="Icon_awesome-tag"
                                data-name="Icon awesome-tag"
                                d="M0,11.818V2.25A2.25,2.25,0,0,1,2.25,0h9.568a2.25,2.25,0,0,1,1.591.659l9.932,9.932a2.25,2.25,0,0,1,0,3.182l-9.568,9.568a2.25,2.25,0,0,1-3.182,0L.659,13.409A2.25,2.25,0,0,1,0,11.818ZM5.25,3A2.25,2.25,0,1,0,7.5,5.25,2.25,2.25,0,0,0,5.25,3Z"
                                fill="#2b01fe"
                              />
                            </svg>
                            Make Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} className="mb-4">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam a cond imentum eros. Fusce scelerisque, arcu id
                      efficitur faucibus, justo ligula facilisis ex, at lacinia
                      metus erat venenatis odio.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Details</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-2 text-start">
                          Contract Address
                        </div>
                        <div className="col-12 col-md-6 mb-2 text-end">
                          0x495f...7b5e
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-2 text-start">
                          Token ID
                        </div>
                        <div className="col-12 col-md-6 mb-2 text-end">
                          250529933758...
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-2 text-start">
                          Token Standar
                        </div>
                        <div className="col-12 col-md-6 mb-2 text-end">
                          ERC-1155
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-2 text-start">
                          Blockchain
                        </div>
                        <div className="col-12 col-md-6 mb-2 text-end">
                          Ethereum
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-2 text-start">
                          Metadata
                        </div>
                        <div className="col-12 col-md-6 mb-2 text-end">
                          Centralized
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-2 text-start">
                          Creator Earnings
                        </div>
                        <div className="col-12 col-md-6 mb-2 text-end">0%</div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={6} md={6} sm={12} className="mb-4">
                <div className="m-4 mt-0 detailsRightPart">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Stats & Properties</Accordion.Header>
                      <Accordion.Body className="px-0">
                        <div className="row">
                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 col-md-4 mb-4">
                            <div className="propertyBox">
                              <div className="text-center">
                                <h4 className="m-0">Pos</h4>
                                <p className="m-0">wr</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --------- */}
        <section className="detailsPageSectionTwo">
          <Container>
            <div className="heading">More From This Collection</div>
            <div className="listingArea">
              <Row>
                {nftListData.map((item, i) => (
                  <Col xl={3} lg={4} md={6} sm={12} className="py-3">
                    <Card className="nftCard bgNew">
                      <Card.Img className="img-fluid" src={item.img} />
                      <Card.Body>
                        <Card.Title className="mb-2">{item.title}</Card.Title>
                        <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                          <Card.Text className="p-1 m-0 card-textNew">
                            Price: 0.12-.25 Ξ
                          </Card.Text>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <Card.Text className="p-1 m-0 font12White">
                            Ends In 20hrs
                          </Card.Text>
                          <Card.Text className="p-1 m-0 font12White">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="10"
                              viewBox="0 0 12 10"
                              className="me-2"
                            >
                              <path
                                id="Icon_awesome-heart"
                                data-name="Icon awesome-heart"
                                d="M10.835,1.683a3.321,3.321,0,0,0-4.373.3L6,2.439l-.462-.453a3.321,3.321,0,0,0-4.373-.3A3.1,3.1,0,0,0,.933,6.323l4.535,4.46a.76.76,0,0,0,1.062,0l4.535-4.46a3.1,3.1,0,0,0-.23-4.641Z"
                                transform="translate(0 -0.999)"
                                fill="#fff"
                              />
                            </svg>
                            3
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Details;
