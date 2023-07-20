import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import Header from "../common/Header";
import Footer from "../common/Footer";
// -- images --
import eventDetailsImg from "../assets/images/eventDetailsImg.png";
import { NavLink } from "react-router-dom";

const EventsDetails = () => {
  return (
    <>
      <Header />
      <main className="pageMainCommon eventDetailsPage">
        {/* ------- */}
        <section className="bannerSection">
          <h4 className="mainHeading">Event</h4>
        </section>
        {/* -------- */}
        <section className="upcomingEventSectionOne">
          <Container>
            <Row className="align-items-stretch">
              <Col lg={6} md={4} sm={12} className="text-center">
                <img className="img-fluid" src={eventDetailsImg} alt="" />
              </Col>
              <Col lg={6} md={8} sm={12} className="my-auto">
                <div className="m-4">
                  <h3 className="smallHeading">
                    Personal Corner Singing Experience
                  </h3>
                  <p className="mt-4 content">
                    One of the core missions of Personal Corner is to elevate
                    the athlete-fan connection. We are passionate about
                    connecting athletes and fans in unique and innovative ways
                    and creating more meaningful connections. <br />
                    <br />
                    Additionally, we are pushing the boundaries of technology
                    and utilizing NFTs as exclusive access to our events.
                    <br />
                    <br />
                    We have provided unmatched utility for fans to date and the
                    Personal Corner Signing experience is a continuation of the
                    rewards that members of the Personal Corner community
                    experience.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --------- */}
        <section className="upcomingEventSectionTwo">
          <h3 className="smallHeading text-center">Event Details</h3>
          <Container>
            <Row className="align-items-stretch mt-5">
              <Col lg={4} md={6} sm={12} className="mb-3">
                <div className="eventDetailsBox">
                  <div className="Heading">Event Name</div>
                  <div className="details">
                    <p>
                      Personal Corner Signing experience with Marquise
                      “Hollywood” Brown (Baltimore), Maxx Crosby (Las Vegas) ,
                      Trevon Diggs (Dallas), Matthew Judon (New England).
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} sm={12} className="mb-3">
                <div className="eventDetailsBox">
                  <div className="Heading">Venue</div>
                  <div className="details">
                    <p>
                      Black Fire Innovation, 8400 W Sunset Rd Suite 400, Las
                      Vegas, NV 89113
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} sm={12} className="mb-3">
                <div className="eventDetailsBox">
                  <div className="Heading">Date</div>
                  <div className="details">
                    <p>
                      Thursday, April 28th, 2022 1pmPST-4pmPST.
                      <br />
                      <br />
                      After Party 8:30pm-2:00amPST
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --------- */}
        <section className="upcomingEventSectionThree">
          <Container>
            <h3 className="smallHeading text-center">How To Attend</h3>
            <p className="content mt-4 text-center">
              We offer two options to gain access to the Personal Corner Signing
              Experience. The first option is through purchasing an{" "}
              <span className="fontBlue">Athlete Series 1 NFT</span> and the
              second option is purchasing a{" "}
              <span className="fontBlue">general admission ticket</span>.
              Purchasing an Athlete Series 1 NFT provides you with access to the
              Personal Corner community and more benefits beyond the Personal
              Corner Signing experience in addition to favorable pricing.
            </p>
            <div className="packagePart">
              <h3 className="smallHeading text-center">
                Commemorative Package
              </h3>
              <p className="content text-center">
                Purchase and own the NFT, with all its perks or purchase an
                one-time ticket
              </p>
              <div className="table-responsive packageTable">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Features</th>
                      <th scope="col">
                        0.25 Ξ <span>( ~800 USD)</span>
                        <p className="mb-0">
                          Athlete Series 1 Commemorative NFT
                        </p>
                        <button type="button" className="btn btnBordered">
                          Best Value
                        </button>
                      </th>
                      <th scope="col">
                        $ 1500 <span>USD</span>
                        <p>General Admission Commemorative Package</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Signed Replica Jersey of player of choice (provided)
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Early Admission to the Event</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Access to VIP area (food & Beverages available)</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Admission to the After Party</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Photo Opportunity</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Ownership of Athlete Series 1 NFT</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-times-circle"
                            data-name="Icon awesome-times-circle"
                            d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.55,22.015a.845.845,0,0,1,0,1.2L23.766,26.55a.845.845,0,0,1-1.2,0L18,21.938,13.423,26.55a.845.845,0,0,1-1.2,0L9.45,23.766a.845.845,0,0,1,0-1.2L14.063,18,9.45,13.423a.845.845,0,0,1,0-1.2l2.784-2.784a.845.845,0,0,1,1.2,0L18,14.063,22.577,9.45a.845.845,0,0,1,1.2,0l2.784,2.784a.845.845,0,0,1,0,1.2L21.938,18Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#1f313f"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Access to the Personal Corner Community</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-times-circle"
                            data-name="Icon awesome-times-circle"
                            d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.55,22.015a.845.845,0,0,1,0,1.2L23.766,26.55a.845.845,0,0,1-1.2,0L18,21.938,13.423,26.55a.845.845,0,0,1-1.2,0L9.45,23.766a.845.845,0,0,1,0-1.2L14.063,18,9.45,13.423a.845.845,0,0,1,0-1.2l2.784-2.784a.845.845,0,0,1,1.2,0L18,14.063,22.577,9.45a.845.845,0,0,1,1.2,0l2.784,2.784a.845.845,0,0,1,0,1.2L21.938,18Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#1f313f"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Continuous benefits: i.e.: entry to athlete
                        raffles/giveaways
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-times-circle"
                            data-name="Icon awesome-times-circle"
                            d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.55,22.015a.845.845,0,0,1,0,1.2L23.766,26.55a.845.845,0,0,1-1.2,0L18,21.938,13.423,26.55a.845.845,0,0,1-1.2,0L9.45,23.766a.845.845,0,0,1,0-1.2L14.063,18,9.45,13.423a.845.845,0,0,1,0-1.2l2.784-2.784a.845.845,0,0,1,1.2,0L18,14.063,22.577,9.45a.845.845,0,0,1,1.2,0l2.784,2.784a.845.845,0,0,1,0,1.2L21.938,18Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#1f313f"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ backgroundColor: "transparent" }}></th>
                      <th>
                        <a href="#" className="linkWhite24">
                          Purchase NFT
                        </a>
                      </th>
                      <th>
                        <a href="#" className="linkWhite24">
                          Purchase Ticket
                        </a>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="packagePart">
              <h3 className="smallHeading text-center">VIP Package</h3>
              <p className="content text-center">
                Purchase and own the NFT, with all its perks or purchase an
                one-time ticket
              </p>
              <div className="table-responsive packageTable">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Features</th>
                      <th scope="col">
                        0.12 Ξ <span>( ~400 USD)</span>
                        <p className="mb-0">Athlete Series 1 NFT</p>
                        <p style={{ fontSize: "16px", fontWeight: "300" }}>
                          (GOAT, HOF, Veteran, Rookie)
                        </p>
                      </th>
                      <th scope="col">
                        $ 500 <span>USD</span>
                        <p>General Admission VIP Package</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Signed Replica Jersey of player of choice (provided)
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Early Admission to the Event</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Access to VIP area (food & Beverages available)</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Admission to the After Party</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Photo Opportunity</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Ownership of Athlete Series 1 NFT</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-times-circle"
                            data-name="Icon awesome-times-circle"
                            d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.55,22.015a.845.845,0,0,1,0,1.2L23.766,26.55a.845.845,0,0,1-1.2,0L18,21.938,13.423,26.55a.845.845,0,0,1-1.2,0L9.45,23.766a.845.845,0,0,1,0-1.2L14.063,18,9.45,13.423a.845.845,0,0,1,0-1.2l2.784-2.784a.845.845,0,0,1,1.2,0L18,14.063,22.577,9.45a.845.845,0,0,1,1.2,0l2.784,2.784a.845.845,0,0,1,0,1.2L21.938,18Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#1f313f"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Access to the Personal Corner Community</td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-times-circle"
                            data-name="Icon awesome-times-circle"
                            d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.55,22.015a.845.845,0,0,1,0,1.2L23.766,26.55a.845.845,0,0,1-1.2,0L18,21.938,13.423,26.55a.845.845,0,0,1-1.2,0L9.45,23.766a.845.845,0,0,1,0-1.2L14.063,18,9.45,13.423a.845.845,0,0,1,0-1.2l2.784-2.784a.845.845,0,0,1,1.2,0L18,14.063,22.577,9.45a.845.845,0,0,1,1.2,0l2.784,2.784a.845.845,0,0,1,0,1.2L21.938,18Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#1f313f"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Continuous benefits: i.e.: entry to athlete
                        raffles/giveaways
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-check-circle"
                            data-name="Icon awesome-check-circle"
                            d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#2b01fe"
                          />
                        </svg>
                      </td>
                      <td className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34.875"
                          height="34.875"
                          viewBox="0 0 34.875 34.875"
                        >
                          <path
                            id="Icon_awesome-times-circle"
                            data-name="Icon awesome-times-circle"
                            d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.55,22.015a.845.845,0,0,1,0,1.2L23.766,26.55a.845.845,0,0,1-1.2,0L18,21.938,13.423,26.55a.845.845,0,0,1-1.2,0L9.45,23.766a.845.845,0,0,1,0-1.2L14.063,18,9.45,13.423a.845.845,0,0,1,0-1.2l2.784-2.784a.845.845,0,0,1,1.2,0L18,14.063,22.577,9.45a.845.845,0,0,1,1.2,0l2.784,2.784a.845.845,0,0,1,0,1.2L21.938,18Z"
                            transform="translate(-0.563 -0.563)"
                            fill="#1f313f"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ backgroundColor: "transparent" }}></th>
                      <th>
                        <a href="#" className="linkWhite24">
                          Purchase NFT
                        </a>
                      </th>
                      <th>
                        <a href="#" className="linkWhite24">
                          Purchase Ticket
                        </a>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>
        {/* --------- */}
      </main>
      <Footer />
    </>
  );
};

export default EventsDetails;
