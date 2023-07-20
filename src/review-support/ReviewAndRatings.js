import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Collapse,
  Nav,
  Tabs,
  Tab,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PlusIcon } from "../common/Icons";
import Header from "../Marketplace/common/Header";
// -- images --
import avatarImg from "../assets/images/wallet/tableItem.png";

const ReviewAndRatings = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className="modalCustom"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div>
              <h1 className="title mb-0">Reviews and Ratings</h1>
              <p className="content mb-0">Select a rating and write a review</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2 p-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Select a rating</Form.Label>
              <div className="d-flex align-items-center justify-content-center p-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={"me-2 StarIcon"} />
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Write a review</Form.Label>
              <Form.Control
                type="text"
                name=""
                as="textarea"
                placeholder="What made this product not satisfactory?"
                style={{ height: "280px" }}
              />
            </Form.Group>

            <Button
              className="skyLightBorderedBtn mt-4 w-100 justify-content-center"
              variant=""
            >
              PUBLISH FEEDBACK
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="LayoutBG athleteSection reviewRatingPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <SupportIcon className={"headerTitleIcon"} />
              <div className="font54White ms-4">Review and Ratings</div>
            </div>
            <p className="titleTextMini">
              MANAGE TICKETS AND CHAT WITH SUPPORT
            </p>
            <Header />
          </div>

          <Row className="mt-4">
            <Col xxl={12} xl={12}>
              <div className="d-flex align-items-center justify-content-between flex-wrap pageContentTitleArea">
                <div className="d-flex align-items-center">
                  <div className="mb-2 me-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={"me-2 StarIcon"} />
                    ))}
                  </div>
                  <div className="font54White me-1">4.89</div>
                  <div className="font32light fst-normal">(220)</div>
                </div>
                <Button
                  className="lightSkyBorderBtn"
                  onClick={() => setModalShow(true)}
                >
                  <div className="d-flex align-items-center">
                    <PlusIcon className={"me-2"} />
                    <span>Write a Review</span>
                  </div>
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              <hr className="my-2" />
              <div className="table-responsive reviewRatingTable">
                <Table hover>
                  <thead>
                    <tr>
                      <th className="minWidth">REVIEWER</th>
                      <th style={{ minWidth: "300px" }}>REVIEW</th>
                      <th className="minWidth">RATING</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(7)].map((_, i) => (
                      <tr key={i}>
                        <td>
                          <div className="detailColumn">
                            <div className="me-2 img">
                              <img src={avatarImg} alt="" />
                            </div>
                            <div className="content">
                              <h4 className="title">Dez Bryant</h4>
                              <p className="mb-0">Hello@personalcorner.io</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-1 review">
                            Thank you for the response, I'm attaching a ledger
                            pdf file to this message so feel free to review
                            that..
                          </p>
                        </td>
                        <td>
                          <div>
                            {[...Array(5)].map((_, i) =>
                              i <= 3 ? (
                                <StarIcon key={i} className={"me-2 StarIcon"} />
                              ) : (
                                <StartEmptyIcon
                                  key={i}
                                  className={"me-2 StartEmptyIcon"}
                                />
                              )
                            )}
                          </div>
                        </td>
                        <td>
                          <span className="title">25 Aug 2022</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const SupportIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 52 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.9766 0.457031C13.1952 0.457031 3.64323 10.009 3.64323 21.7904V24.457V26.8633C2.11334 28.3221 0.976562 30.1988 0.976562 32.457C0.976562 35.7689 3.26336 38.2248 6.15885 39.4258C9.62828 47.7186 16.5772 53.7904 24.9766 53.7904H32.9766V48.457H24.9766C18.954 48.457 13.4858 43.9224 10.737 36.7591L10.1693 35.2904L8.60677 35.0716C7.29345 34.8909 6.3099 33.8307 6.3099 32.457C6.3099 31.4304 6.82832 30.625 7.63802 30.1602L8.97656 29.3945V27.1237V24.457C8.97656 22.985 10.1712 21.7904 11.6432 21.7904H38.3099C39.7819 21.7904 40.9766 22.985 40.9766 24.457V27.1237V37.7904H30.0755C29.8001 37.0114 29.2902 36.3368 28.616 35.8593C27.9417 35.3818 27.1361 35.1249 26.3099 35.1237C25.249 35.1237 24.2316 35.5451 23.4815 36.2953C22.7313 37.0454 22.3099 38.0628 22.3099 39.1237C22.3112 40.134 22.6949 41.1065 23.3838 41.8456C24.0726 42.5847 25.0157 43.0357 26.0234 43.1081C26.1186 43.1184 26.2142 43.1236 26.3099 43.1237H43.6432H46.3099C49.2432 43.1237 51.6432 40.7237 51.6432 37.7904V32.457C51.6432 29.5237 49.2432 27.1237 46.3099 27.1237V21.7904C46.3099 10.009 36.7579 0.457031 24.9766 0.457031Z"
      fill="#B1E0FE"
    />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 42 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.766 1.85469L28.9867 9.30981C29.3816 9.87366 29.9536 10.2893 30.6119 10.4906L39.3154 13.1521C41.3634 13.7783 42.1662 16.2492 40.8775 17.9596L35.4006 25.2286C34.9863 25.7783 34.7678 26.4508 34.7798 27.1391L34.9381 36.2391C34.9754 38.3803 32.8735 39.9074 30.8486 39.2103L22.2429 36.2477C21.592 36.0236 20.8849 36.0236 20.2341 36.2477L11.6284 39.2103C9.6035 39.9074 7.50161 38.3803 7.53887 36.2391L7.6972 27.1391C7.70919 26.4508 7.49068 25.7783 7.07645 25.2286L1.5995 17.9596C0.310786 16.2492 1.11363 13.7783 3.16154 13.1521L11.8651 10.4906C12.5234 10.2893 13.0954 9.87366 13.4903 9.30981L18.711 1.85469C19.9395 0.100519 22.5375 0.100519 23.766 1.85469Z"
      fill="#FDCA23"
    />
    <path
      d="M39.3156 13.1504L33.9186 11.5C32.4075 22.3623 23.0839 30.7247 11.8056 30.7247C10.3824 30.7247 8.99092 30.5899 7.64175 30.3354L7.53906 36.2374C7.5018 38.3786 9.60369 39.9057 11.6286 39.2086L20.2343 36.246C20.8851 36.0219 21.5922 36.0219 22.2431 36.246L30.8488 39.2086C32.8737 39.9057 34.9756 38.3786 34.9383 36.2374L34.78 27.1374C34.768 26.4491 34.9865 25.7766 35.4007 25.2269L40.8777 17.9579C42.1664 16.2475 41.3636 13.7766 39.3156 13.1504Z"
      fill="#FFA902"
    />
  </svg>
);
const StartEmptyIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2678 1.18233L19.952 6.44335C20.2307 6.84125 20.6344 7.13454 21.0989 7.27659L27.2409 9.15476C28.6861 9.59669 29.2527 11.3404 28.3432 12.5474L24.4782 17.677C24.1859 18.065 24.0317 18.5396 24.0401 19.0253L24.1519 25.447C24.1782 26.9581 22.6949 28.0357 21.2659 27.5438L15.193 25.4531C14.7337 25.295 14.2347 25.295 13.7754 25.4531L7.70244 27.5438C6.2735 28.0357 4.79021 26.9581 4.81651 25.447L4.92823 19.0253C4.93669 18.5396 4.78249 18.065 4.49018 17.677L0.625143 12.5474C-0.284285 11.3404 0.282274 9.59669 1.72747 9.15476L7.86948 7.27659C8.33401 7.13454 8.73771 6.84125 9.01635 6.44335L12.7006 1.18233C13.5675 -0.0555689 15.4009 -0.0555689 16.2678 1.18233Z"
      fill="#FDCA23"
      fillOpacity="0.31"
    />
  </svg>
);

export default ReviewAndRatings;
