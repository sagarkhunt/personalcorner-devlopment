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
// import aboutNFT from "../assets/images/aboutNFT.png";

import ml1 from "../../src/assets/images/ml1.png";
import ml2 from "../../src/assets/images/ml2.png";
import ml3 from "../../src/assets/images/ml3.png";
import ml4 from "../../src/assets/images/ml4.png";
import CombinedHeader from "./common/CombinedHeader";

const Pages = () => {
  const [overlay, setOverlay] = useState(false);

  const hideSidebar = () => {
    const sideBarId = document.getElementById("sideBarId2");
    const adminContent = document.getElementById("adminContent");

    if (sideBarId.classList.contains("mobileSidebar")) {
      sideBarId.classList.remove("mobileSidebar");
      adminContent.classList.remove("adminContentMobile");
    } else {
      sideBarId.classList.add("mobileSidebar");
      adminContent.classList.add("adminContentMobile");
    }
  };

  return (
    <CombinedHeader>
      <main className="adminPageMainCommon">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="mb-0">Pages</h2>
          <button className="btnBlue btnEarnWith">Add New Page</button>
        </div>

        {/* ------- */}
        <section className="pagesSection w-100">
          <Tab.Container
            unmountOnExit
            id="left-tabs-example"
            defaultActiveKey="first"
          >
            <div className="d-flex justify-content-between flex-wrap">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">Total Pages (12)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Publish Pages (12)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Trash Pages (0)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Draft</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="filterPart">
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
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="mediaLiabraryContent">
                  <div className="stripedTable mb-4">
                    <div className="table-responsive">
                      <Table striped bordered className="mb-0">
                        <thead>
                          <tr>
                            <th>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Page Title
                              </div>
                            </th>
                            <th>Publish Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Homepage
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                About Us
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Contact Us
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                FAQ's
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Services
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Privacy Policy
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Term & Conditions
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Return Policy
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <Form.Check
                                  aria-label="pageTitle"
                                  className="me-2"
                                />{" "}
                                Review
                              </div>
                            </td>
                            <td>Publish 28/8/2022 at 7:30 pm</td>
                            <td>
                              <button className="btnBlue me-3">
                                Edit Page
                              </button>
                              <button className="btnWhite">Trash Page</button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center paginationCustom mb-4">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="mediaLiabraryContent">
                  <div className="stripedTable mb-4">
                    <Table striped bordered className="mb-0">
                      <thead>
                        <tr>
                          <th>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Page Title
                            </div>
                          </th>
                          <th>Publish Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Homepage
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              About Us
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Contact Us
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              FAQ's
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Services
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Privacy Policy
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Term & Conditions
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Return Policy
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Review
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center paginationCustom mb-4">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="mediaLiabraryContent">
                  <div className="stripedTable mb-4">
                    <Table striped bordered className="mb-0">
                      <thead>
                        <tr>
                          <th>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Page Title
                            </div>
                          </th>
                          <th>Publish Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Homepage
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              About Us
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Contact Us
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              FAQ's
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Services
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Privacy Policy
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Term & Conditions
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Return Policy
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Review
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center paginationCustom mb-4">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div className="mediaLiabraryContent">
                  <div className="stripedTable mb-4">
                    <Table striped bordered className="mb-0">
                      <thead>
                        <tr>
                          <th>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Page Title
                            </div>
                          </th>
                          <th>Publish Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Homepage
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              About Us
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Contact Us
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              FAQ's
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Services
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Privacy Policy
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Term & Conditions
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Return Policy
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <Form.Check
                                aria-label="pageTitle"
                                className="me-2"
                              />{" "}
                              Review
                            </div>
                          </td>
                          <td>Publish 28/8/2022 at 7:30 pm</td>
                          <td>
                            <button className="btnBlue me-3">Edit Page</button>
                            <button className="btnWhite">Trash Page</button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center paginationCustom mb-4">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default Pages;
