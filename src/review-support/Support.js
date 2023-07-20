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
import SupportTab from "./SupportTab";
// -- images --

const Support = () => {
  const [key, setKey] = useState("ALL");
  return (
    <>
      <div className="LayoutBG athleteSection reviewRatingPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <SupportIcon className={"headerTitleIcon"} />
              <div className="font54White ms-4">Support Ticket</div>
            </div>
            <p className="titleTextMini">
              MANAGE TICKETS AND CHAT WITH SUPPORT
            </p>
            <Header />
          </div>

          <Row className="mt-4">
            <Col xxl={12} xl={12}>
              <div className="position-relative tabSideBtnParent">
                <Tabs
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 navCustom"
                  unmountOnExit
                >
                  <Tab eventKey="ALL" title="ALL">
                    <hr />
                    <SupportTab />
                  </Tab>
                  <Tab eventKey="ON HOLD" title="ON HOLD">
                    <hr />
                    <SupportTab />
                  </Tab>
                  <Tab eventKey="IN PROGRESS" title="IN PROGRESS">
                    <hr />
                    <SupportTab />
                  </Tab>
                  <Tab eventKey="COMPLETED" title="COMPLETED">
                    <hr />
                    <SupportTab />
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
export default Support;
