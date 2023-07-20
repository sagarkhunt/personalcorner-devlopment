import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import Header from "../common/Header";
import Footer from "../common/Footer";
// -- images --
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import fanCollection from "../assets/images/fanCollection.png";
import eventImg from "../assets/images/eventImg.png"
import { NavLink } from "react-router-dom";

const Events = () => {

  return (
    <>
    <div className="eventPageMain">
      <Header />
      <main className="pageMainCommon ">
        {/* ------- */}
        <section className="bannerSection">
          <h4 className="mainHeading text-center">PERSONAL CORNER<br />SIGNING EXPERIENCE</h4>
          <p className="font32Blue">April 28th, 2022 1pm PST- 4pm PST.</p>
          <div className="mobAlign">
            <Button variant="" className="skyblueButton mb-3 mb-md-0">
              <span className="me-2">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.6667 10.7702C24.6667 11.9435 25.4267 12.9462 26.488 13.3008C27.016 13.4768 27.3333 14.0208 27.3333 14.5768V18.7702C27.3333 20.2368 26.1467 21.4368 24.6667 21.4368H3.33334C1.86667 21.4368 0.666672 20.2368 0.666672 18.7702V14.5702C0.666672 14.0168 0.982672 13.4755 1.50667 13.3008C2.56534 12.9462 3.33334 11.9435 3.33334 10.7702C3.33334 9.59685 2.56534 8.59418 1.50667 8.23952C0.982672 8.06485 0.666672 7.52352 0.666672 6.97018V2.77018C0.666672 1.30352 1.86667 0.103516 3.33334 0.103516H24.6667C26.14 0.103516 27.3333 1.29685 27.3333 2.77018V6.96352C27.3333 7.52085 27.016 8.06352 26.488 8.23952C25.4267 8.59418 24.6667 9.59685 24.6667 10.7702Z" fill="white" />
                </svg>
              </span>
              BUY TICKET
            </Button>
            <Button variant="" className="skyblueButton ms-0 ms-md-5 mb-5 mb-md-0">
              <span className="me-2">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6667 2.77018C25.6667 2.77018 22.61 0.378182 19 0.103516L18.6747 0.754182C21.9387 1.55285 23.436 2.69752 25 4.10352C22.3033 2.72685 19.6407 1.43685 15 1.43685C10.3593 1.43685 7.69667 2.72685 5 4.10352C6.564 2.69752 8.34533 1.42685 11.3253 0.754182L11 0.103516C7.21267 0.461516 4.33333 2.77018 4.33333 2.77018C4.33333 2.77018 0.919332 7.72018 0.333332 17.4368C3.77467 21.4055 9 21.4368 9 21.4368L10.0927 19.9802C8.238 19.3355 6.14333 18.1842 4.33333 16.1035C6.492 17.7368 9.75 19.4368 15 19.4368C20.25 19.4368 23.508 17.7368 25.6667 16.1035C23.8567 18.1842 21.762 19.3355 19.9073 19.9802L21 21.4368C21 21.4368 26.2253 21.4055 29.6667 17.4368C29.0807 7.72018 25.6667 2.77018 25.6667 2.77018ZM10.6667 14.7702C9.378 14.7702 8.33333 13.5762 8.33333 12.1035C8.33333 10.6308 9.378 9.43685 10.6667 9.43685C11.9553 9.43685 13 10.6308 13 12.1035C13 13.5762 11.9553 14.7702 10.6667 14.7702ZM19.3333 14.7702C18.0447 14.7702 17 13.5762 17 12.1035C17 10.6308 18.0447 9.43685 19.3333 9.43685C20.622 9.43685 21.6667 10.6308 21.6667 12.1035C21.6667 13.5762 20.622 14.7702 19.3333 14.7702Z" fill="white" />
                </svg>
              </span>
              BECOME A SPONSOR
            </Button>
          </div>
        </section>
        {/* -------- */}
        <section className="bannerSectionSecondPart">
          <Container>
            <Row>
              <Col lg={8} md={12}>
                <h4 className="font54Blue">ElevatING the athlete-fan connection</h4>
                <p className="font36Blue">
                  We have provided unmatched utility for fans to date and the Personal Corner Signing experience is a continuation of the rewards that members of the Personal Corner community experience.
                </p>
              </Col>
              <Col lg={4} md={12}>
                <img src={fanCollection} className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
        
        {/* -------- */}
        <section className="eventPackage">
          <Container>
                <h4 className="font54Blue text-center">COMMEMORATIVE PACKAGE</h4>
                <p className="font36Blue text-center">
                  Purchase and own the NFT, with all its perks or purchase an one-time ticket
                </p>
                <Row className="mt-4 eventPage">
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButtonSM w-100">BUY TICKET FOR 0.25 eth (~800 usd)</Button>
                            </div>
                        </Col>
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButtonSM w-100">BUY TICKET FOR 0.25 eth (~800 usd)</Button>
                            </div>
                        </Col>
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButtonSM w-100">BUY TICKET FOR 0.25 eth (~800 usd)</Button>
                            </div>
                        </Col>
                    </Row>
          </Container>
        </section>

        <section className="eventPackage">
          <Container>
                <h4 className="font54Blue text-center">VIP PACKAGE</h4>
                <p className="font36Blue text-center">
                  Purchase and own the NFT, with all its perks or purchase an one-time ticket
                </p>
                <Row className="mt-4 eventPage">
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButtonPurpleSM w-100">BUY TICKET FOR 0.25 eth (~800 usd)</Button>
                            </div>
                        </Col>
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButtonPurpleSM w-100">BUY TICKET FOR 0.25 eth (~800 usd)</Button>
                            </div>
                        </Col>
                        <Col xxl={4} md={6} col={12} className="mb-4">
                            <div className="event">
                                <img src={eventImg} className="img-fluid" />
                                <div className="eventDetails">
                                    <div className="date">25th September 2022</div>
                                    <div className="title">Personal Corner Signing Experience with Marquise</div>
                                    <div className="location">LOCATION: <span>BLACK FIRE INNOVATION, LAS VEGAS</span></div>
                                </div>
                                <Button className="buyButtonPurpleSM w-100">BUY TICKET FOR 0.25 eth (~800 usd)</Button>
                            </div>
                        </Col>
                    </Row>
          </Container>
        </section>

        {/* <section className="upcomingEventSection">
          <Container>
            <h3 className="smallHeading">Upcoming Events</h3>
            <h1 className="mainHeading mb-5">Whether it's professional or amateur, <br />we have it all!</h1>
            <div className="eventListPart">
              <Row className="align-items-stretch">
                <Col lg={'auto'} md={6} sm={12} className="my-auto">
                  <img src={event1} alt="" className="img-fluid" />
                </Col>
                <Col xxl={7} xl={5} lg={5} md={6} sm={12} className="d-flex flex-column justify-content-center">
                  <h5 className="date">28th April</h5>
                  <h3 className="eventTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p className="eventDetails">Suspendisse sit amet pretium orci. Aliquam erat volutpat. Quisque tortor ipsum,
                    mattis scelerisque vitae, malesuada nulla.</p>
                </Col>
                <Col lg={'auto'} md={6} sm={12} className="leftLight d-flex flex-column justify-content-center ps-4">
                  <button className="btnBlue btnEarnWith">
                    More Info
                  </button>
                </Col>
              </Row>
            </div>

            <div className="eventListPart">
              <Row className="align-items-stretch">
                <Col lg={'auto'} md={6} sm={12} className="my-auto">
                  <img src={event2} alt="" className="img-fluid" />
                </Col>
                <Col xxl={7} xl={5} lg={5} md={6} sm={12} className="d-flex flex-column justify-content-center">
                  <h5 className="date">13th October</h5>
                  <h3 className="eventTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p className="eventDetails">Suspendisse sit amet pretium orci. Aliquam erat volutpat. Quisque tortor ipsum,
                    mattis scelerisque vitae, malesuada nulla.</p>
                </Col>
                <Col lg={'auto'} md={6} sm={12} className="leftLight d-flex flex-column justify-content-center ps-4">
                  <button className="btnBlue btnEarnWith">
                    More Info
                  </button>
                </Col>
              </Row>
            </div>

            <div className="eventListPart">
              <Row className="align-items-stretch">
                <Col lg={'auto'} md={6} sm={12} className="my-auto">
                  <img src={event1} alt="" className="img-fluid" />
                </Col>
                <Col xxl={7} xl={5} lg={5} md={6} sm={12} className="d-flex flex-column justify-content-center">
                  <h5 className="date">28th April</h5>
                  <h3 className="eventTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p className="eventDetails">Suspendisse sit amet pretium orci. Aliquam erat volutpat. Quisque tortor ipsum,
                    mattis scelerisque vitae, malesuada nulla.</p>
                </Col>
                <Col lg={'auto'} md={6} sm={12} className="leftLight d-flex flex-column justify-content-center ps-4">
                  <button className="btnBlue btnEarnWith">
                    More Info
                  </button>
                </Col>
              </Row>
            </div>

            <div className="eventListPart">
              <Row className="align-items-stretch">
                <Col lg={'auto'} md={6} sm={12} className="my-auto">
                  <img src={event2} alt="" className="img-fluid" />
                </Col>
                <Col xxl={7} xl={5} lg={5} md={6} sm={12} className="d-flex flex-column justify-content-center">
                  <h5 className="date">13th October</h5>
                  <h3 className="eventTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p className="eventDetails">Suspendisse sit amet pretium orci. Aliquam erat volutpat. Quisque tortor ipsum,
                    mattis scelerisque vitae, malesuada nulla.</p>
                </Col>
                <Col lg={'auto'} md={6} sm={12} className="leftLight d-flex flex-column justify-content-center ps-4">
                  <button className="btnBlue btnEarnWith">
                    More Info
                  </button>
                </Col>
              </Row>
            </div>

          </Container>
        </section> */}
        {/* --------- */}

      </main>
      <Footer />
    </div>
    </>
  );
};

export default Events;
