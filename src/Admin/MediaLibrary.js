import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import Sidebar from "./common/Sidebar";
import Header from "../Admin/common/Header";
// -- images --
// import aboutBannerImg from "../assets/images/aboutBannerImg.png";
// import logoImg from "../assets/images/logoImg.png";
// import aboutNFT from "../assets/images/aboutNFT.png";

import ml1 from "../../src/assets/images/ml1.png";
import ml2 from "../../src/assets/images/ml2.png";
import ml3 from "../../src/assets/images/ml3.png";
import ml4 from "../../src/assets/images/ml4.png";
import CombinedHeader from "./common/CombinedHeader";

const MediaLibrary = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon">
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Media Liabrary</h2>
          <button className="btnBlue btnEarnWith">Upload New Photo</button>
        </div>

        {/* ------- */}
        <section className="mediaLiabrarySection w-100">
          <div className="filterPart">
            <button className="filterBtn me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="45"
                viewBox="0 0 43 45"
              >
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(-1461 -222)"
                >
                  <rect
                    id="Rectangle_734"
                    data-name="Rectangle 734"
                    width="43"
                    height="8"
                    transform="translate(1461 222)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_735"
                    data-name="Rectangle 735"
                    width="43"
                    height="8"
                    transform="translate(1461 234)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_736"
                    data-name="Rectangle 736"
                    width="43"
                    height="8"
                    transform="translate(1461 247)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_737"
                    data-name="Rectangle 737"
                    width="43"
                    height="8"
                    transform="translate(1461 259)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </button>
            <button className="filterBtn me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="45"
                viewBox="0 0 43 45"
              >
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(-1522 -222)"
                >
                  <g
                    id="Rectangle_731"
                    data-name="Rectangle 731"
                    transform="translate(1522 222)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                  >
                    <rect width="43" height="45" stroke="none" />
                    <rect x="1.5" y="1.5" width="40" height="42" fill="none" />
                  </g>
                  <rect
                    id="Rectangle_732"
                    data-name="Rectangle 732"
                    width="43"
                    height="3"
                    transform="translate(1522 243)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_733"
                    data-name="Rectangle 733"
                    width="43"
                    height="3"
                    transform="translate(1545 223) rotate(90)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </button>
            <div className="searchPart position-relative">
              <Form.Control
                type="text"
                placeholder="Search Image"
                className="searchField"
              />
              <button className="searchBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                >
                  <text
                    id="_"
                    data-name=""
                    transform="translate(0 14)"
                    fill="#464646"
                    fontSize="16"
                    fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                  >
                    <tspan x="0" y="0">
                      
                    </tspan>
                  </text>
                </svg>
              </button>
            </div>
          </div>
          <div className="mediaLiabraryContent p-4">
            <Row>
              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml1} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml2} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml3} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml4} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml1} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml2} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml3} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml4} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml1} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml2} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml3} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml4} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml1} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml2} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml3} className="w-100" />
                </div>
              </Col>

              <Col lg={3} md={4} sm={6} className="mb-4">
                <div className="mediaLiabrary position-relative">
                  <div className="actionBtnMain">
                    <button className="actionBtn me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 14)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Solid, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                    <button className="actionBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                      >
                        <text
                          id="_"
                          data-name=""
                          transform="translate(0 15)"
                          fill="#707070"
                          fontSize="16"
                          fontFamily="FontAwesome5Free-Regular, 'Font Awesome \35  Free'"
                        >
                          <tspan x="0" y="0">
                            
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <img src={ml4} className="w-100" />
                </div>
              </Col>
            </Row>

            <div className="d-flex justify-content-center paginationCustom">
              <Pagination>
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default MediaLibrary;
