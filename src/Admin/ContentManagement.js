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
} from "react-bootstrap";
import Sidebar from "./common/Sidebar";
import Header from "../Admin/common/Header";
// -- images --
// import aboutBannerImg from "../assets/images/aboutBannerImg.png";
// import logoImg from "../assets/images/logoImg.png";
import cmsImg from "../assets/images/cmsImg.png";
import CombinedHeader from "./common/CombinedHeader";

const ContentManagement = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon">
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">
            Content Management <span>[ Editor Content ]</span>
          </h2>
          <button className="btnBlue btnEarnWith">Add New Page</button>
        </div>

        {/* ------- */}
        <section className="contentManagementSection w-100">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="first">Content</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Options</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Advanced</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className="cmsLabel">Page Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="About Us"
                      className="cmsField"
                    />
                  </Form.Group>

                  <div className="mb-4">
                    <img src={cmsImg} className="w-100" />
                  </div>

                  <button className="btnBlue btnEarnWith">Save</button>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <div className="optionPart borderBottom">
                  <div className="heading">
                    <h2>Publishing</h2>
                  </div>
                  <Row className="my-5">
                    <Form>
                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Published
                        </Form.Label>
                        <Col sm="9">
                          <div className="w-100">
                            <div className="switch b2" id="switchButton">
                              <input type="checkbox" className="checkbox" />
                              <div className="knobs">
                                <span>Yes</span>
                              </div>
                              <div className="layer"></div>
                            </div>
                          </div>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Date
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <div className="w-100">
                            <Form.Control type="date" placeholder="" />
                          </div>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Publish Date
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <div className="w-100">
                            <Form.Control type="date" placeholder="" />
                          </div>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Unpublish Date
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <div className="w-100">
                            <Form.Control type="date" placeholder="" />
                          </div>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Metadata
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <Row className="g-2 mb-2">
                            <button className="dragDropBtn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="13"
                                viewBox="0 0 28 13"
                              >
                                <g
                                  id="Group_1"
                                  data-name="Group 1"
                                  transform="translate(-803 -745)"
                                >
                                  <rect
                                    id="Rectangle_693"
                                    data-name="Rectangle 693"
                                    width="28"
                                    height="3"
                                    transform="translate(803 745)"
                                    fill="#fff"
                                  />
                                  <rect
                                    id="Rectangle_694"
                                    data-name="Rectangle 694"
                                    width="28"
                                    height="3"
                                    transform="translate(803 750)"
                                    fill="#fff"
                                  />
                                  <rect
                                    id="Rectangle_695"
                                    data-name="Rectangle 695"
                                    width="28"
                                    height="3"
                                    transform="translate(803 755)"
                                    fill="#fff"
                                  />
                                </g>
                              </svg>
                            </button>

                            <Col>
                              <Form.Control
                                placeholder="key (e.g. Marketplace)"
                                className="cmsFieldSM"
                              />
                            </Col>
                            <Col>
                              <Form.Control
                                placeholder="Value (e.g. 'NFT' 'Player'"
                                className="cmsFieldSM"
                              />
                            </Col>

                            <button className="borderedBtn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="28"
                                viewBox="0 0 13 28"
                              >
                                <text
                                  id="_"
                                  data-name="+"
                                  transform="translate(0 22)"
                                  fill="#fff"
                                  fontSize="24"
                                  fontFamily="GTWalsheimPro-Bold, GT Walsheim Pro"
                                  font-weight="700"
                                >
                                  <tspan x="0" y="0">
                                    +
                                  </tspan>
                                </text>
                              </svg>
                            </button>

                            <button className="borderedBtn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="28"
                                viewBox="0 0 10 28"
                              >
                                <text
                                  id="_-"
                                  data-name="-"
                                  transform="translate(0 22)"
                                  fill="#fff"
                                  fontSize="24"
                                  fontFamily="GTWalsheimPro-Bold, GT Walsheim Pro"
                                  font-weight="700"
                                >
                                  <tspan x="0" y="0">
                                    -
                                  </tspan>
                                </text>
                              </svg>
                            </button>
                          </Row>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Row>
                </div>

                <div className="optionPart">
                  <div className="heading">
                    <h2>Publishing</h2>
                  </div>
                  <Row className="my-5">
                    <Form>
                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Category
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <div className="w-100">
                            <Form.Control
                              type="text"
                              placeholder=""
                              className="cmsFieldSM"
                            />
                          </div>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Tag
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <div className="w-100">
                            <Form.Control
                              type="text"
                              placeholder=""
                              className="cmsFieldSM"
                            />
                          </div>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Row>
                  <button className="btnBlue btnEarnWith">Save</button>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <Form>
                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Published
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <Form.Select
                            aria-label="Default template"
                            className="cmsFieldSM"
                          >
                            <option>Default template</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Permalink
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <Form.Control
                            placeholder="Url Slug"
                            className="cmsFieldSM"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Page Attribute
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <Form.Control
                            placeholder="Parent Page"
                            className="cmsFieldSM"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="cmsLabel2">
                          Page Order
                        </Form.Label>
                        <Col sm="12" lg="9">
                          <Form.Select
                            aria-label="Default template"
                            className="cmsFieldSM"
                          >
                            <option>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <button className="btnBlue btnEarnWith">Save</button>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
      </main>
    </CombinedHeader>
  );
};

export default ContentManagement;
