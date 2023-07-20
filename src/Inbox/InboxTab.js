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
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../Marketplace/common/Header";
import AllInbox from "./AllInbox";
import Notifications from "./Notifications";
import Messages from "./Messages";
// -- images --

const InboxTab = () => {
  return (
    <>
      <div className="LayoutBG athleteSection inboxPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <svg
                width="54"
                height="43"
                viewBox="0 0 54 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.3096 0.0996094H5.6429C2.69624 0.0996094 0.30957 2.48628 0.30957 5.43294V37.4329C0.30957 40.3796 2.69624 42.7663 5.6429 42.7663H48.3096C51.2562 42.7663 53.6429 40.3796 53.6429 37.4329V5.43294C53.6429 2.48628 51.2562 0.0996094 48.3096 0.0996094ZM48.3096 10.7663L26.9762 24.0996L5.6429 10.7663V5.43294L26.9762 18.7663L48.3096 5.43294V10.7663Z"
                  fill="#B1E0FE"
                />
              </svg>
              <div className="font54White ms-4">Inbox</div>
              <span className="msgCount ms-2">12</span>
            </div>
            <p className="titleTextMini">
              VIEW MESSAGES AND TRANSACTION NOTIFICATIONS
            </p>
            <Header />
          </div>

          <Row className="mt-4">
            <Col xxl={12} xl={12}>
              <div className="position-relative tabSideBtnParent">
                <Tabs defaultActiveKey="allInbox" className="mb-3 navCustom">
                  <Tab eventKey="allInbox" title="ALL INBOX">
                    <AllInbox />
                  </Tab>
                  <Tab eventKey="notifications" title="NOTIFICATIONS">
                    <Notifications />
                  </Tab>
                  <Tab eventKey="messages" title="MESSAGES">
                    <Messages />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default InboxTab;
