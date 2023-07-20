import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../common/Header";
import Footer from "../common/Footer";
// -- images --
import aboutBannerImg from "../assets/images/aboutBannerImg.png";
import logoImg from "../assets/images/logoImg.png";
import aboutNFT from "../assets/images/aboutNFT.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="pageMainCommon aboutPage">
        {/* ------- */}
        <section className="bannerSection">
          <Container className="h-100 d-flex align-items-center flex-wrap">
            <div className="bannerImgRight">
              <img src={aboutBannerImg} className="img-fluid" alt="" />
            </div>
            
            <div className="col-12 col-md-12 col-lg-5 col-xl-7">
              <h4 className="mb-4 mainHeading">About Us</h4>
              <p className="mb-4 content">
                For the athlete, by the athlete.
                <br />
                For the influencer, by the influencer.
                <br />
                For the Fans.
              </p>
              <button className="mt-3 btnBlue btnEarnWith">
                Connect Wallet
              </button>
            </div>
              
          </Container>
        </section>
        {/* -------- */}
        <section className="personalCornerSection">
          <Container>
            <Row>
              <Col lg={6} md={9} sm={12} className="my-auto order-2 order-md-1">
                <div className="m-4 ms-1">
                  <h1 className="mb-4 mainHeading">
                    ABOUT
                    <br />
                    <span className="fontBlue">PERSONAL</span> CORNER
                  </h1>
                  <p className="mb-5 content">
                    Personal Corner was{" "}
                    <span className="fontBlue fontBold">
                      established in 2016
                    </span>{" "}
                    to provide solutions for athletes and influencers in
                    building personal brands in both the physical and digital
                    space. <br />
                    <br />
                    Built by athletes for athletes, the team imagined a one stop
                    platform to help those in need of elevating their brand and
                    connecting with their fanbase in a simplified way.
                  </p>
                </div>
              </Col>
              <Col lg={6} md={3} sm={3} className="text-center col-4 order-1 order-md-2">
                <img className="img-fluid" src={logoImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        {/* --------- */}
        <section className="aboutNFTSection">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} className="text-center">
                <img className="img-fluid" src={aboutNFT} alt="" />
              </Col>
              <Col lg={6} md={6} sm={12} className="my-auto">
                <div className="m-4 ms-1">
                  <p className="mb-5 content">
                    With the use of innovative technology and progressive
                    ideation, Personal Corner provides just that. Personal
                    Corner aims to position itself as the go to unified
                    marketplace for all personally branded items both physical
                    and digital to the largest names of influence in sports,
                    entertainment, music, artistry and more. <br />
                    <br />
                    Dez Bryant, Trevon Diggs, Maxx Crosby, Von Miller, Hollywood
                    Brown, amongst others understand the power of unity and
                    coming together under one marketplace to create a
                    discoverable space taking athlete and fan engagement to the
                    next level.
                  </p>
                </div>
                <button className="mt-3 btnBlue btnEarnWith">
                  Connect Wallet
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --------- */}
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
