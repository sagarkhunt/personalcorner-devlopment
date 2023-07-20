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
// -- images --
// import aboutBannerImg from "../assets/images/aboutBannerImg.png";
// import logoImg from "../assets/images/logoImg.png";
// import aboutNFT from "../assets/images/aboutNFT.png";

import ml1 from "../../assets/images/ml1.png";
import ml2 from "../../assets/images/ml2.png";
import ml3 from "../../assets/images/ml3.png";
import ml4 from "../../assets/images/ml4.png";
import CombinedHeader from "../common/CombinedHeader";
import AccountPrivacyTab from "./AccountPrivacyTab";
import CurrencyTab from "./CurrencyTab";
import EmailTab from "./EmailTab";
import GeneralTab from "./GeneralTab";
import PaymentTab from "./PaymentTab";

const AdminSetting = () => {
  return (
    <CombinedHeader>
      <main className="adminPageMainCommon adminSettingPage">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="mb-0">Setting</h2>
          <button className="btnBlue btnEarnWith">Update</button>
        </div>

        {/* ------- */}
        <section className="pagesSection w-100">
          <Tab.Container
            unmountOnExit
            id="left-tabs-example"
            defaultActiveKey="General"
          >
            <div className="d-flex justify-content-between flex-wrap">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="General">General</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Currency">Currency</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Payment">Payment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Account & Privacy">
                    Account & Privacy
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Email">Email</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="General">
                <GeneralTab />
              </Tab.Pane>
              <Tab.Pane eventKey="Currency">
                <CurrencyTab />
              </Tab.Pane>
              <Tab.Pane eventKey="Payment">
                <PaymentTab />
              </Tab.Pane>
              <Tab.Pane eventKey="Account & Privacy">
                <AccountPrivacyTab />
              </Tab.Pane>
              <Tab.Pane eventKey="Email">
                <EmailTab />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
        {/* -------- */}
      </main>
    </CombinedHeader>
  );
};

export default AdminSetting;
