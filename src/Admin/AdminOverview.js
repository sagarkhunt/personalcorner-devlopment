import React from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import chartGray from "../../src/assets/images/chartGray.png";
import chartPirple from "../../src/assets/images/chartPirple.png";
import chartGreen from "../../src/assets/images/chartGreen.png";
import chartStatistics from "../../src/assets/images/chartStatistics.png";
import detailsImg from "../../src/assets/images/detailsImg.png";
import detailsImg2 from "../../src/assets/images/nft2.png";
import detailsImg3 from "../../src/assets/images/nft3.png";
import detailsImg4 from "../../src/assets/images/nftList3.png";
import detailsImg5 from "../../src/assets/images/user2.png";
import tredingNFT1 from "../../src/assets/images/tre.png";
import tredingNFT2 from "../../src/assets/images/von.png";
import giftImg from "../../src/assets/images/gift.png";

const AdminOverview = () => {
  return (
    <main className="adminPageMainCommon">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mb-0">Overview</h2>
      </div>
      {/* ------- */}
      <section className="dashboardOverviewSection w-100">
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className="threeBox viewBox">
              <p className="font17White">Total Views</p>
              <div className="d-flex justify-content-between mt-5">
                <div>
                  <h3>246K</h3>
                  <p className="font11Blue d-flex align-items-center mb-0">
                    <span className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.335"
                        height="12.918"
                        viewBox="0 0 10.335 12.918"
                      >
                        <path
                          id="DownArrow"
                          d="M10.459,8.167v6.459a1.22,1.22,0,0,1-1.292,1.292h0a1.22,1.22,0,0,1-1.292-1.292V8.167H4L9.167,3l5.167,5.167Z"
                          transform="translate(-4 -3)"
                          fill="#2b01fe"
                        />
                      </svg>
                    </span>
                    13.8%
                  </p>
                </div>
                <div>
                  <img src={chartGray} />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} sm={12}>
            <div className="threeBox soldBox">
              <p className="font17White">Products Sold</p>
              <div className="d-flex justify-content-between mt-5">
                <div>
                  <h3>2453</h3>
                  <p className="font11Green d-flex align-items-center mb-0">
                    <span className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.749"
                        height="14.125"
                        viewBox="0 0 12.749 14.125"
                      >
                        <path
                          id="UpArrow"
                          d="M6.459,7.751V1.292A1.22,1.22,0,0,0,5.167,0h0A1.22,1.22,0,0,0,3.876,1.292V7.751H0l5.167,5.167,5.167-5.167Z"
                          transform="translate(11.542 13.625) rotate(180)"
                          fill="#3cc480"
                          stroke="#4e4e4e"
                          strokeWidth="1"
                        />
                      </svg>
                    </span>
                    13.8%
                  </p>
                </div>
                <div>
                  <img src={chartPirple} />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} sm={12}>
            <div className="threeBox earningBox">
              <p className="font17White">Total Earnings</p>
              <div className="d-flex justify-content-between mt-5">
                <div>
                  <h3>$39K</h3>
                  <p className="font11Red d-flex align-items-center mb-0">
                    <span className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.902"
                        height="12.378"
                        viewBox="0 0 9.902 12.378"
                      >
                        <path
                          id="DownArrow"
                          d="M10.189,7.951V14.14a1.169,1.169,0,0,1-1.238,1.238h0A1.169,1.169,0,0,1,7.713,14.14V7.951H4L8.951,3,13.9,7.951Z"
                          transform="translate(-4 -3)"
                          fill="#ff4141"
                        />
                      </svg>
                    </span>
                    13.8%
                  </p>
                </div>
                <div>
                  <img src={chartGreen} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* -------- */}
      <section className="dashboardChartSection w-100 mt-5">
        <div className="d-flex justify-content-between">
          <h4>Statistics</h4>
          <div>
            <Form.Select aria-label="Default select example">
              <option>Last 6 months</option>
              <option value="1">Last 3 months</option>
              <option value="2">Last 1 months</option>
            </Form.Select>
          </div>
        </div>
        <div>
          <img src={chartStatistics} className="img-fluid" />
        </div>
      </section>
      {/* -------- */}
      <section className="dashboardNFTSection w-100 mt-5">
        <Row className="align-items-stretch">
          <Col lg={4} md={12} sm={12}>
            <div className="leftPart h-100">
              <div className="d-flex justify-content-between align-items-center p-4 borderBottom">
                <h2 className="mb-0">Top Seller NFT</h2>
                <a href="#" className="link14">
                  View All
                </a>
              </div>
              <ul className="topSellerNFTList">
                <li className="p-4">
                  <div className="nftLeft">
                    <div className="nftPic me-3">
                      <img src={detailsImg} />
                    </div>
                    <div className="nftDetails">
                      <h4>Hollwood Brown</h4>
                      <p className="mb-0">0.0000321 BTC</p>
                    </div>
                  </div>
                  <div className="nftRight">
                    <Button className="btn btnUpArrow">
                      <svg
                        id="Component_12_1"
                        data-name="Component 12 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.943"
                        height="17.818"
                        viewBox="0 0 13.943 17.818"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M6.972,0l6.972,10.071H0Z"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_559"
                          data-name="Rectangle 559"
                          width="6.197"
                          height="8.521"
                          transform="translate(3.873 9.297)"
                          fill="#fff"
                        />
                      </svg>
                    </Button>
                  </div>
                </li>

                <li className="p-4">
                  <div className="nftLeft">
                    <div className="nftPic me-3">
                      <img src={detailsImg2} />
                    </div>
                    <div className="nftDetails">
                      <h4>Matthew Judon</h4>
                      <p className="mb-0">0.0000321 BTC</p>
                    </div>
                  </div>
                  <div className="nftRight">
                    <Button className="btn btnUpArrow">
                      <svg
                        id="Component_12_1"
                        data-name="Component 12 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.943"
                        height="17.818"
                        viewBox="0 0 13.943 17.818"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M6.972,0l6.972,10.071H0Z"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_559"
                          data-name="Rectangle 559"
                          width="6.197"
                          height="8.521"
                          transform="translate(3.873 9.297)"
                          fill="#fff"
                        />
                      </svg>
                    </Button>
                  </div>
                </li>

                <li className="p-4">
                  <div className="nftLeft">
                    <div className="nftPic me-3">
                      <img src={detailsImg3} />
                    </div>
                    <div className="nftDetails">
                      <h4>Maxx Crosby</h4>
                      <p className="mb-0">0.0000321 BTC</p>
                    </div>
                  </div>
                  <div className="nftRight">
                    <Button className="btn btnUpArrow">
                      <svg
                        id="Component_12_1"
                        data-name="Component 12 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.943"
                        height="17.818"
                        viewBox="0 0 13.943 17.818"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M6.972,0l6.972,10.071H0Z"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_559"
                          data-name="Rectangle 559"
                          width="6.197"
                          height="8.521"
                          transform="translate(3.873 9.297)"
                          fill="#fff"
                        />
                      </svg>
                    </Button>
                  </div>
                </li>

                <li className="p-4">
                  <div className="nftLeft">
                    <div className="nftPic me-3">
                      <img src={detailsImg4} />
                    </div>
                    <div className="nftDetails">
                      <h4>Trevon Diggs</h4>
                      <p className="mb-0">0.0000321 BTC</p>
                    </div>
                  </div>
                  <div className="nftRight">
                    <Button className="btn btnUpArrow">
                      <svg
                        id="Component_12_1"
                        data-name="Component 12 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.943"
                        height="17.818"
                        viewBox="0 0 13.943 17.818"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M6.972,0l6.972,10.071H0Z"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_559"
                          data-name="Rectangle 559"
                          width="6.197"
                          height="8.521"
                          transform="translate(3.873 9.297)"
                          fill="#fff"
                        />
                      </svg>
                    </Button>
                  </div>
                </li>

                <li className="p-4">
                  <div className="nftLeft">
                    <div className="nftPic me-3">
                      <img src={detailsImg5} />
                    </div>
                    <div className="nftDetails">
                      <h4>Sauce Gardner</h4>
                      <p className="mb-0">0.0000321 BTC</p>
                    </div>
                  </div>
                  <div className="nftRight">
                    <Button className="btn btnUpArrow">
                      <svg
                        id="Component_12_1"
                        data-name="Component 12 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.943"
                        height="17.818"
                        viewBox="0 0 13.943 17.818"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M6.972,0l6.972,10.071H0Z"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_559"
                          data-name="Rectangle 559"
                          width="6.197"
                          height="8.521"
                          transform="translate(3.873 9.297)"
                          fill="#fff"
                        />
                      </svg>
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={8} md={12} sm={12}>
            <div className="rightPart h-100">
              <div className="d-flex justify-content-between align-items-center p-4 borderBottom">
                <h2 className="mb-0">Treding NFT</h2>
                <a href="#" className="link14">
                  View All
                </a>
              </div>
              <div className="w-100 p-4">
                <Row>
                  <Col lg={6} md={12} sm={12} className="tredingNFTPart">
                    <div className="w-100">
                      <img src={tredingNFT1} className="img-fluid w-100" />
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                      <div>
                        <h4 className="mb-0">Justin Jefferson</h4>
                        <p>0.0000321 BTC</p>
                      </div>
                      <div>
                        <Button className="btnLike">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="35.45"
                            viewBox="0 0 39 35.45"
                          >
                            <path
                              id="_211754_heart_icon"
                              data-name="211754_heart_icon"
                              d="M91.392,84.524a9.14,9.14,0,0,1,6.294,15.724L83,115.072,68.057,99.981A9.111,9.111,0,1,1,83.01,90.145a9.071,9.071,0,0,1,8.382-5.621m0-1.524A10.566,10.566,0,0,0,83,87.136a10.628,10.628,0,1,0-16.041,13.9l14.963,15.111L83,117.24l1.079-1.089,14.676-14.824A10.666,10.666,0,0,0,91.392,83Z"
                              transform="translate(-63.5 -82.5)"
                              fill="#fff"
                              stroke="#fff"
                              strokeWidth="1"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={12} sm={12} className="tredingNFTPart">
                    <div className="w-100">
                      <img src={tredingNFT2} className="img-fluid w-100" />
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                      <div>
                        <h4 className="mb-0">Von Miller</h4>
                        <p>0.0000321 BTC</p>
                      </div>
                      <div>
                        <Button className="btnLike">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="35.45"
                            viewBox="0 0 39 35.45"
                          >
                            <path
                              id="_211754_heart_icon"
                              data-name="211754_heart_icon"
                              d="M91.392,84.524a9.14,9.14,0,0,1,6.294,15.724L83,115.072,68.057,99.981A9.111,9.111,0,1,1,83.01,90.145a9.071,9.071,0,0,1,8.382-5.621m0-1.524A10.566,10.566,0,0,0,83,87.136a10.628,10.628,0,1,0-16.041,13.9l14.963,15.111L83,117.24l1.079-1.089,14.676-14.824A10.666,10.666,0,0,0,91.392,83Z"
                              transform="translate(-63.5 -82.5)"
                              fill="#fff"
                              stroke="#fff"
                              strokeWidth="1"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* -------- */}
      <section className="dashboardTicketSection w-100 mt-5">
        <Row>
          <Col lg={8} md={12} sm={12}>
            <div className="leftPart h-100">
              <div className="d-flex justify-content-between align-items-center p-4">
                <h2 className="mb-0">Raffle Ticket List</h2>
                <a href="#" className="link14">
                  View All
                </a>
              </div>
              <div className="ticketListTable">
                <div className="table-responsive">
                  <Table bordered className="mb-0 ">
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Ticket Number</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>Thomas Jackson</td>
                        <td>+10 000 203 4590</td>
                        <td>abctest@gmail.com</td>
                        <td>0293040</td>
                        <td>Pending</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="rightPart d-flex flex-column justify-content-between h-100 pt-5 pt-lg-0">
              <div className="w-100 goftCard bgOne mb-3">
                <Row className="align-items-stretch">
                  <Col lg={9}>
                    <h2 className="title">GIFT CARD</h2>
                    <h1 className="discount mb-0">10% OFF</h1>
                    <p className="font24">Any Purchase</p>
                    <p className="mb-0 font14">End date: 13/9/2022</p>
                  </Col>
                  <Col lg={3} className="text-end">
                    <img src={giftImg} className="img-fluid" />
                  </Col>
                </Row>
              </div>

              <div className="w-100 goftCard bgTwo">
                <Row className="align-items-stretch">
                  <Col lg={9}>
                    <h2 className="title">GIFT CARD</h2>
                    <h1 className="discount mb-0">20% OFF</h1>
                    <p className="font24">ON Jersy with Purchase NFT</p>
                    <p className="mb-0 font14">End date: 13/9/2022</p>
                  </Col>
                  <Col lg={3} className="text-end">
                    <img src={giftImg} className="img-fluid" />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* -------- */}

      <section className="dashboardTicketSection offerPart w-100 mt-5">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="leftPart h-100">
              <div className="p-4">
                <h2 className="mb-0">Offers</h2>
              </div>
              <div className="ticketListTable">
                <div className="table-responsive">
                  <Table bordered className="mb-0 ">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Bidding Price</th>
                        <th>From</th>
                        <th>Start Date</th>
                        <th>Expiry Date</th>
                        <th className="text-start">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <div className="itemAvater"></div>
                            <div className="ms-2 text-start">
                              <div className="title">Matthew Judon #5172</div>
                              <p className="mb-0">Veteran</p>
                            </div>
                          </div>
                        </td>
                        <td>$102</td>
                        <td>7124261</td>
                        <td>Sep 16, 2020</td>
                        <td>Oct 16, 2020</td>
                        <td>
                          <div className="d-flex">
                            <Button type="submit" className="btnGreen-sm">
                              Accept Bid
                            </Button>
                            <Button type="submit" className="btnGray-sm ms-3">
                              Decline Bid
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <div className="itemAvater"></div>
                            <div className="ms-2 text-start">
                              <div className="title">Matthew Judon #5172</div>
                              <p className="mb-0">Veteran</p>
                            </div>
                          </div>
                        </td>
                        <td>$102</td>
                        <td>7124261</td>
                        <td>Sep 16, 2020</td>
                        <td>Oct 16, 2020</td>
                        <td>
                          <div className="d-flex">
                            <Button type="submit" className="btnGreen-sm">
                              Accept Bid
                            </Button>
                            <Button type="submit" className="btnGray-sm ms-3">
                              Decline Bid
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <div className="itemAvater"></div>
                            <div className="ms-2 text-start">
                              <div className="title">Matthew Judon #5172</div>
                              <p className="mb-0">Veteran</p>
                            </div>
                          </div>
                        </td>
                        <td>$102</td>
                        <td>7124261</td>
                        <td>Sep 16, 2020</td>
                        <td>Oct 16, 2020</td>
                        <td>
                          <div className="d-flex">
                            <Button type="submit" className="btnGreen-sm">
                              Accept Bid
                            </Button>
                            <Button type="submit" className="btnGray-sm ms-3">
                              Decline Bid
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <div className="itemAvater"></div>
                            <div className="ms-2 text-start">
                              <div className="title">Matthew Judon #5172</div>
                              <p className="mb-0">Veteran</p>
                            </div>
                          </div>
                        </td>
                        <td>$102</td>
                        <td>7124261</td>
                        <td>Sep 16, 2020</td>
                        <td>Oct 16, 2020</td>
                        <td>
                          <div className="d-flex">
                            <Button type="submit" className="btnGreen-sm">
                              Accept Bid
                            </Button>
                            <Button type="submit" className="btnGray-sm ms-3">
                              Decline Bid
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <div className="itemAvater"></div>
                            <div className="ms-2 text-start">
                              <div className="title">Matthew Judon #5172</div>
                              <p className="mb-0">Veteran</p>
                            </div>
                          </div>
                        </td>
                        <td>$102</td>
                        <td>7124261</td>
                        <td>Sep 16, 2020</td>
                        <td>Oct 16, 2020</td>
                        <td>
                          <div className="d-flex">
                            <Button type="submit" className="btnGreen-sm">
                              Accept Bid
                            </Button>
                            <Button type="submit" className="btnGray-sm ms-3">
                              Decline Bid
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* -------- */}
    </main>
  );
};

export default AdminOverview;
