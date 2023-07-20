import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Col, Container, Row, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SearchIcon, DownIcon } from "../common/Icons";
// ---- images ---
import nftList1 from "../assets/images/nftList1.png";
import nftList2 from "../assets/images/nftList2.png";
import nftList3 from "../assets/images/nftList3.png";
import nftList4 from "../assets/images/nftList4.png";
import nftList5 from "../assets/images/nftList5.png";
import aboutImg from "../assets/images/aboutImg.png";

const NFTListing = () => {
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
    {
      img: nftList5,
      title: "MATTHEW JUDON",
    },
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
    {
      img: nftList5,
      title: "MATTHEW JUDON",
    },
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
    {
      img: nftList5,
      title: "MATTHEW JUDON",
    },
  ];
  return (
    <>
      <Header />
      <main className="pageMainCommon nftListPage">
        {/* -------- */}
        <section className="nftListSection">
          <Container>
            <div className="mb-5 headArea">
              <h1 className="mb-4 mainHeading">
                <span className="fontBlue">NFT</span> ART MARKET
              </h1>
              <p className="mb-4 content">
                Personal corner is the first unified marketplace, created by
                athletes for their fans. We bring you collections curated
                directly by athletes and influencers with the sole intent of
                building a community with you the fans!
              </p>
            </div>
            <div className="mb-4 pb-2 filterArea">
              <div className="position-relative search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search.."
                />
                <span className="part position-absolute">|</span>
                <SearchIcon className="position-absolute" />
              </div>
              <div className="position-relative sortBy">
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
              </div>
            </div>
            <div className="listingArea">
              <Row>
                {nftListData.map((item, i) => (
                  <Col lg={4} md={6} sm={12} className="py-3">
                    <Card className="nftCard">
                      <Card.Img className="img-fluid" src={item.img} />
                      <Card.Body>
                        <Card.Title className="mb-2">{item.title}</Card.Title>
                        <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                          <Card.Text className="p-1 m-0">
                            Series 1 Collection
                          </Card.Text>
                          <Card.Text className="p-1 m-0">0.12-.25 Ξ</Card.Text>
                        </div>
                        <NavLink
                          to={"/nfts/" + item.title}
                          className="w-100 d-block text-center btnBlue btnExplore"
                        >
                          Explore Collection
                        </NavLink>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="text-center mt-4">
              <button className="btnBlue btnLoadMore">Load More..</button>
            </div>
          </Container>
        </section>
        {/* -------- */}
        <section className="aboutSection">
          <Container fluid>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="leftImg">
                  <img className="img-fluid" src={aboutImg} alt="" />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} className="my-auto">
                <div className="m-4 ms-1 rightContent">
                  <h1 className="mb-4 mainHeading">PERSONAL CORNER</h1>
                  <p className="mb-5 content">
                    For the athlete, by the athlete <br />
                    For the influencer, by the influencer For the Fans.
                  </p>
                  <button className="btnBlue btnConnectWallet">
                    Connect Wallet
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NFTListing;
