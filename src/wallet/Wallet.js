import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Header from "../Marketplace/common/Header";
// -- images --
import OverviewTab from "./OverviewTab";
import TransHistoryTab from "./TransHistoryTab";
import SavedCardsTab from "./SavedCardsTab";

const Wallet = () => {
  const [key, setKey] = useState("OVERVIEW");
  return (
    <>
      <div className="LayoutBG athleteSection walletPage">
        <Container fluid className="position-relative">
          <div className="headerParent">
            <div className="d-flex align-items-center pageMainTitle">
              <WalletIcon className={"headerTitleIcon"} />
              <div className="font54White ms-4">Wallet</div>
            </div>
            <p className="titleTextMini">
              MANAGE WALLET BALANCE AND TRANSACTION HISTORY
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
                  <Tab eventKey="OVERVIEW" title="OVERVIEW">
                    <hr />
                    <OverviewTab />
                  </Tab>
                  <Tab
                    eventKey="TRANSACTION HISTORY"
                    title="TRANSACTION HISTORY"
                  >
                    <hr />
                    <TransHistoryTab />
                  </Tab>
                  <Tab eventKey="SAVED CARDS" title="SAVED CARDS" disabled>
                    <hr />
                    <SavedCardsTab />
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

const WalletIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.22656 0C3.83998 0 0.226562 3.61341 0.226562 8V42.6667C0.226562 45.6133 2.61323 48 5.5599 48H42.8932C45.8399 48 48.2266 45.6133 48.2266 42.6667V16C48.2266 13.0533 45.8399 10.6667 42.8932 10.6667H13.5599H8.22656C6.71982 10.6667 5.5599 9.50675 5.5599 8C5.5599 6.49325 6.71982 5.33333 8.22656 5.33333H45.5599V0H8.22656ZM40.2266 26.6667C41.6986 26.6667 42.8932 27.8613 42.8932 29.3333C42.8932 30.8053 41.6986 32 40.2266 32C38.7546 32 37.5599 30.8053 37.5599 29.3333C37.5599 27.8613 38.7546 26.6667 40.2266 26.6667Z"
      fill="#B1E0FE"
    />
  </svg>
);
export default Wallet;
