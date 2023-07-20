import React, { useEffect, useRef, useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  NavDropdown,
  Row,
  Tab,
} from "react-bootstrap";
import AvatarImg from "../../assets/images/admin/Screenshot_3.png";

const ActiveTicketTab = () => {
  const inputRef = useRef();
  const [key, setKey] = useState(null);
  const [issueDetail, setIssueDetail] = useState({});

  const issueList = [
    {
      issueId: "#188",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, obcaecati!",
      number: 10,
    },
    {
      issueId: "#76",
      title:
        "adipisicing elit. Assumenda itaque aspernatur delectus omnis veniam dolores. Dolores, obcaecati!",
      number: 8,
    },
    {
      issueId: "#120",
      title:
        "ectetur adipisicing elit. Assumenda itaque aspernatur delectus omnis veniam dolores, amet consectetur adipisicing elit. Dolores, obcaecati!",
      number: 12,
    },
    {
      issueId: "#154",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, obcaecati!",
      number: 6,
    },
    {
      issueId: "#119",
      title:
        "Lorem ipsum, dolor sit amet consectetur quaerat impedit quos! Molestiae dolores dignissimos dicta culpa nulla asperiores ab? adipisicing elit. Dolores, obcaecati!",
      number: 6,
    },
    {
      issueId: "#22",
      title:
        "ducimus adipisci qui sunt temporibus nobis quaerat impedit quos!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, obcaecati!",
      number: 3,
    },
  ];

  useEffect(() => {
    key && setIssueDetail(issueList.find((item) => item.issueId === key));
  }, [key]);

  return (
    <div className="activeTicketTab">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={key}
        className="customNavTabsContainer"
        onSelect={(k) => setKey(k)}
        unmountOnExit
      >
        <Row>
          <Col lg={5}>
            <div className="customNavTabsParent">
              <Nav>
                {issueList.map((issue, i) => (
                  <Nav.Item key={i}>
                    <Nav.Link eventKey={issue.issueId}>
                      <div className="topContent">
                        <h4 className="mb-5 title">
                          {issue.issueId} {issue.title}
                        </h4>
                        <div className="content">
                          <p className="mb-3 date">02/08/2022, 09:20 AM</p>
                          <p className="mb-3 awb">
                            AWB: <span className="px-2 py-1">126318028397</span>
                          </p>
                        </div>
                      </div>
                      <hr className="customTabListHr" />
                      <div className="text-end bottomContent">
                        <span className="number">{issue.number}</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </Col>
          <Col lg={7}>
            <Tab.Content>
              {issueList.map((iss, i) => (
                <Tab.Pane key={i} eventKey={iss.issueId}>
                  <div className="customNavTabsDetailSection">
                    <div className="headArea">
                      <h4 className="mb-5 title">
                        {iss.issueId} {iss.title}
                      </h4>
                      <div className="content d-flex align-items-center gap-3">
                        <p>Case: Wrong Address</p>
                        <p>|</p>
                        <p>AWB: 126318028397</p>
                        <p>|</p>
                        <p>Date: 04/08/2022</p>
                      </div>
                    </div>
                    <div className="issueListArea">
                      {[...Array(iss.number)].map((_, i) => (
                        <div key={i} className="issue">
                          <div className="d-flex align-items-center justify-content-between personDetail">
                            <div className="d-flex align-items-center">
                              <img
                                src={AvatarImg}
                                alt=""
                                className="me-3 img-fluid"
                              />
                              <h5 className="mb-0 name">
                                Mathew Anderson {`${iss.number}${i + 1}`}
                              </h5>
                            </div>
                            <span className="date">04/08/2022, 09:20 AM</span>
                          </div>
                          <hr className="customTabListHr" />
                          <div className="bottomDetail">
                            <p className="mb-4">
                              The shipment with the AWB 126318028397 didn't
                              arrive still to this day, what can we do?
                            </p>
                            <span className="regards">RegardsSite Admin</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="attachFileArea">
                      <Form>
                        <div className="d-flex align-items-center mb-3 inpGroup">
                          <input
                            type="text"
                            className="typeText"
                            placeholder="Type in your message ..."
                          />
                          <button
                            type="button"
                            onClick={() => inputRef.current.click()}
                            className="btnAttactFile"
                          >
                            Attach File
                          </button>
                          {/* <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}

                          <input
                            type="file"
                            // accept="image/*"
                            ref={inputRef}
                            // onChange={onSelectFile}
                            hidden
                          />
                        </div>

                        <button className="btnBlue">Send</button>
                      </Form>
                    </div>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ActiveTicketTab;
