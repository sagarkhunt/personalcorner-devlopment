import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row, Card, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "../common/Icons";
import faList1 from "../assets/images/faList1.png";
import faList2 from "../assets/images/faList2.png";
import faList3 from "../assets/images/faList3.png";
import faList4 from "../assets/images/faList4.png";
import faList5 from "../assets/images/faList5.png";
import faList6 from "../assets/images/faList6.png";
import pfList1 from "../assets/images/pfList1.png";
import pfList2 from "../assets/images/pfList2.png";
import pfList3 from "../assets/images/pfList3.png";
import tcList1 from "../assets/images/tcList1.png";
import tcList2 from "../assets/images/tcList2.png";
import tcList3 from "../assets/images/tcList3.png";
import tcList4 from "../assets/images/tcList4.png";
import tcList5 from "../assets/images/tcList5.png";
import tcList6 from "../assets/images/tcList6.png";
import marketPlaceImage from "../assets/images/marketplaceBannerNew.png";
import ellipse from "../assets/images/Ellipse.png";
import gameImage from "../assets/images/game.png";
import crownImage1 from "../assets/images/crownImage1.png";
import crownImage2 from "../assets/images/crownImage2.png";
import crownImage3 from "../assets/images/crownImage3.png";
import crownImage4 from "../assets/images/crownImage4.png";
import crownImage5 from "../assets/images/crownImage5.png";
import crownImage7 from "../assets/images/crownImage7.png";
import crownImage8 from "../assets/images/crownImage8.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketplaceCollections } from "../store/collection/collection.fetch";
import AxiosRequest from "../AxiosRequest";

const colors = ["#EEEAC7", "#FFDEB5", "#D6C7EE"];
const tcColors = [
  "#EEEAC7",
  "#C7E7EE",
  "#FFDEB5",
  "#D6C7EE",
  "#EEC7EC",
  "#C7EED0",
];
const nftColors = [
  "#D6C7EE",
  "#EEEAC7",
  "#FFCDC2",
  "#C7EED0",
  "#EEC7EC",
  "#EEEAC7",
  "#FFDEB5",
  "#C7E7EE",
];

const nftListData = [
  { img: tcList4, name: "MATTHEW JUDON", crownImage: crownImage1 },
  { img: tcList1, name: "VON MILLER", crownImage: crownImage2 },
  { img: tcList3, name: "DEANDRE HOPKINS", crownImage: crownImage3 },
  { img: tcList6, name: "SAUCE GARDNER", crownImage: crownImage4 },
  { img: tcList5, name: "MATTHEW JUDON", crownImage: crownImage5 },
  { img: pfList3, name: "MATTHEW JUDON", crownImage: crownImage2 },
  { img: tcList3, name: "HOLLYWOOD BROWN", crownImage: crownImage7 },
  { img: tcList2, name: "MATTHEW JUDON", crownImage: crownImage8 },
];

const featuredArtistsData = [
  { img: faList1 },
  { img: faList2 },
  { img: faList3 },
  { img: faList4 },
  { img: faList5 },
  { img: faList6 },
];

const personalFeedData = [
  { img: pfList1, name: "VON MILLER" },
  { img: pfList2, name: "MATTHEW JUDON" },
  { img: pfList3, name: "TREVON DIGGS" },
];

const topCollectionData = [
  { img: tcList1, name: "VON MILLER" },
  { img: tcList2, name: "MAX CROSBY" },
  { img: tcList3, name: "HOLLYWOOD BROWN" },
  { img: tcList4, name: "TREVON DIGGS" },
  { img: tcList5, name: "MATTHEW JUDON" },
  { img: tcList6, name: "SAUCE GARDNER" },
];

