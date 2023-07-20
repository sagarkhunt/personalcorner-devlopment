import React from "react";
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
import Header from "./common/Header";
import { NavLink } from "react-router-dom";
// -- images --
// import aboutBannerImg from "../assets/images/aboutBannerImg.png";
// import logoImg from "../assets/images/logoImg.png";
// import aboutNFT from "../assets/images/aboutNFT.png";

import AddDescription from "../../src/assets/images/AddDescription.png";
import CombinedHeader from "./common/CombinedHeader";

const GearOrder = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon">
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          <h2 className="mb-0">Orders</h2>
          <div className="d-flex flex-wrap">
            <div className="userDataMain">
              <ul className="h-100">
                <li>
                  Total Order : <span className="fontMidium ms-1">2000</span>
                </li>
                <li>
                  Processing : <span className="fontMidium ms-1">1200</span>
                </li>
                <li>
                  Completed : <span className="fontMidium ms-1">1500</span>
                </li>
                <li>
                  Cancelled : <span className="fontMidium ms-1">15</span>
                </li>
                <li>
                  Failed : <span className="fontMidium ms-1">10</span>
                </li>
              </ul>
            </div>
            <button className="btnBlue btnEarnWith ms-3">
              Export Order (Excel)
            </button>
          </div>
        </div>

        {/* ------- */}
        <section className="adminCommanPageSection w-100">
          <div className="headingBlue usersScreenSection border-0">
            <div className="filterPart flex-wrap p-0">
              <div className="leftPart">
                <Form>
                  <Row className="gx-2 gx-lg-5">
                    <Col
                      lg={"auto"}
                      md={2}
                      sm={12}
                      className="d-flex align-items-center flex-column flex-xl-row mb-3 mb-md-0"
                    >
                      <Form.Label className="mb-0 me-2 font18White">
                        Show
                      </Form.Label>
                      <Form.Select defaultValue="">
                        <option>20</option>
                        <option>21</option>
                      </Form.Select>
                    </Col>
                    <Col
                      lg={"auto"}
                      md={3}
                      sm={12}
                      className="d-flex align-items-center flex-column flex-xl-row mb-3 mb-md-0"
                    >
                      <Form.Label className="mb-0 me-2 font18White">
                        Filter
                      </Form.Label>
                      <Form.Select defaultValue="">
                        <option>By Name</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="searchPart position-relative mt-lg-3 mt-xl-0">
                <Form.Control
                  type="text"
                  placeholder="Search Category"
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
          </div>

          <div className="adminCommanPageContent">
            <div className="mediaLiabraryContent">
              <div className="stripedTable mb-4">
                <div className="table-responsive">
                  <Table bordered className="mb-0">
                    <thead>
                      <tr>
                        <th className="bgDark">
                          <Form.Check aria-label="pageTitle" />
                        </th>
                        <th className="bgDark">Order</th>
                        <th className="bgDark">Date</th>
                        <th className="bgDark">Status</th>
                        <th className="bgDark">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            Processing
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusInactive">
                            Failed
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusCancelled">
                            Cancelled
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusCompleted">
                            Completed
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            Processing
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusInactive">
                            Failed
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            Processing
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusInactive">
                            Failed
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusActive">
                            Processing
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check aria-label="pageTitle" />
                        </td>
                        <td>Hollwood Borwn, Signed Replica Helmet</td>
                        <td>25-Aug-2022</td>
                        <td>
                          <Badge bg="" className="statusInactive">
                            Failed
                          </Badge>
                        </td>
                        <td>$20.00</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="paginationMain w-100 mb-4">
                <div className="pageEntries">Showing 1 to 20 of 12 entries</div>
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
            </div>
          </div>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default GearOrder;
