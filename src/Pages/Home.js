/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import {
  // DownIcon,
  ExploreIcon,
  // ExternalLinkIcon,
  // MenuIcon,
} from "../common/Icons";
import user1Img from "../assets/images/user_1.png";
import user2Img from "../assets/images/user_2.png";
import user3Img from "../assets/images/user_3.png";
import user4Img from "../assets/images/user_4.png";
import OverMissionImage from "../assets/images/OverMissionImage.svg";
import Learn from "../assets/images/learn.svg";
// import Hero from "../assets/images/hero.svg";
// import tierImg from "../assets/images/tierImg.png";
import objects from "../assets/images/objects.svg";
import Heros from "../assets/images/Heros.png";
import Helmet from "../assets/images/helmet.svg";
import gearBall from "../assets/images/Ball.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTop4Collections } from "../store/collection/collection.fetch";

const Home = () => {
  const topCollections = useSelector(
    (state) => state.collection.topCollections
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTop4Collections());
  }, [dispatch]);

  // const feturedNFT = [
  //   {
  //     img: nft1Img,
  //     title: "HOLLYWOOD BROWN",
  //   },
  //   {
  //     img: nft2Img,
  //     title: "HOLLYWOOD BROWN",
  //   },
  //   {
  //     img: nft3Img,
  //     title: "HOLLYWOOD BROWN",
  //   },
  //   {
  //     img: nft4Img,
  //     title: "HOLLYWOOD BROWN",
  //   },
  // ];
  // const trendingNFTS = [
  //   {
  //     img: user1Img,
  //     title: "G.O.A.T",
  //     medalImage: military_medal,
  //     price: "($417)",
  //   },
  //   {
  //     img: user2Img,
  //     title: "Hall of Fame",
  //     medalImage: crown,
  //     price: "($201)",
  //   },
  //   {
  //     img: user3Img,
  //     title: "Veteran",
  //     medalImage: army_star,
  //     price: "($201)",
  //   },
  //   {
  //     img: user4Img,
  //     title: "Rookie",
  //     medalImage: sergeant_sgt,
  //     price: "($201)",
  //   },
  //   {
  //     img: user4Img,
  //     title: "Rookie",
  //     medalImage: sergeant_sgt,
  //     price: "($201)",
  //   },
  //   {
  //     img: user1Img,
  //     title: "G.O.A.T",
  //     medalImage: military_medal,
  //     price: "($417)",
  //   },
  //   {
  //     img: user2Img,
  //     title: "Hall of Fame",
  //     medalImage: crown,
  //     price: "($201)",
  //   },
  //   {
  //     img: user3Img,
  //     title: "Veteran",
  //     medalImage: army_star,
  //     price: "($201)",
  //   },
  //   {
  //     img: user4Img,
  //     title: "Rookie",
  //     medalImage: sergeant_sgt,
  //     price: "($201)",
  //   },
  //   {
  //     img: user4Img,
  //     title: "Rookie",
  //     medalImage: sergeant_sgt,
  //     price: "($201)",
  //   },
  // ];

  return (
    <main className="pageMainCommon homePage">
      <section className="bannerSection">
        <div className="text-center bannerSectionArea">
          <div className="headArea">
            <h3 className="mb-3 mainHeading2">NFT Marketplace for Sports</h3>
            <div className="holder">
              <div style={{ display: "inline-block" }}>
                First unified marketplace, created by athletes for their fans.
                We bring you collections curated directly by athletes and
                influencers with the sole intent of building a community with
                you the fans!
              </div>
            </div>
            <div className="holder mt-3">
              <div style={{ display: "inline-block" }}>
                <NavLink className="btnEarnWith" to={"/Marketplace"}>
                  Explore Athlete Collection <ExploreIcon />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="img-responsive center-block">
            <img src={Heros} className="img-fluid hero-image" />
          </div>
          {/* <div className="mt-10 image img-responsive ">
                  <img src={heroLine} className="img-fluid" />
                </div> */}
        </div>
      </section>

      {/* --------- */}
      <section className="marketplaceSection">
        <Container>
          <div id="marketplaceSection">
            <div className="content">
              <h1 className="text-center mb-5 mainHeading">
                <span className="">
                  A Unified & Discoverable Marketplace Authenticated By The
                  Creator
                </span>
              </h1>
            </div>
            <div className="holder">
              <div
                style={{ display: "inline-block", marginTop: "-45px" }}
                className="mb-4"
              >
                Personal Corner aims to position itself as the go to unified
                marketplace for all personally branded items both physical and
                digital of the largest names of influence in sports,
                entertainment, music, artistry and more.
              </div>
            </div>
            <Row className="mt-4">
              {topCollections.loading ? (
                <Col sm={12} className="text-center mb-5">
                  <Spinner animation="border" className="me-2" />
                </Col>
              ) : null}
              {topCollections.records.map((item, i) => {
                return (
                  <Col
                    xxl={3}
                    key={i}
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    className="mb-3"
                  >
                    <NavLink to={`/marketplace/${item.playerId}/info`}>
                      <div className="tierBox" style={{}}>
                        <div className="tierImg position-relative">
                          <img src={item.imageUrl} />
                          <h3>{item.name}</h3>
                        </div>
                        <div className="tierDetails">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.619141"
                                  y="0.75"
                                  width="24"
                                  height="24"
                                  rx="12"
                                  fill="black"
                                />
                                <path
                                  d="M12.6192 6.10385C12.5278 6.10385 12.4511 6.15067 12.4007 6.21851C12.3965 6.22405 12.3894 6.22594 12.3856 6.23204L8.50863 12.3243C8.50393 12.3315 8.50332 12.3407 8.49944 12.3481C8.49058 12.3656 8.48469 12.3829 8.47943 12.4017C8.475 12.418 8.47108 12.434 8.46969 12.4509C8.46831 12.4697 8.4699 12.4878 8.47239 12.5072C8.47378 12.518 8.47071 12.5291 8.47348 12.5396C8.47542 12.5471 8.48072 12.553 8.48321 12.5602C8.4857 12.5674 8.48476 12.5751 8.48808 12.5823C8.49279 12.5931 8.50119 12.6 8.50701 12.6099C8.51615 12.6257 8.52565 12.6407 8.53784 12.6543C8.55113 12.6692 8.56587 12.6816 8.58165 12.6932C8.59023 12.6996 8.59577 12.7085 8.60491 12.7138L12.4818 14.9292C12.4879 14.9328 12.4949 14.9342 12.5013 14.9373C12.5088 14.9409 12.516 14.9434 12.524 14.9465C12.5548 14.9575 12.5868 14.9654 12.6192 14.9654C12.6516 14.9654 12.6837 14.9578 12.7144 14.9465C12.7224 14.9434 12.7294 14.9403 12.7371 14.9367C12.7435 14.9337 12.7505 14.9322 12.7566 14.9286L16.6335 12.7132C16.6352 12.7121 16.6362 12.7103 16.6378 12.7094C16.6661 12.6925 16.6909 12.6708 16.7119 12.6445C16.7169 12.6382 16.7202 12.6309 16.7249 12.624C16.7341 12.6104 16.7442 12.5978 16.7509 12.5823C16.7539 12.5751 16.7527 12.5676 16.7552 12.5602C16.7577 12.553 16.763 12.5471 16.7649 12.5396C16.7674 12.5291 16.7652 12.518 16.7666 12.5072C16.7691 12.4878 16.7704 12.4695 16.7687 12.4504C16.7673 12.4335 16.7634 12.4175 16.759 12.4011C16.7537 12.3823 16.7481 12.365 16.739 12.3476C16.7351 12.3401 16.7342 12.3315 16.7298 12.3243L12.8529 6.23204C12.8493 6.22622 12.8419 6.22378 12.8377 6.21851C12.7873 6.15067 12.7106 6.10385 12.6192 6.10385ZM12.6192 6.81347V11.0885L15.8763 12.5088L12.6192 14.4115V11.0885L9.17498 12.2827L12.6192 6.81347ZM8.69794 13.5846C8.63691 13.5945 8.57929 13.6251 8.53568 13.6738C8.44872 13.7716 8.44191 13.9169 8.51945 14.0221L12.3964 19.2837C12.4 19.2884 12.4058 19.29 12.4094 19.2945C12.4279 19.3169 12.4502 19.3341 12.4748 19.3496C12.4842 19.3557 12.4916 19.3633 12.5018 19.368C12.5378 19.3849 12.5768 19.3962 12.6192 19.3962C12.6616 19.3962 12.7006 19.3849 12.7366 19.368C12.7465 19.3633 12.7542 19.3555 12.7636 19.3496C12.7883 19.3341 12.8105 19.3169 12.8291 19.2945C12.8327 19.29 12.8387 19.2884 12.842 19.2837L16.719 14.0221C16.7965 13.9169 16.79 13.7716 16.7027 13.6738C16.6158 13.5758 16.472 13.5528 16.3588 13.6176L12.6192 15.7545L8.87967 13.6176C8.82317 13.5854 8.75896 13.5747 8.69794 13.5846ZM9.74235 14.7485L12.6192 16.4365V18.6005L9.74235 14.7485Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="btnEth">
                              {Number(item.mintEtherPrice).toFixed(6)}
                              <span className="btnEth ms-2">
                                - ${Number(item.mintUsdPrice).toFixed(6)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
      {/* ----- featuredNftsSection ----- */}
      {/* <section className="featuredNftsSection">
          <Container>
            <div className="d-flex align-items-center justify-content-between flex-wrap mb-3 headArea">
              <h1 className="my-2 mainHeading">FEATURED NFTS</h1>
              <NavLink to={"/nfts"} className="my-2 btnBlue btnViewAll">
                View All Collection
              </NavLink>
            </div>
            <div className="cardArea">
              <Row>
                {feturedNFT.map((nft, i) => (
                  <Col key={i} lg={6} md={12} sm={12} className="py-3">
                    <Card className="flex-row rounded-0 border-0 nftCard">
                      <Card.Img className="rounded-0 img-fluid" src={nft.img} />
                      <Card.Body className="my-auto">
                        <Card.Title className="mb-3">{nft.title}</Card.Title>
                        <Card.Text className="mb-2 cardContent1">
                          Series 1 Collection
                        </Card.Text>
                        <Card.Text className="mb-4 cardContent2">
                          0.12-.25 Ξ
                        </Card.Text>
                        <button className="btnBlue btnExplore">
                          Explore Collection
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section> */}
      {/* ---------- */}
      <section className="ytVideoSection">
        <div className="text-center sectionContent">
          <div className="headArea">
            <h3 className="mb-3 mainHeading2">How it Works</h3>
            <h1 className="mb-5 mainHeading">
              For the Athlete, By the Athlete
            </h1>
          </div>
          {/* <img src={Helmet} className="img-fluid" /> */}
          <div className="embed-responsive embed-responsive-21by9 ytVideoArea">
            <img src={Helmet} className="img-fluid helmet" />
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-100 py-3 px-4 ytTitles">
              <h4 className="mb-1 title1">
                Dez Bryant, Founder Personal Corner
              </h4>
            </div>
            <img src={gearBall} className="img-fluid ball" />
          </div>
        </div>
      </section>

      {/* <section className="trendingNftsSection">
        <Container>
          <div className="main">
            <div className="d-flex align-items-center justify-content-between pt-3 pb-2 top flex-wrap headArea">
              <div className="d-flex align-items-center gap-2 mainHeading">
                <h1>Top Trending NFTs in </h1>{" "}
                <span>
                  Football <DownIcon />
                </span>
              </div>
              <div
                className="d-flex justify-content-end"
                style={{ width: "4vh" }}
              >
                <NavLink className="btnEarnWith" to={"/Marketplace"}>
                  <svg
                    width="67"
                    height="40"
                    viewBox="0 0 67 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="67" height="72" fill="#112E88" />
                    <path
                      d="M46.1855 36C46.1855 36.6446 45.999 37.289 45.6257 37.849L37.6829 49.7663C37.1679 50.5379 36.3017 51 35.375 51C33.16 51 31.8387 48.5302 33.0671 46.6868L40.1927 36L33.0671 25.3132C31.8387 23.4698 33.16 21 35.375 21C36.3033 21 37.1679 21.4637 37.6829 22.2337L45.6257 34.151C45.999 34.711 46.1855 35.3554 46.1855 36ZM35.6322 36C35.6322 36.6446 35.4456 37.289 35.0723 37.849L27.1296 49.7663C26.6146 50.5379 25.7483 51 24.8216 51C22.6066 51 21.2853 48.5302 22.5137 46.6868L29.6393 36L22.5104 25.3132C21.2821 23.4698 22.6066 21 24.8216 21C25.7499 21 26.6146 21.4637 27.1296 22.2337L35.0723 34.151C35.4456 34.711 35.6322 35.3554 35.6322 36Z"
                      fill="white"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="cardArea">
              <div className="row">
                {trendingNFTS.map((nfts, i) => (
                  <div className="col-xs-6 col-sm-5cols" key={i}>
                    <div className="tierBox">
                      <div className="tierImg position-relative">
                        <div className="tierIcon">
                          <img
                            src={nfts && nfts.medalImage}
                            className="img-fluid"
                          />
                        </div>
                        <img src={tierImg} />
                      </div>
                      <div className="tierDetails">
                        <h3>{nfts && nfts.title}</h3>
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.619141"
                                y="0.75"
                                width="24"
                                height="24"
                                rx="12"
                                fill="black"
                              />
                              <path
                                d="M12.6192 6.10385C12.5278 6.10385 12.4511 6.15067 12.4007 6.21851C12.3965 6.22405 12.3894 6.22594 12.3856 6.23204L8.50863 12.3243C8.50393 12.3315 8.50332 12.3407 8.49944 12.3481C8.49058 12.3656 8.48469 12.3829 8.47943 12.4017C8.475 12.418 8.47108 12.434 8.46969 12.4509C8.46831 12.4697 8.4699 12.4878 8.47239 12.5072C8.47378 12.518 8.47071 12.5291 8.47348 12.5396C8.47542 12.5471 8.48072 12.553 8.48321 12.5602C8.4857 12.5674 8.48476 12.5751 8.48808 12.5823C8.49279 12.5931 8.50119 12.6 8.50701 12.6099C8.51615 12.6257 8.52565 12.6407 8.53784 12.6543C8.55113 12.6692 8.56587 12.6816 8.58165 12.6932C8.59023 12.6996 8.59577 12.7085 8.60491 12.7138L12.4818 14.9292C12.4879 14.9328 12.4949 14.9342 12.5013 14.9373C12.5088 14.9409 12.516 14.9434 12.524 14.9465C12.5548 14.9575 12.5868 14.9654 12.6192 14.9654C12.6516 14.9654 12.6837 14.9578 12.7144 14.9465C12.7224 14.9434 12.7294 14.9403 12.7371 14.9367C12.7435 14.9337 12.7505 14.9322 12.7566 14.9286L16.6335 12.7132C16.6352 12.7121 16.6362 12.7103 16.6378 12.7094C16.6661 12.6925 16.6909 12.6708 16.7119 12.6445C16.7169 12.6382 16.7202 12.6309 16.7249 12.624C16.7341 12.6104 16.7442 12.5978 16.7509 12.5823C16.7539 12.5751 16.7527 12.5676 16.7552 12.5602C16.7577 12.553 16.763 12.5471 16.7649 12.5396C16.7674 12.5291 16.7652 12.518 16.7666 12.5072C16.7691 12.4878 16.7704 12.4695 16.7687 12.4504C16.7673 12.4335 16.7634 12.4175 16.759 12.4011C16.7537 12.3823 16.7481 12.365 16.739 12.3476C16.7351 12.3401 16.7342 12.3315 16.7298 12.3243L12.8529 6.23204C12.8493 6.22622 12.8419 6.22378 12.8377 6.21851C12.7873 6.15067 12.7106 6.10385 12.6192 6.10385ZM12.6192 6.81347V11.0885L15.8763 12.5088L12.6192 14.4115V11.0885L9.17498 12.2827L12.6192 6.81347ZM8.69794 13.5846C8.63691 13.5945 8.57929 13.6251 8.53568 13.6738C8.44872 13.7716 8.44191 13.9169 8.51945 14.0221L12.3964 19.2837C12.4 19.2884 12.4058 19.29 12.4094 19.2945C12.4279 19.3169 12.4502 19.3341 12.4748 19.3496C12.4842 19.3557 12.4916 19.3633 12.5018 19.368C12.5378 19.3849 12.5768 19.3962 12.6192 19.3962C12.6616 19.3962 12.7006 19.3849 12.7366 19.368C12.7465 19.3633 12.7542 19.3555 12.7636 19.3496C12.7883 19.3341 12.8105 19.3169 12.8291 19.2945C12.8327 19.29 12.8387 19.2884 12.842 19.2837L16.719 14.0221C16.7965 13.9169 16.79 13.7716 16.7027 13.6738C16.6158 13.5758 16.472 13.5528 16.3588 13.6176L12.6192 15.7545L8.87967 13.6176C8.82317 13.5854 8.75896 13.5747 8.69794 13.5846ZM9.74235 14.7485L12.6192 16.4365V18.6005L9.74235 14.7485Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="font16White">
                            0.25 ETH{" "}
                            <span className="font16Gray">
                              {nfts && nfts.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* <section className="liveFeedSection">
        <Container>
          <div className="d-flex align-items-center justify-content-between pt-3 pb-2 top flex-wrap headArea">
            <div className="d-flex align-items-center gap-2 mainHeading">
              <MenuIcon />
              <h1 className="mb-0">Live Feed</h1>
            </div>
            <div
              className="d-flex justify-content-end"
              style={{ width: "4vh" }}
            >
              <svg
                width="67"
                height="40"
                viewBox="0 0 67 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="67" height="72" fill="#112E88" />
                <path
                  d="M46.1855 36C46.1855 36.6446 45.999 37.289 45.6257 37.849L37.6829 49.7663C37.1679 50.5379 36.3017 51 35.375 51C33.16 51 31.8387 48.5302 33.0671 46.6868L40.1927 36L33.0671 25.3132C31.8387 23.4698 33.16 21 35.375 21C36.3033 21 37.1679 21.4637 37.6829 22.2337L45.6257 34.151C45.999 34.711 46.1855 35.3554 46.1855 36ZM35.6322 36C35.6322 36.6446 35.4456 37.289 35.0723 37.849L27.1296 49.7663C26.6146 50.5379 25.7483 51 24.8216 51C22.6066 51 21.2853 48.5302 22.5137 46.6868L29.6393 36L22.5104 25.3132C21.2821 23.4698 22.6066 21 24.8216 21C25.7499 21 26.6146 21.4637 27.1296 22.2337L35.0723 34.151C35.4456 34.711 35.6322 35.3554 35.6322 36Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="d-flex flex-wrap headAreaContent">
            <p>
              Look for specific Moments from the latest drop and sell your
              exciting new finds on the Marketplace
            </p>
          </div>
          <div className="table-responsive contentArea">
            <Table>
              <thead>
                <tr>
                  <th>Moment</th>
                  <th>Price</th>
                  <th>Serial</th>
                  <th>Set</th>
                  <th>Buyer</th>
                  <th>Seller</th>
                  <th>Time</th>
                  <th>TX</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, i) => (
                  <tr key={i}>
                    <td>
                      <Row>
                        <Col xxl={2}>
                          <img
                            src={Hero}
                            alt="nftImage"
                            className="hero-image"
                          />
                        </Col>
                        <Col xxl={10}>
                          <div>VON MILLER</div>
                          <div
                            style={{ fontStyle: "normal", color: "#C0E3FC" }}
                          >
                            Hall of Fame
                            <span className="mx-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 12 13"
                                fill="none"
                              >
                                <circle cx="6" cy="6.5" r="6" fill="#C0E3FC" />
                              </svg>
                            </span>
                            <span>Series 1</span>
                          </div>
                        </Col>
                      </Row>
                    </td>
                    <td>$0.12 ETH</td>
                    <td>#1920</td>
                    <td>Base Set</td>
                    <td>@Matthew_J</td>
                    <td>@Lavishy</td>
                    <td>Sep 24, 22 12:28 AM</td>
                    <td>
                      <a className="link" href="#">
                        <ExternalLinkIcon />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section> */}

      <section className="ourMissionSection">
        <Container>
          <Row className="gx-0">
            <Col lg={4} md={12}>
              <div className="h-100 rightImg">
                <img className="img-fluid" src={OverMissionImage} alt="" />
              </div>
            </Col>
            <Col lg={8} md={12} className="">
              <div className="h-100 leftContent">
                <div className="heading">
                  <h2 className="title">Our Mission</h2>
                </div>
                <div className="maindiv">
                  <p className="content">
                    Our mission is to help Athletes and influencers control
                    their likeness through blockchain technology while bringing
                    value to their fans.
                  </p>
                  <p className="content">
                    Personal Corner is about community building where Athletes,
                    Investors, Fans, can connect on levels only blockchain
                    technology can provide.
                  </p>
                  <p className="content">
                    While NFTs are centric to our mission they are just a
                    snapshot of what Personal Corner will bring, we hope that
                    this can be an open and inviting place for all those who
                    wish to take that next step into the digital age.
                  </p>
                </div>
                <div className="footer">
                  <a href="#">
                    <strong>
                      {" "}
                      Learn more <img src={Learn} />
                    </strong>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* -------- */}
      <section className="aboutSection">
        <div className="content">
          <h1 className="mb-4 text-center  mainHeading">
            <span className="">Personal Corner Community</span>
          </h1>
        </div>
        <div className="holder">
          <div
            style={{ display: "inline-block", marginTop: "-45px" }}
            className="mb-4"
          >
            Join our growing community of athlete, influencers and fans
          </div>
        </div>
        <div className="holder2">
          <a
            href="https://discord.gg/personalcorner"
            target={"_blank"}
            rel={"noreferrer"}
            className="me-2 text-white"
          >
            <svg
              width="31"
              height="23"
              viewBox="0 0 31 23"
              className="me-2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1666 3.49967C26.1666 3.49967 23.1099 1.10767 19.4999 0.833008L19.1746 1.48367C22.4386 2.28234 23.9359 3.42701 25.4999 4.83301C22.8033 3.45634 20.1406 2.16634 15.4999 2.16634C10.8593 2.16634 8.19659 3.45634 5.49992 4.83301C7.06392 3.42701 8.84525 2.15634 11.8253 1.48367L11.4999 0.833008C7.71259 1.19101 4.83325 3.49967 4.83325 3.49967C4.83325 3.49967 1.41925 8.44967 0.833252 18.1663C4.27459 22.135 9.49992 22.1663 9.49992 22.1663L10.5926 20.7097C8.73792 20.065 6.64325 18.9137 4.83325 16.833C6.99192 18.4663 10.2499 20.1663 15.4999 20.1663C20.7499 20.1663 24.0079 18.4663 26.1666 16.833C24.3566 18.9137 22.2619 20.065 20.4073 20.7097L21.4999 22.1663C21.4999 22.1663 26.7253 22.135 30.1666 18.1663C29.5806 8.44967 26.1666 3.49967 26.1666 3.49967ZM11.1666 15.4997C9.87792 15.4997 8.83325 14.3057 8.83325 12.833C8.83325 11.3603 9.87792 10.1663 11.1666 10.1663C12.4553 10.1663 13.4999 11.3603 13.4999 12.833C13.4999 14.3057 12.4553 15.4997 11.1666 15.4997ZM19.8333 15.4997C18.5446 15.4997 17.4999 14.3057 17.4999 12.833C17.4999 11.3603 18.5446 10.1663 19.8333 10.1663C21.1219 10.1663 22.1666 11.3603 22.1666 12.833C22.1666 14.3057 21.1219 15.4997 19.8333 15.4997Z"
                fill="white"
              />
            </svg>
            Join Personal Corner on Discord
          </a>
        </div>
        <div>
          <img src={objects} className="img-fluid" />
        </div>
      </section>
      {/* --------- */}
    </main>
  );
};

export default Home;
