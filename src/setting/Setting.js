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
import AccountTab from "./AccountTab";
import NotificationTab from "./NotificationTab";
import SecurityTab from "./SecurityTab";
// -- images --

const Setting = () => {
  const [key, setKey] = useState("ACCOUNT");
  return (
    <>
      <div className="LayoutBG athleteSection settingPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <SettingIcon className={"headerTitleIcon"} />
              <div className="font54White ms-4">Settings</div>
            </div>
            <p className="titleTextMini">
              EDIT YOUR PERSONAL AND SOCIAL INFORMATION
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
                  <Tab eventKey="ACCOUNT" title="ACCOUNT">
                    <AccountTab />
                  </Tab>
                  <Tab eventKey="NOTIFICATION" title="NOTIFICATION">
                    <NotificationTab />
                  </Tab>
                  <Tab eventKey="SECURITY" title="SECURITY">
                    <SecurityTab />
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

const SettingIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 54 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.0667 30.899C48.3334 29.5656 48.3334 28.499 48.3334 27.4323C48.3334 26.3656 48.3334 25.299 48.0667 23.9656L53.1334 19.4323L47 8.76562L40.6 10.899C38.7334 9.56563 36.8667 8.23229 34.7334 7.43229L33.1334 0.765625H20.8667L19.5334 7.43229C17.1334 8.23229 15.2667 9.56563 13.4 10.899L7.00003 8.76562L0.866699 19.4323L5.93337 23.9656C5.6667 25.299 5.6667 26.3656 5.6667 27.4323C5.6667 28.499 5.6667 29.5656 5.93337 30.899L0.866699 35.4323L7.00003 46.099L13.4 43.9656C15.2667 45.299 17.1334 46.6323 19.2667 47.4323L20.8667 54.099H33.4L34.7334 47.4323C36.8667 46.6323 39 45.5656 40.6 43.9656L47 46.099L53.1334 35.4323L48.0667 30.899ZM27 38.099C21.1334 38.099 16.3334 33.299 16.3334 27.4323C16.3334 21.5656 21.1334 16.7656 27 16.7656C32.8667 16.7656 37.6667 21.5656 37.6667 27.4323C37.6667 33.299 32.8667 38.099 27 38.099Z"
      fill="#B1E0FE"
    />
  </svg>
);

export default Setting;
