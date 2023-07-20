/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DiscordIcon, InstagramIcon, TwitterIcon } from "../common/Icons";
import { NavLink } from "react-router-dom";
// ---- images ---
import aboutNFTImg from "../assets/images/aboutNFTImg.png";
import tiersSecImg from "../assets/images/tiersSecImg.png";
import bgImg3 from "../assets/images/bgImg3.png";
import utilityImg1 from "../assets/images/utilityImg1.png";
import utilityImg2 from "../assets/images/utilityImg2.png";
import utilityImg3 from "../assets/images/utilityImg3.png";
import utilityImg4 from "../assets/images/utilityImg4.png";
import playerItmImg1 from "../assets/images/playerItmImg1.png";
import playerItmImg2 from "../assets/images/playerItmImg2.png";
import playerItmImg3 from "../assets/images/playerItmImg3.png";
import playerItmImg4 from "../assets/images/playerItmImg4.png";

const NFTDetail = () => {
  const utilityData = [
    {
      img: utilityImg1,
      title2: "GOAT",
    },
    {
      img: utilityImg2,
      title2: "HOF",
    },
    {
      img: utilityImg3,
      title2: "VETERAN",
    },
    {
      img: utilityImg4,
      title2: "ROOKIE",
    },
  ];
  const playerItemData = [
    playerItmImg1,
    playerItmImg2,
    playerItmImg3,
    playerItmImg4,
  ];
  return (
    <>
      <Header />
      <main className="pageMainCommon nftDetailPage">
        {/* -------- */}
        <section className="aboutNftSection">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="leftImg">
                  <img className="img-fluid" src={aboutNFTImg} alt="" />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="ms-1 rightContent">
                  <h1 className="mb-4 mainHeading">MATTHEW JUDON</h1>
                  <p className="mb-5 content">SERIES 1 COLLECTION</p>
                  <button className="mb-4 btnBlue btnConnectWallet">
                    Connect Wallet
                  </button>
                  <div className="socialIcons">
                    <a href="#" className="m-2">
                      <DiscordIcon />
                    </a>
                    <span className="m-2 line"></span>
                    <a href="#" className="m-2">
                      <InstagramIcon />
                    </a>
                    <span className="m-2 line"></span>
                    <a href="#" className="m-2">
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ----- tiers ---- */}
        <section className="tiersSection">
          <Container>
            <div className="headArea">
              <span className="m-3 line"></span>
              <h1 className="text-center m-3 mainHeading">TIERS</h1>
              <span className="m-3 line"></span>
            </div>
            <Row className="mt-4">
              <Col lg={6} md={6} sm={12} className="my-auto">
                <div className="ms-1 leftContent">
                  <h1 className="mb-4 mainHeading">COMMEMORATIVE</h1>
                  <p className="mb-3 content">
                    Limited Edition Commemorative NFT That Unlocks A Replica
                    Signed Jersey.
                  </p>
                  <p className="mb-3 content2">Series 1 Collection</p>
                  <p className="mb-5 content3">0.25 Ξ</p>
                  <button className="mb-4 btnBlue btnConnectWallet">
                    Connect Wallet
                  </button>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="rightImg">
                  <img className="img-fluid" src={tiersSecImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ---- utility ---- */}
        <section
          style={{ backgroundImage: "URL(" + bgImg3 + ")" }}
          className="utilitySection"
        >
          <Container fluid>
            <div className="container">
              <div className="mb-5 headArea">
                <h1 className="mb-4 text-center mainHeading">UTILITY</h1>
                <p className="pb-3 text-center content">
                  Athlete Series 1 NFTs are dynamic and will be upgraded during
                  future seasons. Various raffles will unlock based on in-game
                  performance providing the chance to win exclusive memorabilia
                  and experiences. While all tokens hold the same utility aside
                  from the commemorative token, the different tiers will allow
                  for adaptable utility in the future such as giveaways and
                  other opportunities to connect the holders and the athlete.
                </p>
              </div>
            </div>
            <div className="contentLisitngArea">
              <div className="listingArea">
                <Row>
                  {utilityData.map((item, i) => (
                    <Col key={i} xl={3} lg={4} md={6} sm={12} className="py-3">
                      <Card className="mx-auto nftCard">
                        <Card.Img className="img-fluid" src={item.img} />
                        <Card.Body>
                          <Card.Title className="mb-2">
                            SERIES 1 COLLECTION
                          </Card.Title>
                          <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                            <Card.Text className="p-1 m-0">
                              {item.title2}
                            </Card.Text>
                            <Card.Text className="p-1 m-0">0.12 Ξ</Card.Text>
                          </div>
                          <NavLink
                            to={"/nfts/" + item.title2}
                            className="w-100 d-block text-center btnBlue btnExplore"
                          >
                            Connect Wallet
                          </NavLink>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Container>
        </section>
        <section className="playerItmSection">
          <Container fluid>
            <div className="mb-5 headArea">
              <h1 className="mb-4 text-center mainHeading">PLAYER ITEMS</h1>
            </div>
            <div className="listingArea">
              <Row>
                {playerItemData.map((item, i) => (
                  <Col key={i} xl={3} lg={4} md={6} sm={12} className="py-3">
                    <Card className="mx-auto nftCard">
                      <div className="d-flex align-items-center justify-content-center imgBody">
                        <Card.Img className="img-fluid" src={item} />
                      </div>
                      <Card.Body>
                        <Card.Title className="mb-2">PRODUCT NAME</Card.Title>
                        <Card.Text className="mb-4">0.12 Ξ</Card.Text>
                        <NavLink
                          to={"/nfts/" + item.title2}
                          className="w-100 d-block text-center btnBlue btnExplore"
                        >
                          Add To Cart
                        </NavLink>
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

export default NFTDetail;