const Marketplace = () => {
  const [interval, setInterval] = useState("24");
  const [categories, setCategories] = useState("All");
  const [game, setGame] = useState("football");
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState([]);

  const { user } = useSelector((_state) => _state.auth);

  const dispatch = useDispatch();
  const newCollections = useSelector((s) => s.collection.newCollections);

  useEffect(() => {
    dispatch(fetchMarketplaceCollections({ limit: limit, page: 1 }));
  }, [dispatch, limit]);

  useEffect(() => {
    (async () => {
      try {
        const data = await AxiosRequest.get("/admin/attribute/all");

        setCategory(
          data.data.data.attributes.find((item) => item._id == "Category")
            .attributes
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // const hideShowSide = () => {
  //   const sideBarId = document.getElementById("sideBarId");
  //   if (sideBarId.style.display === "block") {
  //     sideBarId.style.display = "none";
  //   } else {
  //     sideBarId.style.display = "block";
  //   }
  // };

  return (
    <div className="marketplacePageMain">
      <main className="pageMainCommon marketplacePage">
        {/* -------- */}
        <section className="marketplaceBanner">
          <Container className="h-100">
            <div className="col-12">
              <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <h4 className="mainHeading">Athlete-Centric Marketplace</h4>
                <p className="text">
                  Best place to own, sell and trade official NFT collectibles of
                  Athletes.
                </p>
                <div className="mt-4 pb-2 filterArea w-100">
                  <div className="position-relative searchIcon">
                    <SearchIcon className="position-absolute icon" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by collection, series, NFT or user"
                      disabled
                    />
                  </div>
                  <div className="marketPlaceImage">
                    <img
                      className="marketPlaceImage img"
                      src={marketPlaceImage}
                      alt="marketPlaceImage"
                    />
                  </div>
                  {/* <div className="position-relative sortBy me-3">
                        <select
                          aria-label="Default select example"
                          className="form-select"
                        >
                          <option>Newest Listings</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <span className="part position-absolute">|</span>
                        <DownIcon className="position-absolute" />
                      </div> */}
                  {/* <div>
                        <ButtonGroup aria-label="Basic example">
                          <Button variant="secondary" className="groupBtnBlue">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                              <g id="Group_77177" data-name="Group 77177" transform="translate(-1167 -359)">
                                <rect id="Rectangle_12993" data-name="Rectangle 12993" width="9" height="8" transform="translate(1167 368)" fill="#fff"/>
                                <rect id="Rectangle_12994" data-name="Rectangle 12994" width="9" height="8" transform="translate(1177 368)" fill="#fff"/>
                                <rect id="Rectangle_13001" data-name="Rectangle 13001" width="9" height="8" transform="translate(1167 359)" fill="#fff"/>
                                <rect id="Rectangle_13002" data-name="Rectangle 13002" width="9" height="8" transform="translate(1177 359)" fill="#fff"/>
                              </g>
                            </svg>
                          </Button>
                          <Button variant="secondary" className="groupBtnBlue">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17">
                              <g id="Group_77176" data-name="Group 77176" transform="translate(-1218 -357)">
                                <rect id="Rectangle_12995" data-name="Rectangle 12995" width="6" height="5" transform="translate(1218 357)" fill="#fff"/>
                                <rect id="Rectangle_12996" data-name="Rectangle 12996" width="16" height="5" transform="translate(1225 357)" fill="#fff"/>
                                <rect id="Rectangle_12997" data-name="Rectangle 12997" width="6" height="5" transform="translate(1218 363)" fill="#fff"/>
                                <rect id="Rectangle_12998" data-name="Rectangle 12998" width="16" height="5" transform="translate(1225 363)" fill="#fff"/>
                                <rect id="Rectangle_12999" data-name="Rectangle 12999" width="6" height="5" transform="translate(1218 369)" fill="#fff"/>
                                <rect id="Rectangle_13000" data-name="Rectangle 13000" width="16" height="5" transform="translate(1225 369)" fill="#fff"/>
                              </g>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div> */}
                </div>
                <div
                  className="mt-3 pb-2 w-100 mb-3 position-relative"
                  style={{ zIndex: "1" }}
                >
                  <span className="me-3 types">All</span>
                  <span className="me-3 types">Hall of Fame</span>
                  <span className="me-3 types">GOAT</span>
                  <span className="me-3 types">Veteran</span>
                  <span className="me-3 types">Rookie</span>
                  <span className="me-3 types">Commemorative</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="marketplaceListing">
          <Container>
            <div className="col-12">
              <Row className="position-relative start-game align-items-center justify-content-between m-0">
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="">
                  <Row className="">
                    <div className="col-auto px-0">
                      <div className="gameImage">
                        <img width={90} src={gameImage} alt="" />
                      </div>
                    </div>
                    <div className="col-auto pe-0">
                      <div className="">
                        <div>
                          <p className="mb-0">Personal Corner Game</p>
                        </div>
                        <div>
                          <h3>FANTASY FOOTBALL</h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="px-0">
                  <div className="playnow-btn">
                    {user ? (
                      <NavLink
                        className="buttonBordered text-center text-white"
                        to={"/PlayerLineUp"}
                      >
                        PLAY NOW
                      </NavLink>
                    ) : (
                      <NavLink
                        className="buttonBordered text-center text-white"
                        to="/login?redirect=/PlayerLineUp"
                      >
                        PLAY NOW
                      </NavLink>
                    )}

                    {/* <button
                      className="buttonBordered"
                      onClick={() => playNow()}
                    >
                      PLAY NOW
                    </button> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="marketplaceListing">
          <Container>
            <div className="listingArea">
              <div className="card-header-text">
                <p>Featured Athletes</p>
              </div>
              <hr className="hrline" />
            </div>
            <Row className="position-relative listingArea mt-4">
              {featuredArtistsData.map((item, i) => (
                <Col xl={2} lg={2} md={4} sm={4} xs={6} key={i}>
                  <Card className="nftCard bgnew">
                    <Card.Img src={item.img} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="marketplaceListing">
          <Container>
            <div className="listingArea">
              <div className="card-header-text">
                <p>Your Personal Feed</p>
              </div>
              <hr className="hrline" />
            </div>
            <Row className="position-relative listingArea listingAreaMobile mt-4">
              {personalFeedData.map((item, i) => (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  key={i}
                  className="py-3"
                >
                  <Col xl={12}>
                    <div className="pfcontainer mb-3">
                      <div className="me-2">
                        <img src={ellipse} alt="" />
                      </div>
                      <div>
                        @danielvlosky made an offer of about 0.23 ETH for
                        {<span className="pftext">Sauce Gardner Rookie</span>}
                      </div>
                    </div>
                  </Col>
                  <Card
                    style={{ backgroundColor: colors[i], cursor: "pointer" }}
                  >
                    <Card.Img className="img-fluid" src={item.img} />
                    <Card.Body>
                      <Card.Text>Series 1 Collection</Card.Text>
                      <Card.Title className="mb-2">{item.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="marketplaceListing">
          <Container>
            <div className="listingArea">
              <div className="card-header-text">
                <div>Top Collections in the</div>
                <div>
                  <select
                    className="interval"
                    defaultValue="24"
                    onChange={(e) => setInterval(e.target.value)}
                  >
                    <option value="24">Last 24 Hours</option>
                    <option value="4">Last 4 Hours</option>
                    <option value="1">Last 1 Hours</option>
                  </select>
                </div>
              </div>
              <hr className="hrline" />
            </div>
            <Row className="position-relative listingArea listingAreaMobile mt-4">
              {topCollectionData.map((item, i) => (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  key={i}
                  className="py-3"
                >
                  <NavLink
                    className="cardLinkBlk"
                    // to={"/info"}
                  >
                    <Card
                      style={{
                        backgroundColor: tcColors[i],
                        cursor: "pointer",
                      }}
                    >
                      <Card.Img className="img-fluid" src={item.img} />
                      <Card.Body>
                        <Card.Text>Series 1 Collection</Card.Text>
                        <Card.Title className="mb-2">{item.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </NavLink>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="marketplaceListing">
          <Container>
            <div className="listingArea">
              <div className="card-header-text">
                <div>All Trending NFTs in</div>
                <div>
                  <select
                    className="interval"
                    defaultValue="All"
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <option value="All">All Categories</option>
                    <option value="1">Categories 1</option>
                    <option value="2">Categories 2</option>
                  </select>
                </div>
              </div>
              <hr className="hrline" />
            </div>
            <Row className="position-relative listingArea listingAreaMobile mt-4">
              {nftListData.map((item, i) => (
                <Col
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  key={i}
                  className="py-3"
                >
                  <div className="crown-img">
                    <img src={item.crownImage} alt="" />
                  </div>
                  <NavLink
                    className="cardLinkBlk"
                    // to={"/MarketPlaceMain"}
                  >
                    <Card
                      style={{
                        backgroundColor: nftColors[i],
                        cursor: "pointer",
                      }}
                    >
                      <Card.Img className="img-fluid" src={item.img} />
                      <Card.Body>
                        <Card.Title className="mb-2">{item.name}</Card.Title>
                        <Card.Text className="p-1 m-0 card-textNew">
                          Price: 0.12-.25 Ξ ( $25.00 )
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </NavLink>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="marketplaceListing">
          <Container>
            <div className="listingArea">
              <div className="card-header-text">
                <div>New Collection</div>
                <div>
                  <select
                    className="interval"
                    defaultValue="football"
                    onChange={(e) => setGame(e.target.value)}
                  >
                    {category.map((mitem, index) => {
                      return (
                        <option value={mitem.key} key={index}>
                          {mitem.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <hr className="hrline" />
            </div>
            <Row className="position-relative listingArea listingAreaMobile mt-4">
              {newCollections.loading ? (
                <Col className="text-center">
                  <Spinner animation="border" variant="light" />
                </Col>
              ) : (
                <Fragment>
                  {newCollections.records.map((item, i) => {
                    return (
                      <Col
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        key={i}
                        className="py-3"
                      >
                        <NavLink
                          className="cardLinkBlk"
                          to={`/marketplace/${item._id}/info`}
                        >
                          <Card
                            style={{
                              backgroundColor: tcColors[i],
                              cursor: "pointer",
                            }}
                          >
                            <Card.Img
                              className="img-fluid"
                              src={item.imageUrl}
                            />
                            <Card.Body>
                              <Card.Text className="mb-2">
                                {item.name}
                              </Card.Text>
                              <Card.Title className="text-truncate">
                                {item.description}
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </NavLink>
                      </Col>
                    );
                  })}
                  {limit == newCollections.records.length ? (
                    <button
                      type="button"
                      className="btn btn-link"
                      style={{ fontSize: "20px" }}
                      onClick={() => {
                        setLimit(limit + 10);
                      }}
                    >
                      See more
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-link"
                      style={{ fontSize: "20px" }}
                      onClick={() => {
                        setLimit(limit - 10);
                      }}
                    >
                      less
                    </button>
                  )}
                </Fragment>
              )}
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Marketplace;
