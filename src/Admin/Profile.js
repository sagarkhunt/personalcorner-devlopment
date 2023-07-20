import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
  Tab,
  Nav,
  Badge,
} from "react-bootstrap";
import Sidebar from "./common/Sidebar";
import Header from "../Admin/common/Header";
// -- images --
// import aboutBannerImg from "../assets/images/aboutBannerImg.png";
// import logoImg from "../assets/images/logoImg.png";
// import aboutNFT from "../assets/images/aboutNFT.png";

import profileImg from "../../src/assets/images/profileImg.png";
import CombinedHeader from "./common/CombinedHeader";

const Profile = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="mb-0">Profile</h2>
        </div>

        {/* ------- */}
        <section className="profileSection w-100">
          <div className="mainDetails">
            <Row>
              <Col lg={"auto"} md={12} sm={12}>
                <img src={profileImg} className="img-fluid" />
              </Col>
              <Col lg={"auto"} md={12} sm={12}>
                <h2 className="mb-0 mt-3 mt-lg-0">John Deo</h2>
                <p className="font22White mb-0">Super Administrator</p>
                <a href="#" className="font22Blue">
                  admin@personalcorner.io
                </a>
                <div className="uploadImg">
                  <span>Drop Files Here Or Click to Upload</span>
                  <input type="file"></input>
                </div>
              </Col>
            </Row>
          </div>

          <div className="otherDetails my-5">
            <div className="heading">Account</div>
            <Row className="mt-4">
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John Deo"
                    className="perInfoField"
                  />
                  <Form.Text className="text-muted">
                    Usernames cannot be changed
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John"
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Deo"
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="otherDetails my-5">
            <div className="heading">Contact Info</div>
            <Row className="mt-4">
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">
                    Email (required)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="admin@personalcorner.io"
                    className="perInfoField"
                  />
                  <Form.Text className="text-muted">
                    If you change this, an email will be sent at your new
                    address to confirm it.{" "}
                    <span className="fontBold">
                      The new address will not become active until confirmed.
                    </span>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">Website</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://www.personalcorner.io/"
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">
                    Instagram profile URL{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">
                    Twitter username (without @)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="perInfoLabel">
                    YouTube profile URL{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="otherDetails my-5">
            <div className="heading">Account Management</div>
            <Row className="mt-4">
              <Col lg={6} md={6} sm={12}>
                <Row className="align-items-center">
                  <Col lg={8} md={12} sm={12}>
                    <Form.Group className="mb-3 position-relative">
                      <Form.Label className="perInfoLabel">Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        className="perInfoField"
                      />
                      <span className="showHideBtn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24.062"
                          height="17.914"
                          viewBox="0 0 24.062 17.914"
                        >
                          <g
                            id="noun-eye-5163970"
                            transform="translate(-90.002 -86.438)"
                          >
                            <path
                              id="Path_359"
                              data-name="Path 359"
                              d="M102.033,86.438a11.492,11.492,0,0,0-7.152,3.043,25.621,25.621,0,0,0-4.741,5.427.928.928,0,0,0,0,.974,25.621,25.621,0,0,0,4.741,5.427,11.492,11.492,0,0,0,7.152,3.043,11.492,11.492,0,0,0,7.152-3.043,25.626,25.626,0,0,0,4.741-5.427.927.927,0,0,0,0-.974,25.614,25.614,0,0,0-4.741-5.427A11.493,11.493,0,0,0,102.033,86.438Zm0,1.851A9.623,9.623,0,0,1,108,90.9a23.579,23.579,0,0,1,4.033,4.5A23.609,23.609,0,0,1,108,99.89a9.622,9.622,0,0,1-5.963,2.611A9.62,9.62,0,0,1,96.07,99.89a23.592,23.592,0,0,1-4.033-4.5,23.592,23.592,0,0,1,4.033-4.5A9.621,9.621,0,0,1,102.033,88.289Z"
                              fill="#181617"
                              fillRule="evenodd"
                            />
                            <path
                              id="Path_360"
                              data-name="Path 360"
                              d="M259.226,186.46a4.33,4.33,0,1,0,4.33,4.33A4.332,4.332,0,0,0,259.226,186.46Zm0,1.851a2.479,2.479,0,1,1-2.478,2.479A2.479,2.479,0,0,1,259.226,188.311Z"
                              transform="translate(-157.265 -95.394)"
                              fill="#181617"
                              fillRule="evenodd"
                            />
                          </g>
                        </svg>
                      </span>
                    </Form.Group>
                  </Col>
                  <Col lg="auto">
                    <Button type="submit" className="btnBlue-sm mb-2 mt-4">
                      Reset Password
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Row className="align-items-center">
                  <Col lg={8} md={12} sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label className="perInfoLabel">Session</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Logout Everywhere Else"
                        className="perInfoField"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="auto">
                    <Button type="submit" className="btnBlue-sm mb-2 mt-4">
                      Logout Now
                    </Button>
                  </Col>
                  <Form.Text className="text-muted">
                    Did you lose your phone or leave your account logged in at a
                    public computer? You can log out everywhere else, and stay
                    logged in here.{" "}
                  </Form.Text>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="otherDetails my-5">
            <div className="heading">Set New Password</div>
            <Row className="mt-4">
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Label className="perInfoLabel">Old Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                  <span className="showHideBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.062"
                      height="17.914"
                      viewBox="0 0 24.062 17.914"
                    >
                      <g
                        id="noun-eye-5163970"
                        transform="translate(-90.002 -86.438)"
                      >
                        <path
                          id="Path_359"
                          data-name="Path 359"
                          d="M102.033,86.438a11.492,11.492,0,0,0-7.152,3.043,25.621,25.621,0,0,0-4.741,5.427.928.928,0,0,0,0,.974,25.621,25.621,0,0,0,4.741,5.427,11.492,11.492,0,0,0,7.152,3.043,11.492,11.492,0,0,0,7.152-3.043,25.626,25.626,0,0,0,4.741-5.427.927.927,0,0,0,0-.974,25.614,25.614,0,0,0-4.741-5.427A11.493,11.493,0,0,0,102.033,86.438Zm0,1.851A9.623,9.623,0,0,1,108,90.9a23.579,23.579,0,0,1,4.033,4.5A23.609,23.609,0,0,1,108,99.89a9.622,9.622,0,0,1-5.963,2.611A9.62,9.62,0,0,1,96.07,99.89a23.592,23.592,0,0,1-4.033-4.5,23.592,23.592,0,0,1,4.033-4.5A9.621,9.621,0,0,1,102.033,88.289Z"
                          fill="#181617"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_360"
                          data-name="Path 360"
                          d="M259.226,186.46a4.33,4.33,0,1,0,4.33,4.33A4.332,4.332,0,0,0,259.226,186.46Zm0,1.851a2.479,2.479,0,1,1-2.478,2.479A2.479,2.479,0,0,1,259.226,188.311Z"
                          transform="translate(-157.265 -95.394)"
                          fill="#181617"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </span>
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Label className="perInfoLabel">New Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                  <span className="showHideBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.062"
                      height="17.914"
                      viewBox="0 0 24.062 17.914"
                    >
                      <g
                        id="noun-eye-5163970"
                        transform="translate(-90.002 -86.438)"
                      >
                        <path
                          id="Path_359"
                          data-name="Path 359"
                          d="M102.033,86.438a11.492,11.492,0,0,0-7.152,3.043,25.621,25.621,0,0,0-4.741,5.427.928.928,0,0,0,0,.974,25.621,25.621,0,0,0,4.741,5.427,11.492,11.492,0,0,0,7.152,3.043,11.492,11.492,0,0,0,7.152-3.043,25.626,25.626,0,0,0,4.741-5.427.927.927,0,0,0,0-.974,25.614,25.614,0,0,0-4.741-5.427A11.493,11.493,0,0,0,102.033,86.438Zm0,1.851A9.623,9.623,0,0,1,108,90.9a23.579,23.579,0,0,1,4.033,4.5A23.609,23.609,0,0,1,108,99.89a9.622,9.622,0,0,1-5.963,2.611A9.62,9.62,0,0,1,96.07,99.89a23.592,23.592,0,0,1-4.033-4.5,23.592,23.592,0,0,1,4.033-4.5A9.621,9.621,0,0,1,102.033,88.289Z"
                          fill="#181617"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_360"
                          data-name="Path 360"
                          d="M259.226,186.46a4.33,4.33,0,1,0,4.33,4.33A4.332,4.332,0,0,0,259.226,186.46Zm0,1.851a2.479,2.479,0,1,1-2.478,2.479A2.479,2.479,0,0,1,259.226,188.311Z"
                          transform="translate(-157.265 -95.394)"
                          fill="#181617"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </span>
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Label className="perInfoLabel">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="perInfoField"
                  />
                  <span className="showHideBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.062"
                      height="17.914"
                      viewBox="0 0 24.062 17.914"
                    >
                      <g
                        id="noun-eye-5163970"
                        transform="translate(-90.002 -86.438)"
                      >
                        <path
                          id="Path_359"
                          data-name="Path 359"
                          d="M102.033,86.438a11.492,11.492,0,0,0-7.152,3.043,25.621,25.621,0,0,0-4.741,5.427.928.928,0,0,0,0,.974,25.621,25.621,0,0,0,4.741,5.427,11.492,11.492,0,0,0,7.152,3.043,11.492,11.492,0,0,0,7.152-3.043,25.626,25.626,0,0,0,4.741-5.427.927.927,0,0,0,0-.974,25.614,25.614,0,0,0-4.741-5.427A11.493,11.493,0,0,0,102.033,86.438Zm0,1.851A9.623,9.623,0,0,1,108,90.9a23.579,23.579,0,0,1,4.033,4.5A23.609,23.609,0,0,1,108,99.89a9.622,9.622,0,0,1-5.963,2.611A9.62,9.62,0,0,1,96.07,99.89a23.592,23.592,0,0,1-4.033-4.5,23.592,23.592,0,0,1,4.033-4.5A9.621,9.621,0,0,1,102.033,88.289Z"
                          fill="#181617"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_360"
                          data-name="Path 360"
                          d="M259.226,186.46a4.33,4.33,0,1,0,4.33,4.33A4.332,4.332,0,0,0,259.226,186.46Zm0,1.851a2.479,2.479,0,1,1-2.478,2.479A2.479,2.479,0,0,1,259.226,188.311Z"
                          transform="translate(-157.265 -95.394)"
                          fill="#181617"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </span>
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="d-flex justify-content-center">
            <Col lg="auto">
              <Button type="submit" className="btnBlue-sm">
                Update
              </Button>
            </Col>
          </div>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default Profile;
